import Image from 'next/image'
import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SearchIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  const router = useRouter();
  console.log(open)
  return (
    <div className="border-b backdrop-blur-xl sticky top-0 z-50 ">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* left Header */}
        <div onClick={() => router.push('/')} className="relative hidden w-24 lg:inline-grid ">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div onClick={() => router.push('/')} className=" relative w-10 flex-shrink-0 cursor-pointer lg:hidden ">
          <Image
            src="https://links.papareact.com/jjm"
            objectFit="contain"
            layout="fill"
          />
        </div>

        {/* middle Header */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md  p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className=" outline-none rounded-[40px] sm:bg-gray-0 focus:border focus:ring-blue-500 w-full pl-10 focus:border-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right Header */}
        <div className="flex items-center justify-items-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className=" h-10 w-10 hover:scale-125 md:hidden" />
          {session ? (
            <>
              <div className="navBtn"  >
                <PaperAirplaneIcon className="" />
                <div className="-top-1 -right-2 absolute m-3  flex h-5 w-5  animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white ">
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn " />
              <UserGroupIcon className="navBtn " />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profile pic"
                className=" h-10 w-10 cursor-pointer rounded-full md:inline"
              />
            </>

          ) : (
            <button onClick={signIn}>Sign In</button>
          )}


        </div>
      </div>
    </div>
  )
}

export default Header
