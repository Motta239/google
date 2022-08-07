import { ChevronDownIcon } from '@heroicons/react/solid'
import { People, Person, Web } from '@mui/icons-material'

import { useState } from 'react'

function About({ desc, ceo, website, employees, name }) {
  const [toggle, setToggleAbout] = useState(true)

  return (
    <div
      className={` h-fit flex-col overflow-hidden rounded-lg lg:inline-flex  lg:border  lg:px-3  `}
    >
      <div
        onClick={() => setToggleAbout(!toggle)}
        className="flex justify-between py-4"
      >
        <p> About</p>

        <ChevronDownIcon
          className={`h-5 w-5 transition-all  duration-1000  ease-out ${
            toggle && 'rotate-180'
          } `}
        />
      </div>

      <div className="">
        {toggle && (
          <p className="  p-2 text-[0.75rem]">
            {desc?.slice(0, 400)}{' '}
            <a
              href={`https://en.wikipedia.org/wiki/${name}`}
              target="_blank"
              className="hover:scale-110 hover:text-blue-500"
            >
              Wikipedia
            </a>
          </p>
        )}

        <div className=" flex items-center justify-between border-t p-3 text-xs text-gray-600 ">
          <div className="flex items-center space-x-1  ">
            <Person />
            <p>CEO</p>
          </div>
          <a
            className="hover:scale-110 hover:text-blue-500"
            href={`https://www.google.com/search?q=${ceo}`}
            target="_blank"
          >
            {ceo}
          </a>
        </div>

        <div className=" flex items-center justify-between border-t p-3 text-xs text-gray-600 ">
          <div className="flex items-center space-x-1 ">
            <People />
            <p>Employees</p>
          </div>
          <p>{employees}</p>
        </div>

        <div className=" flex items-center justify-between border-t p-3 text-xs text-gray-600 ">
          <div className="flex items-center space-x-1 ">
            <Web />
            <p>Website</p>
          </div>
          <a
            className="hover:scale-110 hover:text-blue-500"
            target="_blank"
            href={website}
          >
            {website?.slice(12)}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
