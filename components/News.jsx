import React, { useState } from 'react'
import NewCard from './NewCard'
import { useFetch } from './useFetch'
import { SpinnerCircular } from 'spinners-react'
function News() {
  const [tab, setTab] = useState(null)
  const filterOverview = (num) => {
    setTab(num)
    console.log(num)
  }

  const { data: news } = useFetch(
    `https://newsapi.org/v2/everything?q=finance&from=2022-06-23&sortBy=publishedAt&apiKey=63b5b6782a37423882142eaaebf377f0`
  )
  return (
    <div className="flex flex-col space-y-3">
      <div className=" flex flex-col space-y-3">
        <p className=" mb-3 text-lg font-light text-gray-900 ">
          Today's financial news
        </p>
        <div className="flex space-x-2">
          <div
            onClick={() => filterOverview(0)}
            className={`${tab == 0 && 'active'} filterBtn  border-[0.9px]`}
          >
            <p className=" ">Top stories</p>
          </div>
          <div
            onClick={() => filterOverview(1)}
            className={`${tab == 1 && 'active'} filterBtn border-[0.9px]`}
          >
            <p className="">World markets</p>
          </div>
          <div
            onClick={() => filterOverview(2)}
            className={` ${tab == 2 && 'active'} filterBtn border-[0.9px] `}
          >
            <p className="">Local markets</p>
          </div>
        </div>
      </div>
      <div className="">
        {news ? (
          newsData?.map((news) => (
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
