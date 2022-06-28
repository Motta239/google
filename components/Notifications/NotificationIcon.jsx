import React, { useEffect, useRef, useState } from 'react'
import NotCard from './NotCard'
function NotificationIcon({ Icon, name }) {
  const myRefNot = useRef()
  const [openNot, setOpenNot] = useState(false)
  const [style, setStyle] = useState({ display: 'none' })
  const notifications = [
    {
      name: 'Moti Yosef',
      desc: 'Sent You a Friend Request',
      img: `https://firebasestorage.googleapis.com/v0/b/instagram-clone-789cd.appspot.com/o/posts%2FPG4UJeK8B2xnPxmRHLrA%2Fimage0?alt=media&token=ee713c38-9e06-49e2-a8b2-20168df523e6`,
    },
    {
      name: 'Michael Edward',
      desc: 'liked Your Photo',
      img: 'https://i.pinimg.com/474x/d6/88/51/d688517e6f30ed7342b3f78e7612e7bc.jpg',
    },
    {
      name: 'Lola Bardamn',
      desc: 'invited You to like lola-cosmtics',
      img: 'https://i.pinimg.com/474x/e9/c8/08/e9c808fdac222166d8b1d892e79fe25e.jpg',
    },

    {
      name: 'Emily Blunt',
      desc: 'added a Photo recently',
      img: 'https://i.pinimg.com/474x/b9/3d/d4/b93dd44ef0d0719d741a9c36802e6d82.jpg',
    },
    {
      name: 'Marina Kozslov',
      desc: 'Likes Your Photo',
      img: 'https://i.pinimg.com/474x/2a/05/7d/2a057d572e088070c4310edc0f0f4cd3.jpg',
    },
  ]
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
          className=" flex-end absolute right-[80px] top-[60px] z-10 flex flex-col justify-start overflow-y-scroll rounded-xl bg-gray-100   shadow-md scrollbar-hide  "
        >
          <div className="">
            {notifications.map(({ img, desc, name }) => (
              <NotCard img={img} name={name} desc={desc} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationIcon
