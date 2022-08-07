import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { CheckCircle } from '@mui/icons-material'
import { useEffect, useLayoutEffect, useState } from 'react'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'
import { setUserData, useFetch } from './useFetch'
function WatchlistMoversRow({ ticker, desc }) {
  const [watchlist, setWatchlist] = useState([])
  const { data } = useFetch(
    `https://financialmodelingprep.com/api/v3/quote/${ticker.toLocaleUpperCase()}?apikey=28d6ee65329243c33f2324e5651df196`,
    ticker
  )

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
    setUserData(db, ticker, following, data[0]?.companyName)
  }
  useEffect(() => {
    console.log(ticker)
  }, [db])
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

      {data && (
        <div className="flex w-[130%]  items-center justify-between space-x-3">
          <p className="h-6  w-[70px]">
            ${data[0]?.price?.toString().slice(0, 6)}
          </p>

          <div className="flex  justify-start">
            <p
              className={`h-6 md:inline-flex ${
                data[0]?.change >= 0 ? 'text-green-700' : 'text-red-700'
              } `}
            >
              {data[0]?.change > 0 ? '+' : '-'}$
              {data[0]?.change?.toString().replace('-', '').slice(0, 4)}
            </p>
          </div>
          <div className="flex space-x-3">
            <div
              className={` ${
                data[0]?.change >= 0 ? 'bg-green-100' : 'bg-red-100'
              } flex h-fit w-[74px] items-center justify-center  rounded-lg `}
            >
              <div className="flex  items-center font-[400] ">
                {data[0]?.change <= 0 ? (
                  <ArrowDownIcon className="h-4 w-4 text-red-700" />
                ) : (
                  <ArrowUpIcon className="h-4 w-4 text-green-700" />
                )}
                <p
                  className={` p-1 text-[15px] ${
                    data[0]?.change >= 0 ? 'text-green-700' : 'text-red-700'
                  } `}
                >
                  {data[0]?.changesPercentage
                    ?.toString()
                    .replace('-', '')
                    .slice(0, 4)}
                  %
                </p>
              </div>
            </div>
            <CheckCircle
              onClick={followTicker}
              className=" text-gray-500 hover:text-blue-600"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WatchlistMoversRow
