import React, { useEffect, useRef, useState } from 'react'
import NotCard from './NotCard'
function NotificationIcon({ Icon, name }) {
  const myRefNot = useRef()
  const [openNot, setOpenNot] = useState(false)
  const [style, setStyle] = useState({ display: 'none' })
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside2)
    return () => document.removeEventListener('mousedown', handleClickOutside2)
  })
  const handleClickOutside2 = (e) => {
    if (!myRefNot.current?.contains(e.target)) {
      setOpenNot(false)
    }
  }
  const handleClickInside2 = () => setOpenNot(true)
  return (
    <div ref={myRefNot} className="hidden lg:inline-flex">
      <div className="flex flex-col items-center justify-center ">
        <p
          style={style}
          className="items center top-30 w-fit-content fixed  z-10 mt-36  flex items-center rounded-md   bg-gray-700 p-2 text-sm text-white shadow-xl transition-all duration-1000 ease-in-out"
        >
          {name}
        </p>
      </div>
      <Icon onClick={() => setOpenNot(!openNot)} className="icon" />
      {openNot && (
        <div
          onClick={handleClickInside2}
          className=" flex-end absolute right-[80px] top-[60px] z-10 flex h-[500px] w-[200px] flex-col justify-start overflow-y-scroll rounded-xl bg-white   shadow-md scrollbar-hide  "
        >
          <div className=" fixed flex h-20 w-[200px] flex-col space-y-3 rounded-lg p-2  backdrop-blur-xl  hover:bg-blue-100 ">
            <p>{name}</p>
            <input
              type="text"
              className=" placeholder w-7/8 h-8 items-center rounded-full border-transparent bg-gray-200 bg-transparent text-xs outline-none  md:inline-flex "
              placeholder={`Search ${name}`}
            />
          </div>
          <div className="">
            <NotCard />
            <NotCard />
            <NotCard />
            <NotCard />
            <NotCard />
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationIcon
