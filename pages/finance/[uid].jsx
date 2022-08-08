import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import About from '../../components/About'
import { useFetch, getUserData, setUserData } from '../../components/useFetch'
import {
  ArrowDownIcon,
  CheckIcon,
  PlusIcon,
  ShareIcon,
} from '@heroicons/react/solid'
import Head from 'next/head'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { db } from '../../firebase'
import NewCard from '../../components/NewCard'
import { SpinnerCircular } from 'spinners-react'
import axios from 'axios'
function Finance() {
  const router = useRouter()
  const { data: userData } = getUserData(db)
  const uid = router.query.uid?.toLocaleUpperCase()
  const windowRef = useRef()

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [profileData, setProfileData] = useState([])
  const [newsData, setNewsData] = useState([])

  const getStockData = async (url) => {
    setLoading(true)
    const { data } = await axios.get(url)
    setData(data[0])
    setLoading(false)
  }
  const getStockProfileData = async (url) => {
    setLoading(true)
    const { data } = await axios.get(url)
    setProfileData(data[0])
    setLoading(false)
  }
  const getNewsData = async (url) => {
    setLoading(true)
    const { data } = await axios.get(url)
    setNewsData(data.slice(0, 7))
    setLoading(false)
  }

  useEffect(() => {
    getStockData(
      `https://financialmodelingprep.com/api/v3/quote/${uid}?apikey=28d6ee65329243c33f2324e5651df196`
    )
    getStockProfileData(
      `https://financialmodelingprep.com/api/v3/profile/${uid}?apikey=28d6ee65329243c33f2324e5651df196`
    )
    getNewsData(
      `https://financialmodelingprep.com/api/v3/stock_news?tickers=${uid}&limit=50&apikey=28d6ee65329243c33f2324e5651df196`
    )
  }, [uid])

  const followTicker = async (e) => {
    e.stopPropagation()
    setUserData(db, data.symbol, following, data.symbol)
  }
  const following = userData?.findIndex(
    (element) => element.ticker.toLocaleUpperCase() === uid
  )
  console.log(data, profileData)
  return (
    <div ref={windowRef}>
      {data == undefined && profileData == undefined ? (
        <div className=" flex h-[100vh] items-center justify-center">
          <SpinnerCircular />
        </div>
      ) : (
        <div className="  flex flex-col space-y-5 lg:items-center">
          <div className="flex-flex-col  justify-around  ">
            <Head>
              <title>{`${data.symbol} $${data.price} (${
                data.change < 0 ? '▼' : '▲ '
              }${Math.abs(data.changesPercentage?.toFixed(2))}%) ${
                data.name
              } `}</title>
              <link rel="icon" href="/icons8-google.svg" />
            </Head>

            <div className=" flex  flex-col   px-6 ">
              <div className="flex h-16 items-center justify-between text-gray-500">
                <div className="">
                  <div className="flex">
                    <a href="/" className="text-[12px] ">
                      Home
                    </a>
                    <div className="flex  space-x-1 text-[12px]  ">
                      <ChevronLeftIcon className="h-4 w-4 rotate-180  " />
                      <p className="text-gray-900">{` ${data.symbol}`}</p>
                      <p className="text-gray-900">{`• ${data.exchange}`}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {profileData?.image && (
                      <img
                        className="h-7 w-7 rounded-full object-fill shadow-lg"
                        src={profileData.image}
                        alt=""
                      />
                    )}
                    <p className="text-[22px] text-gray-700 ">{data.name}</p>
                  </div>
                </div>
                <div className="flex space-x-3 text-blue-600">
                  <button
                    onClick={followTicker}
                    className={`${
                      following >= 0 ? 'bg-blue-100  ' : 'bg-white'
                    } flex h-8 w-[2rem]
                items-center  justify-center space-x-1 rounded-full border  p-2  shadow-xl hover:bg-gray-100 md:w-fit`}
                  >
                    {following >= 0 ? (
                      <CheckIcon className="h-5 w-5" />
                    ) : (
                      <PlusIcon className="h-5 w-5" />
                    )}
                    <p
                      className={` hidden text-[smaller] text-blue-500 md:inline-flex`}
                    >
                      {following >= 0 ? 'Following' : 'Follow'}
                    </p>
                  </button>
                  <button className="flex h-8 w-[2rem] items-center justify-center space-x-1 rounded-full border  p-2  shadow-xl hover:bg-gray-100 md:w-fit">
                    <ShareIcon className="h-4 w-4" />
                    <p className=" hidden text-[smaller] text-blue-500 md:inline-flex">
                      Share
                    </p>
                  </button>
                </div>
              </div>

              <p className="mt-2 border-b  "></p>
              <div className="mt-5 flex w-[93%] flex-col justify-between lg:w-[1024px] lg:flex-row ">
                <div className=" flex w-[90vw]   flex-col lg:w-[675px]">
                  <div className="flex h-11  items-center space-x-2 ">
                    <p className="text-[1.75rem] text-gray-700 ">
                      ${data.price}
                    </p>
                    <div
                      className={` ${
                        data.change >= 0 ? 'bg-green-100' : 'bg-red-100'
                      } flex h-fit w-[74px] items-center justify-center  rounded-lg `}
                    >
                      <ArrowDownIcon
                        className={`h-7   ${
                          data.change >= 0
                            ? 'rotate-180 text-green-600 '
                            : 'text-red-700'
                        }  items-center rounded-lg  py-2 `}
                      />
                      <div className="flex w-[47px] ">
                        <p
                          className={` p-1 text-[13px] font-semibold ${
                            data.change >= 0 ? 'text-green-700' : 'text-red-700'
                          } `}
                        >
                          {Math.abs(data.changesPercentage?.toFixed(2))}%
                        </p>
                      </div>
                    </div>
                    <p
                      className={`  ${
                        data.change > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {`${data.change > 0 ? '+' : ''}${data.change}`} Today
                    </p>
                  </div>

                  <p className="text-lg">In The News</p>
                  {newsData ? (
                    newsData.map((news) => (
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
                <div className="flex w-[93vw] flex-col space-y-4  lg:w-[350px]">
                  {profileData && (
                    <About
                      name={profileData.companyName}
                      desc={profileData.description}
                      employees={profileData.fullTimeEmployees}
                      ceo={profileData.ceo}
                      website={profileData.website}
                      img={profileData.image}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Finance
