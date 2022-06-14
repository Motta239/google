import React from 'react'

function MenuIcon({ Icon, head, desc, dark }) {
  return (
    <div
      className={`flex space-x-2 rounded-xl p-4 hover:bg-blue-100 ${
        dark && 'hover:text-black'
      }  `}
    >
      <div className="">
        <Icon className="h-[36px] w-[36px] text-blue-500" />
      </div>
      <div className="">
        <p className="font-semibold">{head}</p>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  )
}

export default MenuIcon
