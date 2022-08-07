import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OverviewMovers from './OverviewMovers'
import { useRouter } from 'next/router'

function Overview() {
  const movers = [
    [
      {
        id: 1,
        symbol: 'DJI',
        ticker: 'Dow Jones',
        price: 31388.15,
        percentChange: -0.15,
        change: -46.42,
      },
      {
        id: 2,
        symbol: 'IXIC',
        ticker: 'Nasdaq',
        price: 11635.31,
        percentChange: 0.12,
        change: 13.96,
      },
      {
        id: 3,
        symbol: 'SPY',
        ticker: 'S&P 500',
        price: 3899.38,
        percentChange: -0.083,
        change: -3.24,
      },
      {
        id: 4,
        symbol: 'RUT',
        ticker: 'Russell',
        price: 11635.31,
        percentChange: 0.12,
        change: 13.96,
      },
      {
        id: 5,
        symbol: 'VIX',
        ticker: 'VIX',
        price: 11635.31,
        percentChange: 0.12,
        change: 13.96,
      },
    ],
  ]
  const router = useRouter()
  const uid = router?.query?.uid?.toLocaleUpperCase()
  const [tab, setTab] = useState(0)
  const [update, setupdate] = useState(movers[0])
  const [name, setName] = useState('')
  const filterOverview = (name, num) => {
    if (tab == num) return
    setTab(num)
    setupdate(movers[num])
    setName(name)
  }
  // useEffect(() => {
  //   const url = `https://financialmodelingprep.com/api/v3/search?query=${name}&limit=6&=NASDAQ&apikey=920db31b16fa2246a1ea1cc5e3551659`
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url)
  //       const json = await response.json()
  //       setupdate(json)
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }
  //   fetchData()
  // }, [name])

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
            onClick={() => filterOverview(3)}
            className={`${tab == 3 && 'active'} filterBtn `}
          >
            <p className="">Currencies</p>
          </div>
          <div
            onClick={() => filterOverview(4)}
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
                  change={ticker.change}
                  percentChange={ticker.percentChange}
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
