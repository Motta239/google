import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { postModal } from '../../atoms/postModal'
import MessageCard from './MessageCard'

function NotificationIcon({ Icon, name, dark }) {
  const myRefNot = useRef()
  const [openNot, setOpenNot] = useState(false)
  const [style, setStyle] = useState({ display: 'none' })
  const [openPostWindow, setOpenPostWindow] = useRecoilState(postModal)

  const [search, setSearch] = useState('')
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!myRefNot.current?.contains(e.target)) {
        setOpenNot(false)
        setSearch('')
      }
    })
  })

  const messages = [
    {
      name: 'Moti Yosef',
      image:
        'https://firebasestorage.googleapis.com/v0/b/instagram-clone-789cd.appspot.com/o/posts%2FPG4UJeK8B2xnPxmRHLrA%2Fimage0?alt=media&token=ee713c38-9e06-49e2-a8b2-20168df523e6',
      message: 'אחשלי הגיבור אתה ',
    },
    {
      name: 'Elon Musk',
      image:
        'https://i.pinimg.com/474x/22/40/55/224055a72b9cc6ff63617bcb2c3ce8af.jpg',
      message: 'Talk to me later plaese',
    },
    {
      name: 'Jeff Bezoz',
      image:
        'https://i.pinimg.com/474x/fb/33/b9/fb33b94125d3ef63f22d536190a680a6.jpg',
      message: 'i Love you',
    },

    {
      name: 'Marina Zuckerberg',
      image:
        'https://i.pinimg.com/474x/a7/0b/80/a70b8028369e0172cb8c287d50d18c2a.jpg',
      message: 'Marina Sent An Attachment',
    },

    {
      name: 'Maor Yosef',
      image:
        'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      message: 'בוא לכדורגל היום',
    },
  ]

  const filterdMessages = messages.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase().trim()) ||
      item.message.toLowerCase().includes(search.toLowerCase().trim())
  )
  return (
    <div ref={myRefNot} className="hidden lg:inline-flex">
      <div className="  flex-col items-center justify-center ">
        <p
          style={style}
          className={` w-fit-content   fixed top-40  z-10 mt-36  flex items-center rounded-md   bg-gray-700 p-2 text-sm text-white shadow-xl transition-all duration-1000 ease-in-out`}
        >
          {name}
        </p>
      </div>
      <Icon
        onClick={() => setOpenNot(!openNot)}
        className={openNot ? 'icon text-blue-500' : 'icon'}
      />
      {openNot && (
        <div
          className={` flex-end absolute right-[100px] top-[70px] z-10 flex h-fit w-[300px] flex-col justify-start  overflow-y-scroll rounded-xl ${
            dark ? 'bg-cg' : 'bg-gray-100'
          }   shadow-xl scrollbar-hide  `}
        >
          <div
            className={`fixed flex h-20 w-[300px] flex-col items-center justify-center space-y-3 rounded-2xl  ${
              dark ? 'bg-cg text-white ' : 'bg-gray-100'
            } p-0 text-center text-xl font-bold `}
          >
            <p>{name}</p>
          </div>
          <div className=""></div>

          <input
            type="text"
            className={` placeholder border-gray h-2 w-full items-center rounded-full border-transparent ${
              dark && ' text-white '
            } mt-20 bg-transparent p-6 outline-none  focus:border-transparent  focus:ring-0  md:inline-flex`}
            placeholder={`Search ${name}`}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filterdMessages.map(({ name, image, message }) => (
            <MessageCard
              name={name}
              image={image}
              message={message}
              dark={dark}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NotificationIcon
