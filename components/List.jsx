import WatchlistMovers from './WatchlistMovers'
import { db } from '../firebase'
import { getUserData } from './useFetch'
import Link from 'next/link'
function List() {
  const { data: userData } = getUserData(db)
  return (
    <div className="flex  flex-col xl:ml-0  ">
      <p className="  mb-3 text-lg font-light text-gray-900 ">
        Top movers in your lists
      </p>
      {userData?.length >= 1 ? (
        userData.map((ticker, i) => (
          <Link href={`/finance/${ticker.ticker}`}>
            <div
              key={ticker.ticker}
              className=" flex cursor-pointer flex-col transition duration-200 ease-in-out  hover:bg-gray-50 "
            >
              <WatchlistMovers ticker={ticker.ticker} desc={ticker.desc} />
            </div>
          </Link>
        ))
      ) : (
        <p className="flex h-20 items-center justify-center ">
          {' '}
          Watchlist Empty{' '}
        </p>
      )}
    </div>
  )
}

export default List
