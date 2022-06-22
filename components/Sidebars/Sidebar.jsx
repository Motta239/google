import React, { useState } from 'react'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CloudIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'
import { useRecoilState } from 'recoil'
import { darkMode } from '../../atoms/darkMode'
import { signIn, signOut, useSession } from 'next-auth/react'
import { RiClockwise2Fill, RiYoutubeFill } from 'react-icons/ri'
import { BiCalculator, BiVideo } from 'react-icons/bi'
import { BsAppIndicator, BsCompass, BsDoorClosedFill } from 'react-icons/bs'
import Link from 'next/link'
function Sidebar() {
  const { data: session } = useSession()
  const [seeMore, setSeeMore] = useState(false)
  const [dark, setDark] = useRecoilState(darkMode)

  return (
    <div
      className={`fixed top-24 left-[-200px] h-full ${
        dark && 'text-white'
      } drop-shadow-md transition-all duration-300 ease-in lg:left-[35px] lg:w-[160px] `}
    >
      <SidebarRow src={session?.user?.image} title={session?.user?.name} />
      <Link href="/Friends">
        <div className="">
          <SidebarRow Icon={UsersIcon} title="Friends" />
        </div>
      </Link>
      <Link href="/Groups">
        <div className="">
          <SidebarRow Icon={UserGroupIcon} title="Groups" />
        </div>
      </Link>

      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={RiYoutubeFill} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      {!seeMore && (
        <div className="" onClick={() => setSeeMore(!seeMore)}>
          <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
      )}
      {seeMore && (
        <div className=" drop-shadow-xl transition-all duration-1000 ease-in">
          <SidebarRow Icon={BiCalculator} title="Watch" />
          <SidebarRow Icon={BsCompass} title="Events" />
          <SidebarRow Icon={CloudIcon} title="Memories" />
          <SidebarRow Icon={BsAppIndicator} title="See More" />
          <SidebarRow Icon={BsDoorClosedFill} title="Events" />
          <SidebarRow Icon={RiClockwise2Fill} title="Memories" />

          <div onClick={() => setSeeMore(!seeMore)}>
            <SidebarRow Icon={ChevronUpIcon} title="See Less" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
