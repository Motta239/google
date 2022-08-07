import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OverviewMovers from './OverviewMovers'
import { useRouter } from 'next/router'
import { useFetch, getUserData, setUserData } from './useFetch'
function Overview() {
  const router = useRouter()
  const uid = router?.query?.uid?.toLocaleUpperCase()
  const [update, setUpdate] = useState(null)
  const [url, setUrl] = useState(
    `https://financialmodelingprep.com/api/v3/quotes/index?apikey=28d6ee65329243c33f2324e5651df196`
  )
  const { data: indexData } = useFetch(url)
  useEffect(() => {
    filterOverview('US', 0)
  }, [])
  console.log(indexData)
  const [tab, setTab] = useState(0)
  const filterOverview = (name, num) => {
    if (tab == num) return
    setTab(num)
    setUpdate(indexData)
  }

  return (
    <div
      className={` ${
        uid && 'hidden'
      } flex w-full flex-col justify-center space-y-4 py-3 pl-4 scrollbar-hide lg:flex lg:max-w-[1024px]  `}
    >
      <div className="">
        <div className="mb-5 flex h-[24px] w-fit    ">
          <div
            onClick={() => {
              filterOverview('US', 0)
            }}
            className={`${tab == 0 && 'active'} filterBtn `}
          >
            <p className="">US</p>
          </div>
          <div
            onClick={() => filterOverview('U', 1)}
            className={`${tab == 1 && 'active'} filterBtn `}
          >
            <p className="">Europe</p>
          </div>
          <div
            onClick={() => filterOverview('S', 2)}
            className={`${tab == 2 && 'active'} filterBtn `}
          >
            <p className="">Asia</p>
          </div>
          <div
            onClick={() => {
              filterOverview(3)
              setUrl(
                `https://financialmodelingprep.com/api/v3/quotes/forex?apikey=28d6ee65329243c33f2324e5651df196`
              )
            }}
            className={`${tab == 3 && 'active'} filterBtn `}
          >
            <p className="">Currencies</p>
          </div>
          <div
            onClick={() => {
              filterOverview(4)
              setUrl(
                `https://financialmodelingprep.com/api/v3/quotes/forex?apikey=28d6ee65329243c33f2324e5651df196`
              )
            }}
            className={`${tab == 4 && 'active'} filterBtn `}
          >
            <p className="">Crypto</p>
          </div>
          <div
            onClick={() => filterOverview(5)}
            className={`${tab == 5 && 'active'} filterBtn `}
          >
            <p className="">Futures</p>
          </div>
        </div>

        <div className="flex space-x-2 overflow-hidden overflow-x-scroll scrollbar-hide   ">
          {update?.map((ticker, i) => (
            <Link href={`/finance/${ticker.symbol}`}>
              <div className="cursor-pointer" key={i}>
                <OverviewMovers
                  ticker={ticker.symbol}
                  price={ticker.price}
                  change={ticker.change.toString().slice(0, 7)}
                  percentChange={ticker.changesPercentage
                    .toString()
                    .slice(0, 5)}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Overview
