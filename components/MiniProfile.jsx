import React from 'react'
import {signOut, useSession} from 'next-auth/react'
function MiniProfile() {
    const {data : session}= useSession();
    console.log(session);
  return (
      <div className='flex items-center justify-between mt-14 ml-10 '>
        <img src={session?.user.image} className='rounded-full border p-[2px] w-16 h-16' alt="" />
    
    <div className="flex-1 mx-4">
    <h2 className='font-bold'>{session?.username}</h2>
    {!session?(<h3 className='text-sm text-gray-400'>Welcome To Instagram</h3>):(<h3 className='flex-1 text-sm text-gray-500'>{session?.user.name}</h3>)}
    </div>
    <button onClick={signOut} className='text-blue-400 font-semibold text-sm pl-10'>Sign Out</button>
    </div>
  )
}

export default MiniProfile