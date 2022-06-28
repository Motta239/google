import React from 'react'

function NotCard({ img, name, desc }) {
  return (
    <div className=" flex h-16 w-[230px] items-center space-x-2 rounded-md border-t-[1px]   hover:bg-blue-200 ">
      <img
        onClick={() => setOpen(!open)}
        src={img}
        alt="profile pic"
        className=" ml-2  h-10 w-10 cursor-pointer justify-center rounded-full md:inline"
      />
      <div className="flex flex-1 flex-col  space-y-1 text-xs ">
        <p className="">{`${name} ${desc}`} </p>
        {desc.includes('invited') && (
          <div className="flex space-x-2 pb-2 ">
            <button className=" h-5 w-1/3 rounded-md bg-blue-500 text-white">
              Accept
            </button>
            <button className=" h-5 w-1/3 rounded-md bg-white ">Decline</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NotCard
