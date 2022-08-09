import { PlusIcon } from '@heroicons/react/solid'
import { Poll } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { db, storage } from '../firebase'
import { useRouter } from 'next/router'
import { createProtfolio, getUserProtfolios } from './useFetch'
import toast, { Toaster } from 'react-hot-toast'
function YourProfolio() {
  const { data: session } = useSession()
  const { data: userData } = getUserProtfolios(db)
  const [openModal, setopenModal] = useState(null)
  const inputRef = useRef()
  const exitModal = useRef()
  const router = useRouter()
  const userName = session?.username

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside)
    return () => document.removeEventListener('mousedown', clickOutside)
  })
  const clickOutside = (e) => {
    if (!exitModal.current?.contains(e.target)) {
      setopenModal(null)
    }
  }

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden'
      return () => (document.body.style.overflow = 'unset')
    }
  }, [openModal])

  const creatPortfolip = async () => {
    const portfolioName = inputRef.current.value
    if (!session) return toast.error(`User Login is required`)
    if (portfolioName.length > 0) {
      createProtfolio(db, userName, portfolioName, session.user.uid)
      setopenModal(null)
      const push = router.push({
        pathname: `/protfolio/${portfolioName}`,
      })
      toast.success(`${portfolioName}  Created `)
    } else {
      toast.error(`portfolio name is required`)
      inputRef.current.focus()
    }
  }
  const handleClick = () => {
    setopenModal(
      <div className="fixed inset-0 z-50 m-0 flex justify-center  bg-[#20212499]   backdrop-blur-sm ">
        <div
          ref={exitModal}
          className="mt-40 flex h-[223px] w-[400px] flex-col justify-between rounded-lg border bg-white p-4 shadow-xl "
        >
          <p className="font-sans text-xl text-gray-700 ">
            Create a new portfolio
          </p>
          <input
            ref={inputRef}
            type="text"
            placeholder="Protfolio Name"
            className="h-12 w-full rounded-lg border shadow-xl"
          />
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={() => {
                setopenModal(null)
              }}
              className="flex h-12 w-20  items-center justify-center rounded-2xl border bg-gray-100 text-blue-500 hover:bg-white"
            >
              Cancel
            </button>
            <button
              onClick={creatPortfolip}
              className={`text-white'flex h-12 w-20
                   items-center justify-center rounded-2xl
             border bg-blue-600  text-white `}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="  flex h-fit flex-col   rounded-lg md:border-[0.7px] md:shadow-md  ">
        <div className="flex w-full flex-col space-y-2 p-4 ">
          <div className="flex justify-between">
            <div className="flex space-x-3">
              <div className="flex items-center rounded-xl bg-blue-100 p-2 ">
                <Poll className="text-blue-500" />
              </div>
              <div className="">
                <p className="text-gray-800">Your portfolios</p>
                <p className="text-xs font-light text-gray-600">
                  Only you can see this
                </p>
              </div>
            </div>
            <div
              onClick={handleClick}
              className=" flex h-9 w-9  justify-center  rounded-full border shadow-md hover:bg-blue-50 md:hidden "
            >
              <div className=" flex  items-center justify-center space-x-2 rounded-full ">
                <PlusIcon className="h-5 w-5 text-blue-500 " />
              </div>
            </div>
          </div>
          <p className="w-fit text-xl  ">$13,720</p>
        </div>
        <div className="">
          {userData?.map((portfolio) => (
            <ProtfolioRow
              id={portfolio.id}
              name={portfolio.data().portfolioName}
              username={portfolio.data().username}
            />
          ))}
        </div>
        <div className=" hidden justify-center p-4 md:inline-flex">
          <div
            onClick={handleClick}
            className=" flex h-9 w-[200px] items-center justify-center space-x-2 rounded-full border hover:bg-blue-50 "
          >
            <PlusIcon className="h-5 w-5 text-blue-500 " />
            <p className="text-sm text-blue-500">New portfolio</p>
          </div>
        </div>
        {openModal}
      </div>
    </>
  )
}

export default YourProfolio

function ProtfolioRow({ name, username, id }) {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <>
      {username == session?.username && (
        <div
          onClick={() => {
            router.push({
              pathname: `/protfolio/${name}`,
            })
          }}
          className="flex h-10 cursor-pointer items-center justify-between p-2  text-xs     hover:bg-gray-100 "
        >
          <p className="pl-3">{name}</p>
          <div className="flex items-center space-x-3 text-[15px] ">
            <p>0.00</p>
            <p className=" flex h-8 w-14 items-center justify-center rounded-lg bg-gray-200 text-[15px] ">
              0.00%
            </p>
          </div>
        </div>
      )}
    </>
  )
}
