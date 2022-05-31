import axios from 'axios'
import { useEffect, useState } from 'react'
import Story from './Story'
import {signOut, useSession} from 'next-auth/react'
function Stories() {
  const {data : session}= useSession();
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/users/').then((results) => {
      setSuggestions(results.data.users)
    })
  }, [])

  return (
    <div className="mt-8   flex space-x-2 overflow-hidden overflow-x-scroll rounded-sm border-gray-200 bg-white p-6  scrollbar-hide">
     {session &&(
         <Story img={session?.user.image} username={session?.username}  />

         )}
         {suggestions.map((profile) => (
           <Story
             key={profile.id}
             img={profile.image}
             username={profile.firstName}
           />
         ))}
    </div>
  )
}

export default Stories
