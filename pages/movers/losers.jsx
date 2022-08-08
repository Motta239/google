import { useRouter } from 'next/router'
import WatchlistMovers from '../../components/WatchlistMOvers'
import { SpinnerCircular } from 'spinners-react'
import { useFetch } from '../../components/useFetch'
function Losers() {
  const router = useRouter()
  const { data: tickers } = useFetch(
    'https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=28d6ee65329243c33f2324e5651df196'
  )
  console.log(tickers)
  const goToPage = (url) => {
    router.push({
      pathname: `/finance/${url}`,
    })
  }
  return (
    <>
      <div className="flex justify-center">
        {tickers ? (
          <div className="flex w-[550px] flex-col xl:ml-0  ">
            <p className="  mb-3 text-lg  font-light text-gray-900 ">
              Top Losers Today
            </p>
            {tickers?.map((ticker) => (
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
                  desc={ticker.name}
                  percent={ticker.changesPercentage}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className=" flex h-96 w-full items-center justify-center">
            <SpinnerCircular />
          </div>
        )}
      </div>
    </>
  )
}

export default Losers
