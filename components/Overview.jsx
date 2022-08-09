import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OverviewMovers from './OverviewMovers'
import { useRouter } from 'next/router'
import axios from 'axios'

function Overview() {
  const router = useRouter()
  const uid = router?.query?.uid?.toLocaleUpperCase()
  const [update, setUpdate] = useState(null)
  const [url, setUrl] = useState(
    `https://financialmodelingprep.com/api/v3/quotes/index?apikey=28d6ee65329243c33f2324e5651df196`
  )

  const getData = async (url) => {
    const { data } = await axios.get(url)
    setUpdate(data.slice(0, 10))
  }
  useEffect(() => {
    getData(url)
  }, [url])
  const [tab, setTab] = useState(0)
  const filterOverview = (num, url) => {
    if (tab == num) return
    setUrl(url)
    setTab(num)
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
            onClick={() =>
              filterOverview(
                0,
                `https://financialmodelingprep.com/api/v3/quotes/nyse?apikey=28d6ee65329243c33f2324e5651df196`
              )
            }
            className={`${tab == 0 && 'active'} filterBtn `}
          >
            <p className="">US</p>
          </div>
          <div
            onClick={() =>
              filterOverview(
                1,
                `https://financialmodelingprep.com/api/v3/quotes/nasdaq?apikey=28d6ee65329243c33f2324e5651df196`
              )
            }
            className={`${tab == 1 && 'active'} filterBtn `}
          >
            <p className="">Europe</p>
          </div>
          <div
            onClick={() =>
              filterOverview(
                2,
                `https://financialmodelingprep.com/api/v3/quotes/index?apikey=28d6ee65329243c33f2324e5651df196`
              )
            }
            className={`${tab == 2 && 'active'} filterBtn `}
          >
            <p className="">Asia</p>
          </div>
          <div
            onClick={() =>
              filterOverview(
                3,
                `https://financialmodelingprep.com/api/v3/quotes/forex?apikey=28d6ee65329243c33f2324e5651df196`
              )
            }
            className={`${tab == 3 && 'active'} filterBtn `}
          >
            <p className="">Currencies</p>
          </div>
          <div
            onClick={() =>
              filterOverview(
                4,
                `https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=28d6ee65329243c33f2324e5651df196`
              )
            }
            className={`${tab == 4 && 'active'} filterBtn `}
          >
            <p className="">Crypto</p>
          </div>
          <div
            onClick={() =>
              filterOverview(
                5,
                `https://financialmodelingprep.com/api/v3/symbol/available-commodities?apikey=28d6ee65329243c33f2324e5651df196`
              )
            }
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
                  change={ticker.change}
                  percentChange={ticker.changesPercentage}
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
