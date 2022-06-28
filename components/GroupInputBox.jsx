import React, { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { db, storage } from '../firebase'
import { useRecoilState } from 'recoil'
import { postModal } from '../atoms/postModal'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'
import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline'
import {
  CameraIcon,
  TrashIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from 'firebase/firestore'
import { PhotoAlbum, PhotoCamera, PollOutlined } from '@mui/icons-material'
import { MdPhotoAlbum } from 'react-icons/md'

function GroupInputBox({ group, dark }) {
  const { data: session } = useSession()
  const [openPostWindow, setOpenPostWindow] = useRecoilState(postModal)
  const inputRef = useRef(false)
  const fileRef = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)
  const [name, setName] = useState()

  const uploadImage = async (e) => {
    e.preventDefault()
    const docRef = await addDoc(collection(db, `groups`), {
      username: session.user.name,
      caption: inputRef.current.value,
      group: group,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    })

    if (imageToPost) {
      setImageToPost(true)
      const imageRef = ref(storage, `posts/${docRef.id}/image`)
      await uploadString(imageRef, imageToPost, 'data_url').then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef)
          await updateDoc(doc(db, 'posts', docRef.id), {
            image: downloadURL,
          })
          setImageToPost(false)
        }
      )
      // console.log('New doc added with ID', docRef.id)
    }
    inputRef.current.value = ''
    setName(false)
  }
  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }
  const removeImage = () => {
    setImageToPost(null)
    setName(false)
  }

  const handleChange = (e) => {
    const [file] = e.target.files
  }
  return (
    <div
      className={`font-md mx-auto  rounded-2xl transition-all  duration-500 active:mt-12 ${
        !dark ? 'bg-white text-gray-500' : ' bg-neutral-900 text-white '
      } shadow-md md:p-2`}
    >
      <div className="">
        {!imageToPost && (
          <div className="flex items-center space-x-4 border-b-[0.2px] border-gray-400 p-4">
            <img
              className="rounded-full"
              src={session?.user?.image}
              width={30}
              height={30}
              layout="fixed"
            />

            <form action="" className="flex flex-1 items-center space-x-3">
              <input
                onClick={() => setOpenPostWindow(true)}
                ref={inputRef}
                className="h-12 flex-grow rounded-full border-transparent border-gray-100 bg-gray-200 px-5 text-black !outline-none focus:border-transparent focus:border-gray-100 focus:ring-0"
                type="text"
                placeholder={`Write Something...`}
                onChange={(e) => setName(e.target.value.trim())}
              />
              <button
                className={
                  name
                    ? ' h-10 w-20 rounded-full bg-blue-500 text-white  hover:scale-105'
                    : 'text-gray hidden h-10 w-20 rounded-full bg-blue-100 '
                }
                type="submit"
                disabled={!name}
                onClick={uploadImage}
              >
                Post
              </button>
            </form>
          </div>
        )}
        {imageToPost && (
          <div>
            <div className="flex flex-col items-center justify-center space-x-2 ">
              <div className="flex space-x-4 ">
                <img
                  className="max-h-sm mt-5 flex max-w-sm justify-center rounded-xl shadow-xl"
                  src={imageToPost}
                  alt=""
                />
              </div>

              <div className="flex items-center  space-x-4 p-4  ">
                <TrashIcon
                  onClick={removeImage}
                  className="w-10 hover:text-blue-500 "
                />
                <PlusCircleIcon onClick={removeImage} className="w-10 " />
              </div>
            </div>
            <form
              action=""
              className="flex flex-1  flex-col  items-center pl-3"
            >
              <div>
                <input
                  ref={inputRef}
                  className="h-12 flex-grow rounded-full  border-gray-100 bg-gray-200 px-5 pl-10 text-center outline-none focus:border-gray-100"
                  type="text"
                  placeholder={`Say Something...`}
                />
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="mt-3 h-10 w-20 rounded-full bg-blue-500 text-white hover:bg-white hover:text-blue-500 "
                  onClick={uploadImage}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="border-top flex justify-evenly p-3">
        <div
          onClick={() => fileRef.current.click()}
          className="inputIcon hover:bg-gray-300 hover:text-black "
        >
          <PhotographIcon className="h-7 text-green-600 " />
          <p className="text-xs sm:text-sm xl:text-base"> Photo\Video</p>

          <input
            ref={fileRef}
            onClick={handleChange}
            hidden
            type="file"
            onChange={addImageToPost}
          />
        </div>
        <div className="inputIcon hover:bg-gray-300 hover:text-black ">
          <PollOutlined className="h-7 text-orange-400 " />
          <p className="text-xs sm:text-sm xl:text-base"> Poll</p>
        </div>
      </div>
    </div>
  )
}

export default GroupInputBox
