import React, { useEffect, useState } from 'react'
import NewCard from './NewCard'
import { useFetch } from './useFetch'
import { SpinnerCircular } from 'spinners-react'
function News() {
  const { data } = useFetch(
    `https://newsapi.org/v2/everything?q=stock&from=2022-07-07&sortBy=publishedAt&apiKey=1535b6e27e7941ff9ac8336e72365ae3`
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
  console.log(news)
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
              source={news.source.name}
              imgUrl={news.urlToImage}
              date={news.publishedAt}
              head={news.title}
              link={news.url}
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
