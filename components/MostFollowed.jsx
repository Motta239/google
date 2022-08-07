import { ArrowDownIcon, CalendarIcon, PlusIcon } from '@heroicons/react/solid'
import { Checkbox } from '@material-ui/core'
import { CheckBox, CheckBoxRounded, Poll } from '@mui/icons-material'
import React from 'react'

function Calendar() {
  return (
    <div className="  flex h-fit  flex-col  space-y-4 rounded-lg md:border-[0.7px] md:shadow-md ">
      <div className="p-3">
        <p className="text-gray-800">Most followed on Google</p>
      </div>
      <div className="flex flex-col">
        <div className="flex h-[70px] min-w-[229px] items-center justify-between border-t  p-3">
          <div className="flex space-x-2 ">
            <div className="flex  w-[100px] flex-col  rounded-lg">
              <p className="w-fit rounded-lg bg-blue-600 px-2 py-[1px] text-[10px] font-semibold text-white">
                APPL
              </p>
              <p className="w-fit  text-[12px] ">Apple inc.</p>
              <p className="w-fit  text-[10px] text-gray-600 ">
                3.71M following{' '}
              </p>
            </div>
          </div>
          <div className=" flex space-x-3">
            <div
              className={`flex h-fit w-fit items-center justify-center rounded-lg bg-green-100 px-1 `}
            >
              <div className="w-1/4">
                <ArrowDownIcon
                  className={`h-7  rotate-180 items-center rounded-lg  py-2 text-green-600 `}
                />
              </div>
              <p className={`  text-[13px] font-semibold text-green-600`}>
                0.99%
              </p>
            </div>
            <div className="flex items-center  justify-center">
              <CheckBoxRounded className="w-7 text-gray-500 hover:text-gray-800  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
