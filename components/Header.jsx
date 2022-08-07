import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import Search from './Search'
import { useRouter } from 'next/router'

function Header() {
  const { data: session } = useSession()
  const [scrollPosition, setScrollPosition] = useState(0)
  const router = useRouter()
  const uid = router?.query?.uid?.toLocaleUpperCase()

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return (
    <div
      className={`sticky top-0 z-40 flex h-[60px] w-full items-center justify-between p-1 backdrop-blur-sm md:p-3 ${
        scrollPosition > 0 ? 'shadow-xl' : 'shadow-none'
      }  transition-all duration-200 ease-in lg:px-5`}
    >
      <div className="flex">
        <MenuIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-200" />
        <div className="ml-2 flex items-center ">
          <Link href="/">
            <img className=" h-10 w-20" src="/google.svg" />
          </Link>
        </div>
      </div>
      {uid && <Search />}
      {session ? (
        <div className=" flex items-center space-x-5">
          <div className=" flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200">
            <img className=" " src="/grid.svg" />
          </div>
          <img
            onClick={signOut}
            src={session?.user?.image}
            alt="profile pic"
            className=" h-10 w-10 cursor-pointer rounded-full p-1 hover:bg-gray-200 "
          />
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
