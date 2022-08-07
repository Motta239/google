import React, { useEffect, useLayoutEffect, useState, memo } from 'react'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { useFetch, getUserData, setUserData } from './useFetch'
import { db, storage } from '../firebase'
import { CheckIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
function StockSqure({ name, price, fullName, color, change }) {
  const { data: userData } = getUserData(db)
  const following = userData?.findIndex(
    (element) => name === element.ticker.toLocaleUpperCase()
  )

  const { data: session } = useSession()
  const followTicker = (e) => {
    e.stopPropagation()
    setUserData(db, name, following, fullName, session)
  }
  return (
    <Link href={`/finance/${name}`}>
      <div
        className={`discoverBtn flex h-[165px] w-[165px] flex-col justify-between rounded-lg border hover:scale-105 active:scale-90 ${
          following === -1 ? 'bg-white' : 'bg-white p-3 shadow-xl'
        } ease-[cubic-bezier(0, 1.13, 1,   0.25)] p-2 transition-all duration-500 hover:shadow-lg `}
      >
        <div className=" flex flex-col space-y-1">
          <p
            style={{ backgroundColor: color }}
            className={`flex h-[22px] w-[47px] items-center justify-center rounded-md  text-xs font-semibold text-white `}
          >
            {name}
          </p>
          <p
            className={`flex h-[22px]   rounded-lg  ${
              fullName?.length > 17 && 'text-xs'
            }`}
          >
            {fullName}
          </p>
        </div>
        <div className=" flex flex-col space-y-2">
          <p className="flex h-[22px]  text-lg   ">${price}</p>
          <div className="flex w-full items-center justify-between">
            <p
              className={` flex h-[32px] w-[80px] items-center justify-center rounded-lg bg-gray-200 font-[500] ${
                change < 0
                  ? 'bg-[#f7d7d7] text-red-700'
                  : 'bg-[#d7f7de] text-green-700'
              } `}
            >
              {change.toFixed(2)} %
            </p>
            {following === -1 ? (
              <PlusCircleIcon
                onClick={followTicker}
                className="h-6 w-6 text-[#3c4043] hover:text-blue-500"
              />
            ) : (
              <CheckIcon
                onClick={followTicker}
                className="h-6 w-6  text-blue-500"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
export default memo(StockSqure)
