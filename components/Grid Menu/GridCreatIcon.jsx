import React from 'react'

function GridCreatIcon() {
  return (
    <div className=" flex space-x-2 rounded-xl p-2 hover:bg-white ">
      <div className=" flex items-center">
        <HomeIcon className="h-[24px] w-[24px]  text-blue-500" />
      </div>
      <div className="">
        <p className="font-semibold">Home</p>
        <p className="text-[8px]">Change Account Settings</p>
      </div>
    </div>
  )
}

export default GridCreatIcon
