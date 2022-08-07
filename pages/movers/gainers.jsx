import { useRouter } from 'next/router'
import WatchlistMovers from '../../components/WatchlistMOvers'
import { SpinnerCircular } from 'spinners-react'
import { useFetch } from '../../components/useFetch'
function Gainers() {
  const router = useRouter()
  const { data: tickers } = useFetch(
    'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=28d6ee65329243c33f2324e5651df196'
  )
  console.log(tickers)
  const goToPage = (url) => {
    router.push({
      pathname: `/finance/${url}`,
    })
  }
  return (
    <>
      {!tickers ? (
        <div className="">
          <p>Limit Reach Change Key Moti</p>

          <SpinnerCircular />
        </div>
      ) : (
        <div className="">
          {tickers ? (
            <div className="flex w-[550px] flex-col xl:ml-0  ">
              <p className="  mb-3 text-lg  font-light text-gray-900 ">
                Top movers in your lists
              </p>
              {tickers?.map((ticker) => (
                // <Link href={`/finance/${ticker.symbol}:${ticker.exchangeShortName}`}>
                <div
                  onClick={() => {
                    goToPage(ticker.symbol)
                  }}
                  key={ticker.id}
                  className=" flex cursor-pointer flex-col transition duration-200 ease-in-out  hover:bg-gray-50 "
                >
                  <WatchlistMovers
                    ticker={ticker.symbol}
                    price={ticker.price}
                    change={ticker.change?.toFixed(2)}
                    desc={ticker.companyName}
                    percentChange={ticker.percentChange?.toFixed(2)}
                  />
                </div>
                // </Link>
              ))}
            </div>
          ) : (
            <div className=" flex h-screen items-center justify-center">
              <SpinnerCircular />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Gainers
