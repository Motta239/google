import React from 'react'

function NewCard({ source, imgUrl, date, head, link }) {
  return (
    <div
      onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
      className="flex  justify-between border-t p-3 hover:cursor-pointer hover:bg-gray-50"
    >
      <div className="flex w-[70%] flex-col space-y-2">
        <div className="flex items-center space-x-2 ">
          <p className="text-xs text-gray-700 ">{source} </p>
          <p className="text-xs text-gray-700 ">{date}</p>
        </div>
        <p className=" pr-3  tracking-[-0.05em]">{head}</p>
      </div>
      <img
        className="flex h-20 w-[120px] items-center justify-center rounded-lg "
        src={imgUrl}
        alt={source}
      />
    </div>
  )
}

export default NewCard
