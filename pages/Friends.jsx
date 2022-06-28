import { GiftIcon } from '@heroicons/react/solid'
import {
  ChevronRight,
  People,
  PersonAdd,
  PersonAddAlt1Sharp,
  PersonPinCircleOutlined,
  Settings,
} from '@mui/icons-material'
import React, { useState } from 'react'

import Link from 'next/link'

function Friends() {
  const friends = [
    {
      name: 'Moti Yosef',
      src: 'https://lh3.googleusercontent.com/a-/AOh14GjwMlnKOpt5purAmaskRIxiRt7LquzwL_0y_zFuSRQ=s96-c',
      profile: `https://lh3.googleusercontent.com/a-/AOh14GjwMlnKOpt5purAmaskRIxiRt7LquzwL_0y_zFuSRQ=s96-c`,
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
    {
      name: 'Michael Edward',
      src: 'https://i.pinimg.com/474x/22/40/55/224055a72b9cc6ff63617bcb2c3ce8af.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-1/285633980_5526923023999250_2923575221772217567_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hTxUnp1aZlMAX_zDV_A&tn=osZC3KjZEenLPwoO&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8hYDhQnMBe3bPOqAsODjYnnhf0RMu8iuX2Cd1jLMKmzA&oe=62AFD591',
    },
    {
      name: 'Lola Bardamn',
      src: 'https://i.pinimg.com/474x/fb/33/b9/fb33b94125d3ef63f22d536190a680a6.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-1/287203025_390903259745021_5835192384921986229_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fmZQFJ-xtZUAX_YHsND&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-zcDjrCFlrDmnIzyh9yWgvCe9YSXrRb6cbJh9V84ZO4w&oe=62AFD4AF',
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
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-1/243208465_1296760044087508_1532072654743544381_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=307C3t-AGcgAX-qXnAP&_nc_oc=AQlOyqkkXtBacRDrf703se708ThurgppwyWZ_wmYlQP_uQW5EF3yq4thLRXgFD-7nJNsS6k8O4Ib3cYcJVdPd5cM&tn=osZC3KjZEenLPwoO&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8Ln0hjdGj0pmysRUJYdpFxJLoKZI_6_CgwOSgprkqfnA&oe=62B0C9F8',
    },
    {
      name: 'Michael Edward',
      src: 'https://i.pinimg.com/474x/22/40/55/224055a72b9cc6ff63617bcb2c3ce8af.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-1/166691014_3101797520049657_7302852110410474700_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jObRnh33xJIAX_Ns4S3&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-QRxZl3gFrY4ZHZD5mMZL3ywqYc_9N4snjBkn7vlE-8A&oe=62D0B66B',
    },
    {
      name: 'Lola Bardamn',
      src: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-1/276250533_10227101476431462_8582232490558027704_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3vnuY2wwg7AAX89YgXl&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8rA0Id6wFvJnwJGRoP6QtDmeX5NvBYyIMVskbtFL7ndg&oe=62BED1D6',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-1/276250533_10227101476431462_8582232490558027704_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3vnuY2wwg7AAX89YgXl&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8rA0Id6wFvJnwJGRoP6QtDmeX5NvBYyIMVskbtFL7ndg&oe=62BED1D6',
    },

    {
      name: 'Emily Blunt',
      src: 'https://i.pinimg.com/474x/a7/0b/80/a70b8028369e0172cb8c287d50d18c2a.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.18169-1/10361968_10155247499725093_491459168500375902_n.jpg?stp=c114.0.320.320a_dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=I_CJ6CQ-yPkAX90UHQ3&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-4wd-fipXW4FmdTLAOfISttd9Otfa4GVgI1O9R-YJ8xA&oe=62CF7F67',
    },
    {
      name: 'Marina Kozslov',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.18169-1/1174819_562809033766279_302951945_n.jpg?stp=c30.30.376.376a_dst-jpg_s320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=gkaLpwEGTZoAX9wr3uD&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_2B4QUfbmYOcyrSb9coWMnqbdHU04bR_XGYLD0Z4jfZg&oe=62D1218B',
    },
  ]
  return (
    <div className=" ">
      <div className=" min-h-[1200px]' flex  p-3 shadow-2xl  ">
        <div className="  fixed min-w-[260px]  flex-col">
          <div className="flex h-14 w-full items-center justify-between p-3 ">
            <p className="text-lg font-semibold ">Friends</p>
            <Settings className="h-7 w-7 rounded-full bg-gray-200 p-1 hover:fill-neutral-500 " />
          </div>
          <div className="group-p-3 mt-3 ">
            <Link href="/">
              <div className="icon-friends cursor-pointer bg-gray-200">
                <People className="logo-friends bg-fbb text-white" />
                <p className="flex flex-1">Home</p>
              </div>
            </Link>
            <div className="icon-friends">
              <People className="logo-friends" />
              <p className="flex flex-1">Friend Requests</p>
              <ChevronRight className="h-6 w-6 " />
            </div>
            <div className="icon-friends">
              <PersonAdd className="logo-friends" />
              <p className="flex flex-1">Suggustions</p>
              <ChevronRight className="h-6 w-6 " />
            </div>
            <div className="icon-friends">
              <PersonAddAlt1Sharp className="logo-friends" />
              <p className="flex flex-1">All friends</p>
              <ChevronRight className="h-6 w-6 " />
            </div>
            <div className="icon-friends">
              <GiftIcon className="logo-friends" />
              <p className="flex flex-1">Birthdays</p>
            </div>
            <div className="icon-friends">
              <PersonPinCircleOutlined className="logo-friends" />
              <p className="flex flex-1">Custom Lists</p>
              <ChevronRight className="h-6 w-6 " />
            </div>
          </div>
        </div>
        <div className=" min-w-[260px] flex-col"></div>
        <div className=" flex flex-grow flex-col bg-gray-100">
          <div className=" flex  w-full justify-between p-4">
            <p className="font-semibold">Pepole You May Know</p>
            <p className="text-fbb">See All</p>
          </div>

          <div className=" w-fit-content trans ml-4 flex flex-wrap items-center gap-3 duration-700   ">
            {friends.map((friend) => (
              <FriendCard
                name={friend.name}
                profile={friend.profile}
                src={friend.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends
function FriendCard({ name, src, profile }) {
  const [remove, setRemove] = useState(false)
  return (
    !remove && (
      <div className="min-w-60 flex h-[400px] w-[207px]   flex-col rounded-lg  bg-white shadow-2xl">
        <img
          src={profile}
          alt=""
          className="h-[230px] w-full rounded-lg rounded-b-none object-cover"
        />
        <p className="ml-3 mt-3">{name}</p>
        <div className="flex  items-center pl-3">
          <img src={src} alt="" className="h-4 w-4 rounded-full" />
          <p className="font-xm ml-3 text-gray-400">{`${Math.floor(
            Math.random() * 50
          )} mutual friends`}</p>
        </div>
        <div className=" flex flex-col space-y-2 p-2">
          <button className="h-10 rounded-lg bg-blue-200 text-fbb hover:bg-gray-200">
            Add Friend
          </button>
          <button
            onClick={() => setRemove(true)}
            className="h-10 rounded-lg bg-gray-200 text-black hover:bg-gray-300"
          >
            Remove
          </button>
        </div>
      </div>
    )
  )
}
