import React from 'react'
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
} from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { contactId } from '../../atoms/contactId'
function NotCard({ name, image, message, dark }) {
  const [{ email }, setContactId] = useRecoilState(contactId)

  return (
    <div
      onClick={() =>
        setContactId({ name: name, src: image, openMessage: true })
      }
      className={`  flex h-20 w-auto items-center space-x-2 rounded-md border-t-[1px] p-2 ${
        dark && 'border-none text-white hover:bg-blue-500 '
      }  `}
    >
      <img
        src={image}
        alt="profile pic"
        className=" h-12 w-20 cursor-pointer rounded-full object-cover shadow-md md:inline"
      />
      <div className="flex w-full flex-col space-y-1 ">
        <div className="">{name}</div>
        <div
          className={`text-[12px]  ${dark ? 'text-white' : 'text-gray-500'}`}
        >
          {message}
        </div>
      </div>
      <div className="w-1/6">
        <FlagIcon className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  )
}

export default NotCard
