import { ArrowDownIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

function OverviewMovers({ key, ticker, price, percentChange, change }) {
  const [toggleChange, setToggleChange] = useState(false)
  return (
    <>
      <div className=" hidden h-fit  items-center justify-around rounded-lg border border-gray-200 bg-white p-2 md:inline-flex ">
        <ArrowDownIcon
          className={`h-8 w-8 items-center rounded-lg  p-2  ${
            change > 0
              ? 'rotate-180 bg-green-100 text-green-600 '
              : 'bg-red-100 text-red-600'
          }`}
        />

        <div className="ml-2 flex w-[70px] flex-col text-[10px] ">
          <p className=" font-semibold">{ticker}</p>
          <p className=" text-gray-600">{price}</p>
        </div>
        <div className="ml-2 flex flex-col items-end text-[10px]">
          <p
            className={`font-semibold text-${change > 0 ? 'green' : 'red'}-600`}
          >
            {percentChange}%
          </p>
          <p className={` text-${change > 0 ? 'green' : 'red'}-600`}>
            {change}
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-1  md:hidden ">
        <p className="text-[12px] font-semibold">{ticker}</p>
        <p className="text-[10px] text-gray-500">{price}</p>
        <div
          onClick={() => setToggleChange(!toggleChange)}
          className={`flex h-fit w-fit items-center justify-center rounded-lg px-2 ${
            change > 0 ? 'bg-green-100' : 'bg-red-100'
          } `}
        >
          <ArrowDownIcon
            className={`h-7 items-center rounded-lg  py-2  ${
              change > 0
                ? 'rotate-180 bg-green-100 text-green-600 '
                : 'bg-red-100 text-red-600'
            }`}
          />
          <p
            className={`p-1 text-[13px] font-semibold text-${
              change > 0 ? 'green' : 'red'
            }-600`}
          >
            {toggleChange ? `${percentChange}%` : `${change}`}
          </p>
        </div>
      </div>
    </>
  )
}

export default OverviewMovers
