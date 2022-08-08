import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SearchResults from './SearchResults'
import { useRouter } from 'next/router'
import { Close } from '@mui/icons-material'
import { SearchIcon } from '@heroicons/react/solid'
import { useFetch } from './useFetch'
import axios from 'axios'
import { SpinnerCircular } from 'spinners-react'
function Search() {
  const router = useRouter()
  const uid = router?.query?.uid?.toLocaleUpperCase()
  const goToPage = (url) => {
    setOpenSearchField(false)
    router.push({
      pathname: `/finance/${url}`,
    })
  }
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const getData = async (url) => {
    setLoading(true)
    const { data } = await axios.get(url)
    setData(data)
    setLoading(false)
  }
  console.log(loading)
  useEffect(() => {
    getData(
      `https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&limit=100&betaMoreThan=1&volumeMoreThan=100000&exchange=NYSE,NASDAQ&apikey=28d6ee65329243c33f2324e5651df196`
    )
  }, [])

  const [search, setSearch] = useState('')
  const [searchBarWit, setSearchBarWit] = useState(true)
  const [modalView, setModalView] = useState('')
  const [openSearchField, setOpenSearchField] = useState(false)
  const [top, setTop] = useState('h-[-10vh]')
  const [tab, setTab] = useState(false)
  const openSearch = useRef()
  const searchInput = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside)
    return () => document.removeEventListener('mousedown', clickOutside)
  })
  useEffect(() => {
    document.addEventListener('mousedown', clickInside)
    return () => document.removeEventListener('mousedown', clickInside)
  })
  useEffect(() => {
    document.addEventListener('keypress', keyPress)
    return () => document.removeEventListener('keypress', keyPress)
  })
  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => {
      document.removeEventListener('keydown', keyPress)
    }
  })
  useEffect(() => {
    document.addEventListener('keydown', keyDown)
    return () => document.removeEventListener('keydown', keyDown)
  })
  const keyPress = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.code === 'KeyJ') {
      setOpenSearchField(true)
      setModalView(
        `fixed inset-0 z-50 flex top-20 justify-center md:z-0 bg-white md:bg-transparent md:sticky md:top-[45px]`
      )
      setSearchBarWit(false)
      searchInput.current.focus()
    }
  }
  const clickOutside = (e) => {
    if (!openSearch.current?.contains(e.target)) {
      setSearch(search)
      setOpenSearchField(false)
      setModalView('')
      setTop('h-[-10vh]')
      setTab(false)

      setSearchBarWit(true)
    }
  }
  const clickInside = (e) => {
    if (openSearch.current?.contains(e.target)) {
      setOpenSearchField(true)

      setModalView(
        `fixed inset-0 z-50 flex ${top} justify-center md:z-0 bg-white md:bg-transparent md:sticky md:top-[45px]`
      )
      setSearchBarWit(false)
    }
  }

  const keyDown = (e) => {
    if (e.key == 'Escape') {
      searchInput.current.blur()
      setSearch(search)
      setOpenSearchField(false)
      setTop('h-[-10vh]')
      setTab(false)
    }
  }

  const filterdList = data?.filter(
    (ticker) =>
      ticker?.companyName?.toLowerCase().includes(search) ||
      ticker?.symbol?.toLowerCase().includes(search)
  )
  return (
    <>
      <div className={modalView}>
        <div
          className={` sticky z-20  flex w-min flex-col items-center justify-start space-y-3  transition duration-300 ease-in-out `}
        >
          <div ref={openSearch} className=" ">
            <div
              className={`  flex h-[60px]  ${
                searchBarWit && uid ? 'w-[60px]' : 'w-[94vw]'
              } items-center  ${
                openSearchField ? 'rounded-t-[30px]' : 'rounded-full'
              }  relative    md:border-[1px]  ${
                uid && !openSearchField ? 'md:bg-gray-100' : 'bg-white'
              } transition-all duration-500 ease-in-out hover:border-none hover:shadow-2xl ${
                uid && 'rounded-md'
              }  md:w-[550px]  `}
            >
              <div className="flex items-center ">
                <SearchIcon className=" ml-4 h-6 w-6 text-gray-500" />

                <input
                  ref={searchInput}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className={` flex ${
                    uid && !openSearchField && 'hidden'
                  } w-[300px] flex-shrink items-center border-transparent bg-transparent  text-xs placeholder-gray-700 outline-none   focus:border-transparent focus:ring-0  lg:inline-flex `}
                  placeholder={
                    uid
                      ? `${uid}`
                      : "Search Stocks/ETF's/Bonds/Currincies/Crypto"
                  }
                />

                {searchInput.current?.value.length >= 1 && (
                  <div
                    onClick={() => {
                      searchInput.current.value = ''
                      setSearch('')
                      setData(data)
                      setTab(0)
                    }}
                    className=" absolute right-3 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-300 "
                  >
                    <Close />
                  </div>
                )}
              </div>
            </div>
            {openSearchField && (
              <div
                className={`absolute  flex  h-[${
                  filterdList?.length * 48
                }px] scrollbar-thin  max-h-[300px]  w-[100%]  flex-col overflow-y-scroll   rounded-md  bg-white    shadow-xl md:w-[550px]`}
              >
                <div className="sticky top-0 flex h-16 justify-between  bg-white p-3 px-3  ">
                  <div
                    onClick={() => {
                      getData(
                        'https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&limit=100&betaMoreThan=1&volumeMoreThan=100000&exchange=NYSE,NASDAQ&apikey=28d6ee65329243c33f2324e5651df196'
                      )
                      setTab(0)
                    }}
                    className={`${tab == 0 && 'active'} filterBtn `}
                  >
                    <p className="">All</p>
                  </div>
                  <div
                    onClick={() => {
                      getData(
                        'https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&limit=100&betaMoreThan=1&volumeMoreThan=100000&exchange=NYSE,NASDAQ&apikey=28d6ee65329243c33f2324e5651df196'
                      )
                      setTab(1)
                    }}
                    className={`${tab == 1 && 'active'} filterBtn `}
                  >
                    <p className="">Stock/ETF</p>
                  </div>
                  <div
                    onClick={() => {
                      getData(
                        'https://financialmodelingprep.com/api/v3/quotes/index?apikey=28d6ee65329243c33f2324e5651df196'
                      )
                      setTab(2)
                    }}
                    className={`${tab == 2 && 'active'} filterBtn `}
                  >
                    <p className="">Index</p>
                  </div>
                  <div
                    onClick={() => {
                      setTab(3)
                      getData(
                        'https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=28d6ee65329243c33f2324e5651df196'
                      )
                    }}
                    className={`${tab == 3 && 'active'} filterBtn `}
                  >
                    <p className="">Crypto</p>
                  </div>
                  <div
                    onClick={() => {
                      getData(
                        'https://financialmodelingprep.com/api/v3/quotes/forex?apikey=28d6ee65329243c33f2324e5651df196'
                      )
                      setTab(4)
                    }}
                    className={`${tab == 4 && 'active'} filterBtn `}
                  >
                    <p className="">Currency</p>
                  </div>
                  <div
                    onClick={() => {
                      getData(
                        'https://financialmodelingprep.com/api/v3/symbol/available-commodities?apikey=28d6ee65329243c33f2324e5651df196'
                      )
                      setTab(5)
                    }}
                    className={`${tab == 5 && 'active'} filterBtn `}
                  >
                    <p className="">Futures</p>
                  </div>
                </div>
                {loading ? (
                  <div className="flex h-32 items-center justify-center">
                    <SpinnerCircular color="#3b82f6" />
                  </div>
                ) : (
                  filterdList?.map((result) => (
                    <div
                      onClick={() => {
                        goToPage(result.symbol)
                      }}
                      key={result.symbol}
                      className=""
                    >
                      <SearchResults
                        ticker={result.symbol}
                        tickerName={result.companyName || result.name}
                        exc={result.exchangeShortName}
                        price={result.price}
                        change={result.change}
                      />
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
