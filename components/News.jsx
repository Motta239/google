import React, { useEffect, useState } from 'react'
import NewCard from './NewCard'
import { useFetch } from './useFetch'
import { SpinnerCircular } from 'spinners-react'
import { getUserData } from './useFetch'
import { db } from '../firebase'

function News() {
  const { data: userData } = getUserData(db) //user watchlist
  const list = userData?.map((t) => t.ticker).join() //user watchlist news
  const { data } = useFetch(
    `https://financialmodelingprep.com/api/v3/stock_news?tickers=${list}&page=0&apikey=28d6ee65329243c33f2324e5651df196`
  )
  const [news, setNews] = useState(data)
  const [tab, setTab] = useState(0)
  useEffect(() => {
    filterOverview(0, 20)
  }, [data])
  const filterOverview = (num, num2) => {
    setTab(num)
    setNews(data?.slice(0, num2).sort((a, b) => 0.5 - Math.random()))
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className=" flex flex-col space-y-3">
        <p className=" mb-3 text-lg font-light text-gray-900 ">
          Today's financial news
        </p>
        <div className="flex space-x-2">
          <div
            onClick={() => filterOverview(0, 12)}
            className={`${tab == 0 && 'active'} filterBtn  border-[0.9px]`}
          >
            <p className=" ">Top stories</p>
          </div>
          <div
            onClick={() => filterOverview(1, 5)}
            className={`${tab == 1 && 'active'} filterBtn border-[0.9px]`}
          >
            <p className="">World markets</p>
          </div>
          <div
            onClick={() => filterOverview(2, 13)}
            className={` ${tab == 2 && 'active'} filterBtn border-[0.9px] `}
          >
            <p className="">Local markets</p>
          </div>
        </div>
      </div>
      <div className="">
        {news ? (
          news.map((news) => (
            <NewCard
              source={news.site}
              imgUrl={news.image}
              date={news.publishedDate}
              head={news.title}
              link={news.url}
              symbol={news.symbol}
            />
          ))
        ) : (
          <div className="flex h-56 flex-col items-center justify-center space-y-3">
            <SpinnerCircular />
            <p>Getting News...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default News
