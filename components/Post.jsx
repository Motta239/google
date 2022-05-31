import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
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
} from 'firebase/firestore'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Moment from 'react-moment'

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)


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
      onSnapshot(
        query(
          collection(db, 'posts', id, 'likes'),

        ),
        (snapshot) => {
          setLikes(snapshot.docs)
        }
      ),
    [db, id]
  )

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc((doc(db, 'posts', id, 'likes', session.user.uid)))
    }
    else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.username,
      })
    }
  }

  useEffect(() =>
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    ), [likes])
  const sendComment = async (e) => {
    e.preventDefault()
    const commentToSend = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }
  console.log(hasLiked);
  return (
    <div className="border my-7 rounded-sm bg-white ">
      {/* Header */}
      <div className="flex items-center p-5 ">
        <img
          src={userImg}
          className=" border mr-3 h-12
            w-12 rounded-full object-contain p-1  "
          alt=""
        />
        <p className="flex-1 font-bold"> {username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img
        src={img}
        alt=""
        className="flex shadow-lg shadow-black-500/50 w-full transition-all ease-in hover:scale-110  object-cover  "
      />
      {session && (
        <div className="flex justify-between px-4 pt-4 ">
          <div className="flex space-x-4">
            {
              hasLiked ? (
                <HeartIconFilled onClick={likePost} className="btn text-red-500" />
              ) : (

                <HeartIcon onClick={likePost} className="btn" />
              )
            }
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <div className="">
            <BookmarkIcon className="btn pr-2" />
          </div>
        </div>
      )}

      <p className="truncate p-5">
        {likes.length > 0 && (
          <p className="font-bold" > <a className="text-red-500">{likes.length}</a> likes</p>
        )}
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="ml-10 h-20 scrollbar-thin overflow-y-scroll scrollbar-thumb-black">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full "
                src={comment.data().userImage}
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
              <Moment className="text-sm pr-5" fromNow>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
