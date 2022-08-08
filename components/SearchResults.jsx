function SearchResults({ ticker, price, tickerName, change }) {
  const percent = ((price - change) / price) * 100.0

  return (
    <div className="flex   flex-col bg-white hover:bg-gray-100">
      <div className="flex h-12   cursor-pointer items-center justify-between border-b p-2 text-xs transition duration-300 ease-in-out hover:pl-3 hover:shadow-blue-200 md:text-sm ">
        <div className=" flex w-3/5 flex-col justify-start   ">
          <p className="text-md w-full  font-semibold">{ticker}</p>
          <p className=" w-fit truncate text-[10px] ">{tickerName}</p>
        </div>

        <p
          className={`hidden w-1/5 md:inline-flex ${
            change > 0 ? 'text-green-700' : 'text-red-700'
          }`}
        ></p>
        <div
          className={` ${
            percent >= 0 ? 'bg-green-100' : 'bg-red-100'
          } flex h-fit w-[74px] items-center justify-center  space-x-1  rounded-lg `}
        >
          <div className="flex  "></div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults
