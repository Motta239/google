import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebars/Sidebar'
import Modal from '../components/Sidebars/Modal'
import Messanger from '../components/Messager'
import { useRecoilState } from 'recoil'
import { darkMode } from '../atoms/darkMode'
import { postModal } from '../atoms/postModal'
import { contactId } from '../atoms/contactId'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowCircleDownIcon,
  LockClosedIcon,
  MusicNoteIcon,
} from '@heroicons/react/outline'
import {
  RiGoogleFill,
  RiLock2Fill,
  RiSpotifyFill,
  RiYoutubeFill,
} from 'react-icons/ri'
import { BiCloud, BiLockOpen, BiMessage } from 'react-icons/bi'
import { CloudIcon, LockOpenIcon } from '@heroicons/react/solid'
import { CgAppleWatch, CgCopy } from 'react-icons/cg'
import { BsBack } from 'react-icons/bs'
function Home() {
  const [dark, setDark] = useRecoilState(darkMode)
  const [openPostWindow, setOpenPostWindow] = useRecoilState(postModal)

  const [pressed, setPressed] = useState(false)
  const [left, setleft] = useState(300)
  const [top, setTop] = useState(300)
  const [move, setMove] = useState(false)
  const ref = useRef()

  console.log(top, left)
  return (
    <div
      onClick={(event) => {
        if (move) {
          setTop(event.clientY - 20)
          setleft(event.clientX - 200)
        }
      }}
      className={`h-screen overflow-y-scroll ${
        dark ? 'bg-zinc-800' : 'bg-gray-200'
      }`}
    >
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/facebook.svg" />
      </Head>

      <Header dark={dark} />
      <div className=" relative flex lg:space-x-2">
        <Sidebar dark={dark} />
        <Feed dark={dark} />
        {/* <div
          style={{ top: top, left: left }}
          className={` fixed flex h-14 w-fit cursor-pointer items-center justify-around rounded-md bg-blue-200 p-2  shadow-xl transition-all duration-1000 ease-out focus:rotate-180 `}
        >
          <ArrowCircleDownIcon className="icon-floater text-fby" />
          <RiYoutubeFill className="icon-floater text-ytr " />
          <RiSpotifyFill className=" icon-floater text-fbg " />
          <RiGoogleFill className=" icon-floater text-blue-800 " />
          <CgAppleWatch className="icon-floater text-gray-600 " />
          {move ? (
            <BiLockOpen
              onClick={() => setMove(!move)}
              className="icon-floater hover:text-blue-800 "
            />
          ) : (
            <LockClosedIcon
              onClick={() => setMove(!move)}
              className="icon-floater hover:text-blue-400 "
            />
          )}
        </div> */}
      </div>
      {<Messanger dark={dark} />}
      {openPostWindow && <Modal dark={dark} />}
    </div>
  )
}

export default Home
