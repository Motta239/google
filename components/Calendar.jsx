import { CalendarIcon, PlusIcon } from '@heroicons/react/solid'
import { Poll } from '@mui/icons-material'
import React from 'react'
import UpcomingEarn from './UpcomingEarn'
function Calendar() {
  const calendarEvents = [
    {
      day: '14',
      month: 'JUL',
      companyName: 'JPMorgan Chase',
      detail: '14 Jul 2022, 14:00',
    },
    {
      day: '15',
      month: 'JUL',
      companyName: 'UnitedHealth Group',
      detail: '15 Jul 2022, 15:45',
    },
    {
      day: '18',
      month: 'JUL',
      companyName: 'Bank of America',
      detail: '18 Jul 2022, 13:45',
    },
    {
      day: '19',
      month: 'JUL',
      companyName: 'Netflix',
      detail: '19 Jul 2022, 23:00',
    },
    {
      day: '22',
      month: 'JUL',
      companyName: 'Verizon Communications',
      detail: '22 Jul 2022, 14:30',
    },
    {
      day: '26',
      month: 'JUL',
      companyName: 'Alphabet Inc.',
      detail: ' 26 Jul 2022, 19:30',
    },
  ]

  return (
    <div className="  flex h-fit  flex-col  space-y-2 rounded-lg  md:border-[0.7px] md:shadow-md ">
      <div className="p-3">
        <p className="text-gray-800">Earnings calendar</p>
        <p className="text-xs font-light text-gray-600">
          Based on popular stocks and your watchlists
        </p>
      </div>
      <div className="flex flex-col">
        {calendarEvents.map((cal) => (
          <div key={cal.companyName} className="">
            <UpcomingEarn
              companyName={cal.companyName}
              date={cal.day}
              month={cal.month}
              detail={cal.detail}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
