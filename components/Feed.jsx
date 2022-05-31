import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import {signOut, useSession} from 'next-auth/react'

function Feed() {
  const {data : session}= useSession();
  return (
    <main className={`mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${!session && "!grid-cols-1 !max-w-3xl"} `}>
      <section className="col-span-2">
        {/* STORIES */}
        <Stories />
        <Posts />
      </section>

      <section className='hidden xl:inline-grid md:col-span-1'>
    {session?(
    <div className="fixed top-13">
      <MiniProfile/>
      <Suggestions/>
      </div>
      
      ):("")}
      

      </section> 
    </main>
  )
}

export default Feed
