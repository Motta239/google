import { useRouter } from 'next/router'
import { useRef } from 'react'
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

function Finance() {
  const router = useRouter()
  const { data: userData } = getUserData(db)
  const uid = router.query.uid?.toLocaleUpperCase()
  const windowRef = useRef()
  const { data: stockData } = useFetch(
    `https://financialmodelingprep.com/api/v3/profile/${uid}?apikey=174e82b29da8eaa0651456c2933d7913`
  )
  const { data: newsData } = useFetch(
    `https://newsapi.org/v2/everything?q=${uid}&from=2022-07-07&sortBy=publishedAt&apiKey=1535b6e27e7941ff9ac8336e72365ae3`
  )

  const following = userData?.findIndex(
    (element) => element.ticker.toLocaleUpperCase() === uid
  )
  const followTicker = async (e) => {
    e.stopPropagation()
    setUserData(db, stockData[0]?.symbol, following, stockData[0]?.companyName)
  }
  const filterdNews = newsData?.filter((n) => n.title.includes(uid))
  console.log(filterdNews)
  return (
    <div ref={windowRef}>
      {stockData ? (
        <div className="  flex flex-col space-y-5 lg:items-center">
          <div className="flex-flex-col  justify-around  ">
            <Head>
              <title>{`${stockData[0]?.symbol} $${stockData[0]?.price} (${
                stockData[0]?.changes < 0 ? '🔻' : '🟢'
              }${Math.abs(
                (
                  ((stockData[0]?.changes - stockData[0]?.price) /
                    stockData[0]?.price) *
                  100
                )?.toFixed(2)
              )}%) ${stockData[0]?.companyName} `}</title>
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
                      <p className="text-gray-900">{` ${stockData[0]?.symbol}`}</p>
                      <p className="text-gray-900">{`• ${stockData[0]?.exchangeShortName}`}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {stockData[0]?.image ? (
                      <img
                        className="h-7 w-7 rounded-full object-fill shadow-lg"
                        src={stockData[0]?.image}
                        alt=""
                      />
                    ) : (
                      <SpinnerCircular />
                    )}
                    <p className="text-[22px] text-gray-700 ">
                      {stockData[0]?.companyName}
                    </p>
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
                <div className=" flex max-w-[675px]  flex-col lg:w-[675px]">
                  <div className="flex h-11  items-center space-x-2 ">
                    <p className="text-[1.75rem] text-gray-700 ">
                      ${stockData[0]?.price}
                    </p>
                    <div
                      className={` ${
                        stockData[0]?.changes >= 0
                          ? 'bg-green-100'
                          : 'bg-red-100'
                      } flex h-fit w-[74px] items-center justify-center  rounded-lg `}
                    >
                      <ArrowDownIcon
                        className={`h-7   ${
                          stockData[0]?.changes >= 0
                            ? 'rotate-180 text-green-600 '
                            : 'text-red-700'
                        }  items-center rounded-lg  py-2 `}
                      />
                      <div className="flex w-[47px] ">
                        <p
                          className={` p-1 text-[13px] font-semibold ${
                            stockData[0]?.changes >= 0
                              ? 'text-green-700'
                              : 'text-red-700'
                          } `}
                        >
                          {Math.abs(
                            (
                              (stockData[0]?.changes / stockData[0]?.price) *
                              100
                            )?.toFixed(2)
                          )}
                          %
                        </p>
                      </div>
                    </div>
                    <p
                      className={`  ${
                        stockData[0]?.changes > 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {`${
                        stockData[0]?.changes > 0 ? '+' : ''
                      }${stockData[0]?.changes.toFixed(2)}`}{' '}
                      Today
                    </p>
                  </div>

                  <p className="text-lg">In The News</p>
                  {newsData ? (
                    filterdNews
                      ?.slice(0, 7)
                      .map((news) => (
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
                <div className="flex w-[93vw] flex-col space-y-4  lg:w-[350px]">
                  <About
                    name={stockData[0]?.companyName}
                    desc={stockData[0]?.description}
                    employees={stockData[0]?.fullTimeEmployees}
                    ceo={stockData[0]?.ceo}
                    website={stockData[0]?.website}
                    img={stockData[0]?.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex h-[100vh] items-center justify-center">
          <SpinnerCircular />
        </div>
      )}
    </div>
  )
}

export default Finance
