import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { ChevronDownIcon, LockClosedIcon } from '@heroicons/react/outline'
import { MdClose } from 'react-icons/md'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { AiOutlineGif } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { BiJoystick } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai'
import { RiMessengerFill } from 'react-icons/ri'
import { RiMessengerLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { FiUserX } from 'react-icons/fi'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import InputEmoji from 'react-input-emoji'

import { useRecoilState } from 'recoil'

import { contactId } from '../atoms/contactId'
import { useEffect, useRef, useState } from 'react'

function SendMail() {
  const myRefNot = useRef()

  const [{ name, src, openMessage }, setContactId] = useRecoilState(contactId)
  const [openSlider, setOpenSlider] = useState(false)

  const [openNot, setOpenNot] = useState(false)
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside2)
    return () => document.removeEventListener('mousedown', handleClickOutside2)
  })
  const handleClickOutside2 = (e) => {
    if (!myRefNot.current?.contains(e.target)) {
      setContactId({ openMessage: false })
    }
  }
  const handleClickInside2 = () => setOpenNot(true)

  return (
    <div className="">
      {openMessage && (
        <div ref={myRefNot} onClick={handleClickInside2} className="">
          <div className=" absolute bottom-0 right-24 z-50 flex h-[445px] w-[328px] min-w-[330px]  flex-col rounded-md bg-white shadow-2xl">
            <div className="relative flex h-[55px] w-[328px] min-w-[277px] items-center space-x-[20px] border-b-[1px]    shadow-sm ">
              <div
                onClick={() => {
                  setOpenSlider(!openSlider)
                }}
                className=" flex w-full items-center justify-start space-x-[3px] rounded-md  hover:bg-blue-300 "
              >
                <div className="flex w-[50px] items-center  justify-center  ">
                  <img
                    width={150}
                    height={150}
                    className="  flex h-[32px] w-[32px] items-center rounded-full border-2 border-blue-500 "
                    src={src}
                    layout="fill"
                  />
                </div>
                <p className="text-md mt-2 h-12 w-[99px]   justify-start truncate  pt-2 ">
                  {name}
                </p>
                <ChevronDownIcon className="h-5 w-5 cursor-pointer justify-start text-blue-500" />
              </div>
              <div className=" flex space-x-2 ">
                <BsTelephoneFill className="h-5 w-5 cursor-pointer text-blue-500" />
                <BsFillCameraVideoFill className="h-5 w-5 cursor-pointer text-blue-500" />
                <AiOutlineMinus className="h-5 w-5 cursor-pointer text-blue-500 " />
                <MdClose
                  onClick={() => setContactId({ openMessage: false })}
                  className="h-6 w-6 cursor-pointer text-blue-500"
                />
              </div>
            </div>
            <div className="flex h-[340px] "></div>
            <div className=" bottom-0 flex h-[45px]  border-t-[1px]">
              <div className=" ml-2 flex w-[120px] items-center  space-x-2">
                <AiOutlinePlusCircle className="h-10 w-10 cursor-pointer text-blue-500" />
                <MdOutlineAddAPhoto className="h-10 w-10 cursor-pointer text-blue-500" />
                <BiJoystick className="h-10 w-10 cursor-pointer text-blue-500" />
              </div>
              <div className="flex w-fit space-x-1 p-2 ">
                <div className="  flex  ">
                  <InputEmoji
                    className=" h-[33px] w-[131px]"
                    placeholder="Aa"
                  />

                  <div className="fixed right-[150px] mt-[2px] cursor-pointer  text-blue-500"></div>
                </div>
                <div className="h-[40px]w-[40px] ">
                  <AiFillLike className="h-7 w-7  text-blue-500 hover:rounded-lg hover:bg-gray-200" />
                </div>
              </div>
            </div>
          </div>

          {openSlider && (
            <div className="  absolute bottom-[205px] right-[430px] m-0 flex h-[240px] w-[334px] min-w-[330px] flex-col justify-center  rounded-xl bg-white  p-4 shadow-2xl">
              <div className="  flex h-[55px] cursor-pointer items-center space-x-2 rounded-lg  p-[5px] transition-all duration-500 ease-out hover:p-[15px] hover:shadow-xl ">
                <RiMessengerFill className="h-7 w-7 cursor-pointer  text-blue-500 " />
                <p className="text-lg">Open in Messenger</p>
              </div>
              <div className="  flex h-[55px] cursor-pointer items-center space-x-2 rounded-lg p-[5px] transition-all duration-500 ease-out hover:p-[15px] hover:shadow-xl ">
                <RiMessengerLine className="h-7 w-7 cursor-pointer text-blue-500" />
                <p className="text-lg"> Get the Messenger app</p>
              </div>
              <div className="   flex h-[55px] cursor-pointer items-center space-x-2 rounded-lg p-[5px] transition-all duration-500 ease-out hover:p-[15px] hover:shadow-xl  ">
                <CgProfile className="h-7 w-7 cursor-pointer text-blue-500" />
                <p className="text-lg"> View profile</p>
              </div>

              <div className="  flex h-[55px] cursor-pointer items-center space-x-2 rounded-lg p-[5px] transition-all duration-500 ease-out hover:p-[15px] hover:shadow-xl ">
                <FiUserX className="h-7 w-7 cursor-pointer justify-center text-blue-500" />
                <p className="text-lg"> Block</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SendMail
