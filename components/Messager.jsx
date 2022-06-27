import { ChevronDownIcon } from '@heroicons/react/outline'
import { MdClose } from 'react-icons/md'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdOutlineAddAPhoto } from 'react-icons/md'
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
import { GiftIcon } from '@heroicons/react/solid'

function SendMail() {
  const [{ name, src, openMessage }, setContactId] = useRecoilState(contactId)
  const [openSlider, setOpenSlider] = useState(false)
  const [messLength, setMessLength] = useState('')
  return (
    <div className="">
      {openMessage && (
        <div className="">
          <div className=" fixed bottom-0 right-24 z-50 flex h-[445px] w-[328px] min-w-[330px]  flex-col rounded-md bg-white shadow-2xl">
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
                    className="  flex h-[32px] w-[32px] items-center rounded-full border-2 border-blue-500 object-cover "
                    src={src}
                    layout="fill"
                  />
                </div>
                <p className="text-md mt-2 h-12 w-[100px]   justify-start truncate  pt-2 ">
                  {name}
                </p>
                <ChevronDownIcon className="h-5 w-5 cursor-pointer text-blue-500" />
              </div>
              <div className=" flex w-[250px] justify-around ">
                <BsTelephoneFill className="h-5 w-5 cursor-pointer text-blue-500" />
                <BsFillCameraVideoFill className="h-5 w-5 cursor-pointer text-blue-500" />
                <AiOutlineMinus className="h-5 w-5 cursor-pointer text-blue-500 " />
                <MdClose
                  onClick={() => setContactId({ openMessage: false })}
                  className="h-6 w-6 cursor-pointer text-blue-500"
                />
              </div>
            </div>

            <div className=" flex items-center justify-between p-2 ">
              {
                <div
                  className={`flex ${
                    messLength.length >= 50 && 'hidden'
                  } transition-all duration-500 ease-in`}
                >
                  <AiOutlinePlusCircle className="icon-mess" />
                  <MdOutlineAddAPhoto className="icon-mess" />
                  <GiftIcon className="icon-mess" />
                </div>
              }

              <input
                placeholder="Aa"
                className="flex flex-grow"
                onChange={(e) => {
                  setMessLength(e.target?.value)
                }}
              />

              <AiFillLike className="h-7 w-7   text-blue-500 hover:rounded-lg hover:bg-gray-200" />
            </div>
            {openSlider && (
              <div className="  absolute bottom-[205px] right-[337px] m-0 flex h-[240px] w-[334px] min-w-[330px] flex-col justify-center  rounded-xl bg-white  p-4 shadow-2xl">
                <div className="mess-slide ">
                  <RiMessengerFill className="icon-slide " />
                  <p className="text-lg">Open in Messenger</p>
                </div>
                <div className="mess-slide ">
                  <RiMessengerLine className="icon-slide" />
                  <p className="text-lg"> Get the Messenger app</p>
                </div>
                <div className=" mess-slide  ">
                  <CgProfile className="icon-slide" />
                  <p className="text-lg"> View profile</p>
                </div>

                <div className="mess-slide ">
                  <FiUserX className="icon-slide" />
                  <p className="text-lg"> Block</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SendMail
