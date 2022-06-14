import {
  ArrowCircleLeftIcon,
  BookmarkIcon,
  ChatIcon,
  ChevronDoubleDownIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  MinusSmIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import {
  ArrowCircleRightIcon,
  HeartIcon as HeartIconFilled,
  MinusCircleIcon,
  PlusCircleIcon,
  PlusSmIcon,
} from '@heroicons/react/solid'
import MarkChatUnreadTwoToneIcon from '@mui/icons-material/MarkChatUnreadTwoTone'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import ReplySharpIcon from '@mui/icons-material/ReplySharp'
import { signIn, signOut, useSession } from 'next-auth/react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { useEffect, useState, useRef } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SettingsIcon from '@mui/icons-material/Settings'
import { db } from '../../firebase'
import Moment from 'react-moment'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined'
import { useRecoilState } from 'recoil'
import { contactId } from '../../atoms/contactId'
import InputEmoji from 'react-input-emoji'

import { darkMode } from '../../atoms/darkMode'
import { AiFillLike } from 'react-icons/ai'
import { RiHeart2Fill } from 'react-icons/ri'
function Post({
  id,
  username,
  userImg,
  key,
  img,
  caption,
  edited,
  editTime,
  timestamp,
}) {
  const [{ email, name }, setContactId] = useRecoilState(contactId)
  const [dark, setDark] = useRecoilState(darkMode)
  const [images, setImages] = useState([])
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [com, setCom] = useState(false)
  const [hasLiked, setHasLiked] = useState(false)
  const [open, setOpen] = useState(false)
  const [editPost, setEditPost] = useState(false)
  const [openPhotoModal, setOpenPhotoModal] = useState(false)
  const inputRef = useRef(false)
  const [count, setCount] = useState(1)

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => {
          setComments(snapshot.docs)
        }
      ),
    [db, id]
  )
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'posts', id, 'likes')), (snapshot) => {
        setLikes(snapshot.docs)
      }),
    [db, id]
  )
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'posts', id, 'images')), (snapshot) => {
        setImages(snapshot.docs)
      }),
    [db, id]
  )
  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  )
  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault()
        sendComment(comment)
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  const uploadPost = async (e) => {
    e.preventDefault()
    const washingtonRef = doc(db, 'posts', id)
    await updateDoc(washingtonRef, {
      caption: inputRef.current.value,
      edited: 'Edited',
      editTime: serverTimestamp(),
    })
    setEditPost(false)
  }

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.name,
      })
    }
  }
  const deletePost = async () => {
    await deleteDoc(doc(db, 'posts', id))
    console.log('post deleted')
  }
  const sendComment = async (e) => {
    const commentToSend = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.name,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  const myRef = useRef()
  const photoRef = useRef()
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!myRef.current?.contains(e.target)) {
        setOpen(false)
      }
    })
  })
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!photoRef.current?.contains(e.target)) {
        setOpenPhotoModal(null)
      }
    })
  })

  return (
    <div
      key={key}
      className={` relative my-7 rounded-xl transition-all duration-300 ease-in ${
        dark ? 'bg-neutral-900 text-white' : 'bg-white text-black '
      }  shadow-2xl `}
    >
      {/* Header */}
      <div className="flex  p-6 ">
        <img
          src={userImg}
          className=" mr-3 h-12 w-12
            rounded-full border object-contain p-1  "
          alt=""
        />
        <div className=" flex-1 flex-col font-semibold">
          <p className="text-md mb-[-6px]"> {username}</p>
          <Moment className=" text-sm text-gray-400" fromNow>
            {new Date(timestamp?.toDate()).toLocaleString()}
          </Moment>
          {edited && (
            <div className="flex">
              <p className="text-xs text-gray-400">{edited}</p>{' '}
              <Moment className=" ml-1 text-xs text-gray-400" fromNow>
                {new Date(editTime?.toDate()).toLocaleString().slice()}
              </Moment>
            </div>
          )}
        </div>

        <DotsHorizontalIcon onClick={() => setOpen(!open)} className="h-5" />

        {open && (
          <div
            ref={myRef}
            className={`flex-end absolute top-12 right-0 z-10  flex h-[156px] w-[128px]  flex-col justify-around rounded-md transition-all duration-300 ${
              dark ? 'bg-neutral-900 text-white' : 'bg-white'
            }  shadow-md `}
          >
            <div
              onClick={() => setEditPost(true)}
              className={` flex h-10 w-32 items-center justify-start space-x-2 rounded-md pl-2 ${
                dark ? 'hover:bg-gray-700' : 'hover:bg-blue-100'
              } `}
            >
              <EditIcon className="flex items-center text-blue-500" />
              <p className="">Edit Post</p>
            </div>
            <div
              onClick={deletePost}
              className={` flex h-10 w-32 items-center justify-start space-x-2 rounded-md pl-2 ${
                dark ? 'hover:bg-gray-700' : 'hover:bg-blue-100'
              } `}
            >
              <DeleteIcon className=" text-blue-500" />
              <p className="">Delete Post</p>
            </div>
            <div
              onClick={deletePost}
              className={` flex h-10 w-32 items-center justify-start space-x-2 rounded-md pl-2 ${
                dark ? 'hover:bg-gray-700' : 'hover:bg-blue-100'
              } `}
            >
              <BookmarkOutlinedIcon className=" text-blue-500" />
              <p className="">Save Post</p>
            </div>
            <div
              onClick={() =>
                setContactId({ name: username, src: userImg, open: true })
              }
              className=" flex h-10 w-32 items-center justify-start space-x-2 rounded-md pl-2 hover:bg-blue-100  "
            >
              <ChatIcon className=" w-[26px] text-blue-500" />
              <p className="flex  ">Message</p>
            </div>
          </div>
        )}
      </div>
      {editPost ? (
        <div className="flex items-center justify-center space-x-2 p-5">
          <div>
            <InputEmoji ref={inputRef} placeholder="Add a Comment..." />
          </div>
          <div onClick={uploadPost} className="flex">
            <button
              type="submit"
              className=" h-10 w-20 rounded-full bg-blue-500 text-white hover:bg-white hover:text-blue-500 "
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        <p className={`truncate p-5 ${caption.length < 5 && 'text-4xl'}`}>
          {caption}
        </p>
      )}

      {openPhotoModal && (
        <div className="fixed top-[0px] right-0 left-0 bottom-0 z-50 flex  items-center justify-center bg-neutral-500 bg-opacity-50 ">
          <div
            ref={photoRef}
            className="  top-[200px] left-[400px] flex  rounded-md object-cover shadow-xl"
          >
            <img
              className="  h-[400px] w-[300px] rounded-md object-cover shadow-xl transition-all duration-500 ease-in lg:h-[700px] lg:w-[800px]"
              src={images[count].data().image}
              alt=""
            />
            <div className="">
              <div className=" h-14 w-14 ">
                <ArrowCircleRightIcon
                  onClick={() => {
                    setCount(count + 1)
                    if (count > images.length - 2) {
                      setCount(0)
                    }
                  }}
                  className="rh-14 w-14 rotate-180 "
                />
                <ArrowCircleRightIcon
                  onClick={() => {
                    setCount(count - 1)
                    if (count <= 0) {
                      setCount(images.length - 1)
                    }
                  }}
                  className="  h-14 w-14  "
                />
                {hasLiked ? (
                  <HeartIconFilled
                    onClick={likePost}
                    className="h-14 w-14 text-red-500"
                  />
                ) : (
                  <HeartIcon onClick={likePost} className="h-14 w-14" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {!images.length == 0 && (
        <div
          className={
            images.length >= 4
              ? `flex grid-cols-3 gap-4  overflow-x-scroll  lg:grid  lg:grid-rows-2 lg:gap-3 lg:overflow-x-hidden `
              : 'flex  w-full justify-start space-x-6 shadow-xl  scrollbar-hide sm:overflow-x-scroll'
          }
        >
          {images.length === 1 ? (
            <img
              onClick={() => {
                setCount(0)
                setOpenPhotoModal(true)
              }}
              src={images[0].data().image}
              alt=""
              className="flex  h-[400px] w-[700px]   cursor-pointer object-cover    "
            />
          ) : (
            images.map((image, i) => (
              <img
                onClick={() => {
                  setCount(i)
                  setOpenPhotoModal(true)
                }}
                src={image.data().image}
                alt=""
                className="  h-[200px] w-[400px] rounded-lg object-cover transition-all duration-500 ease-in   "
              />
            ))
          )}
        </div>
      )}
      {session && (
        <div className="">
          <div className="flex flex-1 p-4">
            {hasLiked ? (
              <div
                onClick={likePost}
                className="flex h-10 w-1/3 cursor-pointer items-center justify-center space-x-2 rounded-lg hover:bg-slate-100"
              >
                <ThumbUpIcon onClick={likePost} className="text-blue-500" />
                <p className="hidden cursor-pointer  text-blue-500  lg:inline-block">
                  Liked
                </p>
              </div>
            ) : (
              <div
                onClick={likePost}
                className="flex h-10 w-1/3 cursor-pointer items-center justify-center space-x-2 rounded-lg hover:bg-slate-100"
              >
                <ThumbUpOutlinedIcon
                  className="flex cursor-pointer space-x-2 text-blue-500"
                  onClick={likePost}
                />
                <p className="hidden w-10 cursor-pointer text-blue-500 lg:inline-block">
                  Like
                </p>
              </div>
            )}
            <div
              onClick={() => setCom(!com)}
              className="flex h-10 w-1/3 cursor-pointer items-center justify-center space-x-2 rounded-lg hover:bg-slate-100"
            >
              <MarkChatUnreadTwoToneIcon className="text-blue-500" />
              <p className="hidden cursor-pointer text-blue-500 lg:inline-block">
                Comment
              </p>
            </div>
            <div
              onClick={deletePost}
              className="flex h-10 w-1/3 cursor-pointer items-center justify-center space-x-2 rounded-lg hover:bg-slate-100"
            >
              <ReplySharpIcon className="pl-15 cursor-pointer text-blue-500" />
              <p className="hidden cursor-pointer text-blue-500 lg:inline-block">
                Share
              </p>
            </div>
          </div>
        </div>
      )}

      {likes.length > 0 && (
        <div className=" flex p-4 pl-6 font-bold">
          <p className="pr-2 text-lg  text-blue-500 ">{`${likes.length}`} </p>
          <ThumbUpIcon onClick={likePost} className="h-3 text-blue-500" />
        </div>
      )}
      {com && (
        <form className="flex items-center p-4">
          <img
            src={userImg}
            className=" mr-3 h-12 w-12
          rounded-full border object-contain p-1  "
            alt=""
          />
          <div className=" w-[520px] ">
            <InputEmoji
              value={comment}
              ref={inputRef}
              onChange={setComment}
              placeholder="Add a Comment..."
            />
          </div>

          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="w-[60px] font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
      {comments.length > 0 && (
        <div
          className={`ml-10 flex flex-col overflow-y-scroll transition-all duration-300 ease-in scrollbar-hide ${
            comments.length > 5 && 'h-40'
          } `}
        >
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                className="h-7 rounded-full "
                src={comment.data().userImage}
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>

              <Moment className="pr-5 text-sm" fromNow>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Post
