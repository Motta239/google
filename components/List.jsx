import WatchlistMovers from './WatchlistMovers'
import { db } from '../firebase'
import { getUserData, useFetch } from './useFetch'
import Link from 'next/link'
import { useRouter } from 'next/router'
function List() {
  const router = useRouter()
  const uid = router.query.uid?.toLocaleUpperCase()
  const { data: userData } = getUserData(db)
  const list = userData?.map((t) => t.ticker).join()
  const { data } = useFetch(
    `https://financialmodelingprep.com/api/v3/quote/${list}?apikey=28d6ee65329243c33f2324e5651df196`
  )
  console.log(data)

  return (
    <div className="flex  flex-col xl:ml-0  ">
      <p className="  mb-3 text-lg font-light text-gray-900 ">
        Top movers in your lists
      </p>
      {data?.length >= 1 ? (
        data.map((ticker, i) => (
          <Link href={`/finance/${ticker.symbol}`}>
            <div
              key={i}
              className=" flex cursor-pointer flex-col transition duration-200 ease-in-out  hover:bg-gray-50 "
            >
              <WatchlistMovers
                ticker={ticker.symbol}
                desc={ticker.name}
                price={ticker.price}
                percent={ticker.changesPercentage}
                change={ticker.change}
              />
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
