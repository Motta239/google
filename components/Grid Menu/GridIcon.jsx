import React, { useEffect, useRef, useState } from 'react'
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
  ChevronDownIcon,
  PencilIcon,
} from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { postModal } from '../../atoms/postModal'

import MenuIcon from './MenuIcon'
import { DesktopComputerIcon } from '@heroicons/react/outline'

function NotificationIcon({ Icon, name, dark }) {
  const myRefNot = useRef()
  const [openNot, setOpenNot] = useState(false)
  const [style, setStyle] = useState({ display: 'none' })
  const [openPostWindow, setOpenPostWindow] = useRecoilState(postModal)

  const [search, setSearch] = useState('')
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!myRefNot.current?.contains(e.target)) {
        setOpenNot(false)
        setSearch('')
      }
    })
  })

  const menuItems = [
    {
      icon: FlagIcon,
      head: 'Events',
      desc: 'Organize or find events and other thing to do online and nearby.',
    },
    {
      icon: PlayIcon,
      head: 'Events',
      desc: 'Discover and connect with businesses on Facebook',
    },
    {
      icon: UserGroupIcon,

      head: 'Friends',
      desc: 'Search for friends or people you may know.',
    },
    {
      icon: BellIcon,
      head: 'Events',
      desc: 'Connect with people who share your interests.',
    },
    {
      icon: ChatIcon,
      head: 'Events',
      desc: 'See relevant posts from people and Pages you follow.',
    },
    {
      icon: SearchIcon,
      head: 'Events',
      desc: 'See relevant posts from people and Pages you follow.',
    },

    {
      icon: ShoppingCartIcon,
      head: 'Events',
      desc: 'See relevant posts from people and Pages you follow.',
    },
    {
      icon: ViewGridIcon,
      head: 'Events',
      desc: 'See relevant posts from people and Pages you follow.',
    },
    {
      icon: ChatIcon,
      head: 'Events',
      desc: 'See relevant posts from people and Pages you follow.',
    },
  ]

  const filterdMenuItems = menuItems.filter(
    (item) =>
      item.head.toLowerCase().includes(search.toLowerCase().trim()) ||
      item.desc.toLowerCase().includes(search.toLowerCase().trim())
  )
  return (
    <div
      onMouseEnter={(e) => setStyle({ display: 'inline-flex' })}
      onMouseLeave={(e) => setStyle({ display: 'none' })}
      onClick={(e) => setStyle({ display: 'none' })}
      ref={myRefNot}
      className="hidden lg:inline-flex"
    >
      <div className="flex flex-col items-center justify-center ">
        <p
          style={style}
          className={` top-30 w-fit-content fixed  z-10 mt-36  flex items-center rounded-md   bg-gray-700 p-2 text-sm text-white shadow-xl transition-all duration-1000 ease-in-out`}
        >
          {name}
        </p>
      </div>
      <Icon
        onClick={() => setOpenNot(!openNot)}
        className={openNot ? 'icon text-blue-500' : 'icon'}
      />
      {openNot && (
        <div
          className={` flex-end absolute right-[172px] top-[70px] z-10 flex h-[724px] w-[640px] flex-col justify-start  overflow-y-scroll rounded-xl ${
            dark ? 'bg-cg' : 'bg-gray-100'
          }   shadow-xl scrollbar-hide  `}
        >
          <div
            className={`fixed flex h-20 w-[630px] flex-col items-center justify-center space-y-3 rounded-2xl  ${
              dark ? 'bg-cg text-white ' : 'bg-gray-100'
            } p-0 text-center text-xl font-bold `}
          >
            <p>{name}</p>
          </div>
          <div className=" flex flex-col  p-3">
            <div className=" mt-20 flex w-full space-x-3 rounded-sm">
              <div
                className={`w-2/3 rounded-lg ${
                  dark ? 'bg-cg text-white  ' : 'bg-gray-100'
                } p-2 shadow-lg  `}
              >
                <input
                  type="text"
                  className={` placeholder border-gray h-2 w-full items-center rounded-full border-transparent ${
                    dark && 'text-black'
                  } bg-gray-100  p-6 outline-none  focus:border-transparent  focus:ring-0  md:inline-flex`}
                  placeholder={`Search ${name}`}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <p className="p-4  font-bold">Social</p>
                <div className=" flex flex-col space-y-2 ">
                  {filterdMenuItems.length > 0 ? (
                    filterdMenuItems.map((item) => (
                      <MenuIcon
                        Icon={item.icon}
                        head={item.head}
                        desc={item.desc}
                        dark={dark}
                      />
                    ))
                  ) : (
                    <div className="p-3 text-center text-xs text-gray-400">
                      <p
                        cla
                      >{`No Results For The Search "${search}".Try checking for typos or using complete words.`}</p>{' '}
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`h-fit w-1/3 rounded-lg      ${
                  dark ? 'bg-cg text-white ' : 'bg-gray-100'
                } p-2 shadow-lg `}
              >
                <p className="font-bol p-4 ">Create</p>
                <div
                  onClick={() => {
                    setOpenPostWindow(true)
                    setOpenNot(false)
                  }}
                  className={`flex items-center justify-start space-x-2 rounded-md p-2  ${
                    dark && 'hover:text-black'
                  } hover:bg-blue-100`}
                >
                  <PencilIcon className="h-12 w-12    p-1 text-blue-500" />
                  <p className="text-sm font-semibold">Post</p>
                </div>
                <div
                  className={`flex items-center justify-start space-x-2 rounded-md p-2  ${
                    dark && 'hover:text-black'
                  } hover:bg-blue-100`}
                >
                  <DesktopComputerIcon className="h-12 w-12    p-1 text-blue-500" />
                  <p className="text-sm font-semibold">Room</p>
                </div>
                <div
                  className={`flex items-center justify-start space-x-2 rounded-md p-2  ${
                    dark && 'hover:text-black'
                  } hover:bg-blue-100`}
                >
                  <UserGroupIcon className="h-12 w-12    p-1 text-blue-500" />
                  <p className="text-sm font-semibold">Group Post </p>
                </div>
                <div
                  className={`flex items-center justify-start space-x-2 rounded-md p-2  ${
                    dark && 'hover:text-black'
                  } hover:bg-blue-100`}
                >
                  <PlayIcon className="h-12 w-12    p-1 text-blue-500" />
                  <p className="text-sm font-semibold">Story</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationIcon
