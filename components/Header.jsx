import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { MdDarkMode } from 'react-icons/md'
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
} from '@heroicons/react/solid'
import HeaderIcon from '../components/HeaderIcon'
import NotificationIcon from './Notifications/NotificationIcon'
import GridIcon from './Grid Menu/GridIcon'
import MessageIcon from './Messages/MessageIcon'
import { useRecoilState } from 'recoil'
import { darkMode } from '../atoms/darkMode'
import Link from 'next/link'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { db, storage } from '../firebase'

function Header() {
  const { data: session } = useSession()
  const myRef = useRef()
  const [dark, setDark] = useRecoilState(darkMode)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  const handleClickOutside = (e) => {
    if (!myRef.current?.contains(e.target)) {
      setOpen(false)
    }
  }
  const setDarkMode = async () => {
    if (!session) return
    if (dark) {
      await setDoc(doc(db, 'darkMode', `${session.user.name}`), {
        dark1: false,
      })
    } else {
      await setDoc(doc(db, 'darkMode', `${session.user.name}`), {
        dark1: true,
      })
    }
  }
  useEffect(
    () =>
      setTimeout(() => {
        onSnapshot(query(collection(db, 'darkMode')), (snapshot) => {
          snapshot.docs.map((snap) => {
            snap.id == session?.user.name && console.log(snap.data().dark1)
          })
        })
      }, 100),
    []
  )

  return (
    <div
      className={`sticky top-0 z-50 flex items-center p-2   ${
        dark ? 'bg-neutral-800' : 'bg-gray-100'
      } shadow-sm transition-all duration-1000 ease-in lg:px-5`}
    >
      {/* Header Left */}
      <div className="ml-2 flex items-center transition-all duration-500 ease-in lg:w-[310px]">
        <Link href="/">
          <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
          />
        </Link>
        {session && (
          <div className="ml-2 flex items-center  rounded-full lg:bg-gray-100">
            <SearchIcon
              className={` h-8 cursor-pointer hover:text-blue-500 ${
                dark ? 'text-white' : 'hover:text-blue text-gray-500'
              } md:ml-3 md:text-gray-600 `}
            />
            <input
              type="text"
              className=" hidden flex-shrink  items-center  border-transparent bg-transparent outline-none transition-all duration-300 ease-in focus:border-transparent focus:ring-0  lg:inline-flex "
              placeholder="Search facebook"
            />
          </div>
        )}
      </div>
      <div className="flex flex-grow justify-center">
        {session && (
          <div className="flex  space-x-3 md:space-x-2  ">
            <HeaderIcon Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        )}
        {/* Header Center */}
      </div>
      {/* Header Right */}
      {session ? (
        <div className=" flex  items-center   space-x-[10px] md:space-x-2 ">
          <div className="flex flex-col items-center justify-center  "></div>
          <img
            onClick={signOut}
            src={session?.user?.image}
            alt="profile pic"
            className=" h-10 w-10 cursor-pointer rounded-full sm:inline-flex"
          />
          <div className=" hidden space-x-2 md:inline-flex ">
            <GridIcon Icon={ViewGridIcon} name={'Menu'} dark={dark} />
            <MessageIcon Icon={ChatIcon} name={'Messages'} dark={dark} />
            <NotificationIcon Icon={BellIcon} name={'Notifications'} />
          </div>
          <div className="">
            <MdDarkMode
              onClick={() => {
                setDarkMode()
                setDark(!dark)
              }}
              className={`iconDark ${dark && 'bg-blue-200 text-blue-500'}`}
            />
          </div>
        </div>
      ) : (
        <button
          className="items-center rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-100 hover:text-blue-500"
          onClick={signIn}
        >
          {' '}
          Login
        </button>
      )}
    </div>
  )
}

export default Header
