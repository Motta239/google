import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'

function StoryModal() {
  const [openPostWindow, setOpenPostWindow] = useRecoilState()
  const myRefNot = useRef()
  useEffect(() => {
    document.addEventListener('mousedown', clickOutside)
    return () => document.removeEventListener('mousedown', clickOutside)
  })
  console.log(openPostWindow)
  const clickOutside = (e) => {
    if (!myRefNot.current?.contains(e.target)) {
      setOpenPostWindow(false)
    }
  }
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center bg-neutral-500 bg-opacity-60">
      <div
        ref={myRefNot}
        className={`flex  w-[500px] flex-col rounded-xl  bg-cg text-white shadow-2xl transition-all duration-700 ease-in  lg:h-fit`}
      >
        <div className="flex h-[500px] flex-col"></div>
      </div>
    </div>
  )
}

export default StoryModal
