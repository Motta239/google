import StoryCard from './StoryCard'
import { MdClose } from 'react-icons/md'
import React, { useEffect, useRef, useState } from 'react'
import {
  SearchIcon,
  CameraIcon,
  VideoCameraIcon,
  TrashIcon,
  PlusCircleIcon,
  UserGroupIcon,
  ArrowCircleDownIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { ArrowCircleLeftIcon } from '@heroicons/react/outline'
import InputEmoji from 'react-input-emoji'

function Stories() {
  const { data: session } = useSession()
  const photoRef = useRef()
  const img = session?.user?.image

  const stories = [
    {
      name: 'Moti Yosef',
      src: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-789cd.appspot.com/o/posts%2F2ktTb9TJsN78IEsx2tod%2Fimage?alt=media&token=9fedd3ae-b8b6-435d-a08f-e6b8f668793e',
      profile: `${img}`,
    },
    {
      name: 'Michael Edward',
      src: 'https://i.pinimg.com/474x/22/40/55/224055a72b9cc6ff63617bcb2c3ce8af.jpg',
      profile:
        'https://i.pinimg.com/474x/d6/88/51/d688517e6f30ed7342b3f78e7612e7bc.jpg',
    },
    {
      name: 'Lola Bardamn',
      src: 'https://i.pinimg.com/474x/fb/33/b9/fb33b94125d3ef63f22d536190a680a6.jpg',
      profile:
        'https://i.pinimg.com/474x/e9/c8/08/e9c808fdac222166d8b1d892e79fe25e.jpg',
    },

    {
      name: 'Emily Blunt',
      src: 'https://i.pinimg.com/474x/a7/0b/80/a70b8028369e0172cb8c287d50d18c2a.jpg',
      profile:
        'https://i.pinimg.com/474x/b9/3d/d4/b93dd44ef0d0719d741a9c36802e6d82.jpg',
    },
    {
      name: 'Marina Kozslov',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://i.pinimg.com/474x/2a/05/7d/2a057d572e088070c4310edc0f0f4cd3.jpg',
    },
  ]
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!photoRef.current?.contains(e.target)) {
        setOpenStory(false)
      }
    })
  })
  const [openStory, setOpenStory] = useState(false)
  const [storyNum, setStory] = useState(false)
  console.log(stories.length - 1, storyNum)
  return (
    <div className="mx-auto flex justify-between space-x-2 lg:space-x-2 ">
      {openStory && (
        <div className="fixed top-[0px] right-0 left-0 bottom-0 z-50 flex  items-center justify-center bg-neutral-500 bg-opacity-50 ">
          <div
            ref={photoRef}
            className="  top-[200px] left-[400px] flex  rounded-md object-cover shadow-xl"
          >
            <div className=" w-full">
              <img
                className="  h-[400px] w-[300px] rounded-md object-cover shadow-xl transition-all duration-500 ease-in lg:h-[700px]  lg:w-[400px]"
                src={stories[storyNum].src}
                alt=""
              />
              <div className="flex w-full justify-between  ">
                {!storyNum == 0 && (
                  <ArrowCircleDownIcon
                    onClick={() => setStory(storyNum - 1)}
                    className="h-14 w-14 rotate-90 text-blue-700"
                  />
                )}
                <InputEmoji placeholder="Add a Comment..." />
                {storyNum !== stories.length - 1 && (
                  <ArrowCircleRightIcon
                    onClick={() => setStory(storyNum + 1)}
                    className="  h-14 w-14  text-blue-700  "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {stories.map((story, i) => (
        <div
          onClick={() => {
            setOpenStory(true)
            setStory(i)
          }}
        >
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        </div>
      ))}
    </div>
  )
}

export default Stories
