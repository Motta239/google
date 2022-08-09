import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  DotsVerticalIcon,
  DuplicateIcon,
  RewindIcon,
  SearchIcon,
} from '@heroicons/react/solid'
import { ArrowBackOutlined, Refresh } from '@mui/icons-material'

function Helper() {
  const router = useRouter()
  const uid = router.query.uid?.toLocaleUpperCase()
  const { data: session } = useSession()
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  const helperRef = useRef()
  const [position, setPosition] = useState(true)
  const [option, setOption] = useState('')
  const [height, setHeight] = useState('h-12')
  const [helper, setHelper] = useState(false)
  const onMouseMove = (e) => {
    const helperEdge = e.clientX < window.innerWidth - 446
    if (!helperRef.current?.contains(e.target) && helperEdge)
      setCursorPosition({
        top: e.clientY,
        left: e.clientX,
      })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {})
  }, [])
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [helperRef])
  useEffect(() => {
    const callback = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.code === 'KeyK') {
        setHelper(!helper)
      }
    }
    document.addEventListener('keydown', callback)
    return () => {
      document.removeEventListener('keydown', callback)
    }
  }, [helper])

  return (
    <>
      {helper && (
        <div
          ref={helperRef}
          onMouseMove={onMouseMove}
          className={` w-100 z-50 flex ${height} flex-col justify-start space-y-4 overflow-hidden rounded-lg border py-2 px-2 backdrop-blur-sm transition-all duration-1000 ease-in `}
          style={{ position: position ? 'fixed' : 'unset', ...cursorPosition }}
        >
          <div className="flex items-center space-x-2 ">
            <button>
              <ArrowBackOutlined
                onClick={() => router.back()}
                className="helperBtn "
              />
            </button>
            <button>
              <Refresh
                onClick={() => router.reload()}
                className="helperBtn  "
              />
            </button>
            <button>
              <DuplicateIcon
                onClick={() => {
                  const selection = window.getSelection()
                  navigator.clipboard.writeText(selection)
                }}
                className="helperBtn "
              />
            </button>
            <button>
              <SearchIcon
                onClick={() => {
                  setHeight('h-[10rem]')
                  setOption(
                    <div className="flex w-full flex-col space-y-3">
                      <div className=" flex space-x-3">
                        {tickers.tickers.map((t) => (
                          <a
                            className="searchHelperBtn"
                            href={`https://www.google.com/search?q=${t}stock`}
                            target="_blank"
                          >
                            {t}
                          </a>
                        ))}
                      </div>
                      <input
                        className="rounded-lg border-transparent bg-transparent shadow-md
                      outline-none  placeholder:text-xs focus:border-transparent focus:ring-0  "
                        placeholder="Search Google "
                        type="text"
                      />
                    </div>
                  )
                }}
                className="helperBtn "
              />
            </button>

            <img
              onClick={() => {
                navigator.clipboard.readText()
              }}
              className="helperBtn"
              src="/youtube.svg"
            />
            <img
              onClick={() => {
                setHeight('h-[10rem]')
                setOption(
                  <input
                    className="rounded-full border-transparent bg-transparent shadow-md
                    outline-none  placeholder:text-xs focus:border-transparent focus:ring-0  "
                    placeholder="Search Google "
                    type="text"
                  />
                )
              }}
              className="helperBtn"
              src="/google1.svg"
            />
            <img
              onClick={() => {
                setHeight('h-[8rem]')
                setOption(
                  <div className="flex items-center justify-around ">
                    <img
                      className="h-12 w-12 rounded-md shadow-lg"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div className="flex w-[80%]  flex-col">
                      <div className="flex space-x-3">
                        <p className="text-xs font-semibold ">Future</p>
                        <p className="text-xs">I NEVER LIKED YPU </p>
                      </div>
                      <div className=" flex  items-center justify-between ">
                        <RewindIcon className=" helperBtn h-10 w-10 backdrop-blur-lg transition-all duration-300 ease-out hover:text-blue-500 " />
                        <input
                          className="w-60 border-none"
                          type="range"
                          value={'50'}
                          min="0"
                          max="100"
                          step="1"
                        />
                        <RewindIcon className="helperBtn hover:text-blue-500rotate-180 h-10 w-10 rotate-180 backdrop-blur-lg transition-all duration-300 ease-out " />
                      </div>
                    </div>
                  </div>
                )
              }}
              className="helperBtn"
              src="/spotify.svg"
            />
            <img className="helperBtn" src="/gmail.svg" />
            <img
              onClick={() => {
                const location = navigator.geolocation.getCurrentPosition(
                  function (position) {}
                )
                setOption(
                  <div>
                    <iframe
                      className="flex items-center rounded-xl "
                      width="450"
                      height="400"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.maps.ie/distance-area-calculator.html">
                        measure area map
                      </a>
                    </iframe>
                  </div>
                )
                setHeight('h-[20rem]')
              }}
              className="helperBtn"
              src="/google-maps.svg"
            />
            <img className="helperBtn" src="/instagram.svg" />
            <img className="helperBtn" src="/facebook-logo-2019.svg" />
            <img
              onClick={signOut}
              src={session?.user?.image}
              alt="profile pic"
              className=" h-8 w-8 cursor-pointer rounded-full border  border-blue-500 "
            />
            <button onClick={() => setPosition(!position)}>
              <DotsVerticalIcon className="helperBtn " />
            </button>
          </div>
          {option}
        </div>
      )}
    </>
  )
}

export default Helper
