import { ArrowDownIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'

function SearchResults({ ticker, exc, price, tickerName, change }) {
  // const [tickerInfo, setTickerInfo] = useState('')
  // useEffect(() => {
  //   const url = `https://financialmodelingprep.com/api/v3/quote-short/${ticker}?apikey=28d6ee65329243c33f2324e5651df196`
  //   console.log(url)
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url)
  //       const json = await response.json()
  //       setTickerInfo(json)
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }

  //   fetchData()
  // }, [ticker])
  // console.log(tickerInfo)
  const percent = (change / price) * 100

  return (
    <div className="flex   flex-col bg-white hover:bg-gray-100">
      {/* {tickerInfo !== undefined && ( */}

      <div className="flex h-12   cursor-pointer items-center justify-between border-b p-2 text-xs transition duration-300 ease-in-out hover:pl-3 hover:shadow-blue-200 md:text-sm ">
        <div className=" flex w-3/5 flex-col justify-start   ">
          <p className="text-md w-full  font-semibold">{ticker}</p>
          <p className=" w-fit truncate text-[10px] ">{tickerName}</p>
        </div>

        <p
          className={`hidden w-1/5 md:inline-flex ${
            change > 0 ? 'text-green-700' : 'text-red-700'
          }`}
        >
          ${price.toFixed(2)}
        </p>
        <div
          className={` ${
            percent >= 0 ? 'bg-green-100' : 'bg-red-100'
          } flex h-fit w-[74px] items-center justify-center  space-x-1  rounded-lg `}
        >
          <div className="flex  ">
            <p
              className={` p-1 text-[13px] font-semibold ${
                percent >= 0 ? 'text-green-700' : 'text-red-700'
              } `}
            >
              {Math.abs(percent?.toFixed(2))}%
            </p>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  )
}

export default SearchResults
