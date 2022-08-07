import { CalendarIcon } from '@heroicons/react/solid'
import React from 'react'

function UpcomingEarn({ month, date, companyName, detail }) {
  return (
    <div className="flex h-[70px] min-w-[229px] items-center justify-between border-t  p-3">
      <div className="flex space-x-2 ">
        <div className="flex h-[42px] w-[42px] flex-col items-center justify-center rounded-lg bg-blue-200">
          <p className="text-[10px] text-blue-600">{month}</p>
          <p className=" text-blue-600">{date}</p>
        </div>
        <div className="flex h-[42px]  flex-col  justify-center space-y-1 ">
          <p className="text-xs font-semibold">{companyName}</p>
          <p className="text-[10px]">{detail}</p>
        </div>
      </div>
      <div className="flex items-center  justify-center">
        <CalendarIcon className="w-7 text-gray-500 hover:text-gray-800  " />
      </div>
    </div>
  )
}

export default UpcomingEarn
