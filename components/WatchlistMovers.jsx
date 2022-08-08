import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { setUserData } from './useFetch'
function WatchlistMoversRow({ ticker, desc, price, percent, change }) {
  const [watchlist, setWatchlist] = useState([])

  useEffect(
    () =>
      onSnapshot(collection(db, 'watchlist'), (snapshot) => {
        setWatchlist(snapshot.docs.map((ticker) => ticker.data()))
      }),
    [db]
  )
  const following = watchlist.findIndex(
    (element) =>
      element.ticker.toLocaleUpperCase() === ticker.toLocaleUpperCase()
  )

  const followTicker = async (e) => {
    e.stopPropagation()
    setUserData(db, ticker, following, ticker)
  }

  return (
    <div className="flex h-[55px] items-center space-x-3 border-t  ">
      <div className="flex w-full flex-col space-y-1 p-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-2">
        <div className={` w-[47px] rounded-lg bg-blue-500 p-1 text-center `}>
          <p className=" rounded-lg text-[11px]  font-semibold  text-white">
            {ticker}
          </p>
        </div>
        <p className="w-full text-xs">{desc}</p>
      </div>

      <div className="flex w-[130%]  items-center justify-between space-x-3">
        <p className="h-6  w-[70px]">${price?.toString().slice(0, 6)}</p>

        <div className="flex  justify-start">
          <p
            className={`h-6 md:inline-flex ${
              change >= 0 ? 'text-green-700' : 'text-red-700'
            } `}
          >
            {change > 0 ? '+' : '-'}$
            {change?.toString().replace('-', '').slice(0, 4)}
          </p>
        </div>
        <div className="flex space-x-3">
          <div
            className={` ${
              change >= 0 ? 'bg-green-100' : 'bg-red-100'
            } flex h-fit w-[74px] items-center justify-center  rounded-lg `}
          >
            <div className="flex  items-center font-[400] ">
              {change <= 0 ? (
                <ArrowDownIcon className="h-4 w-4 text-red-700" />
              ) : (
                <ArrowUpIcon className="h-4 w-4 text-green-700" />
              )}
              <p
                className={` p-1 text-[15px] ${
                  change >= 0 ? 'text-green-700' : 'text-red-700'
                } `}
              >
                {percent?.toString().replace('-', '').slice(0, 4)}%
              </p>
            </div>
          </div>

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
  )
}

export default WatchlistMoversRow
