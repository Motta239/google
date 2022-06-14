import Stories from './Sotry/Stories'
import InputBox from './InputBox'

import Posts from './Posts/Posts'

function Feed({ dark }) {
  return (
    <div className="flex-grow  overflow-y-auto pt-6 lg:mr-6 xl:mr-[22px] ">
      <div className="mx-auto w-[450px] transition-all duration-1000 ease-out md:w-[500px] md:max-w-lg lg:w-auto lg:max-w-2xl">
        <Stories />
        <InputBox dark={dark} />
        <Posts dark={dark} />
      </div>
    </div>
  )
}

export default Feed
