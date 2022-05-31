import React from 'react'

function Story({ img, username }) {
  return (
    <div className="transition-all ease-in hover:scale-125">
      <img
        src={img}
        alt=""
        className=" h-14 w-14 max-w-none cursor-pointer rounded-full border-2 border-red-500 "
      />
      <p className="w-14 truncate  text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
