import React from 'react'
import { useRecoilState } from 'recoil'
import { darkMode } from '../../atoms/darkMode'
function SidebarRow({ src, Icon, title }) {
  const [dark, setDark] = useRecoilState(darkMode)
  return (
    <div
      className={`flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition-all duration-300 ease-in ${
        dark ? 'hover:bg-gray-200' : 'hover:bg-gray-400'
      }  hover:text-gray-900 focus:ring focus:ring-blue-500 active:shadow-inner lg:hover:pl-[15px] `}
    >
      {src && (
        <img
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden font-medium md:inline-flex">{title}</p>
    </div>
  )
}

export default SidebarRow
