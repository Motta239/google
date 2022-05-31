import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  const [follow, setFollow] = useState(true)
  useEffect(() => {
    axios.get('https://dummyjson.com/users/').then((results) => {
      setSuggestions(results.data.users)
    })
  }, [])

  return (
    <div>

      <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
          <h3 className="font-semibold text-gray-400"> Suggestions for you</h3>
          <button className="text-gray-600 font-semibold">See All</button>
        </div>
        {suggestions.slice(0, 5).map(profile => (
          <div key={profile.id} className='flex items-center justify-between mt-3'>
            <img src={profile.image} alt="" className='h-10 w-10 cursor-pointer rounded-full border p-[2px]' />
            <div className='flex-1 ml-3' >
              <h2 className=" font-semibold "> {profile.username}</h2>
              {profile.username.includes("e") ?
                <h3 className="text-gray-600 text-sm">Followed By motta92</h3> : <h3 className="text-gray-600 text-sm">New to Instagram</h3>}
            </div>
            <button onClick={() => setFollow(!follow)} className="text-blue-500 font-semibold">{follow ? "Follow" : "Following"}</button>
          </div>
        ))

        }
      </div>

    </div>
  )
}

export default Suggestions