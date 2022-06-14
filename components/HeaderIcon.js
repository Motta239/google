import { SelectorIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

function HeaderIcon({ Icon, active }) {
  const [select, setSelect] = useState(false)

  return (
    <div className="group flex cursor-pointer items-center rounded-xl active:border-b-2 active:border-blue-500 sm:h-14 md:px-10 md:hover:bg-gray-100  ">
      <Icon
        onClick={() => setSelect(!select)}
        className={`h-5 ${
          active && '!text-blue-500'
        } mx-auto text-center text-gray-500 group-hover:text-blue-500 sm:h-7 `}
      />
    </div>
  )
}

export default HeaderIcon
