import { Google } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <footer className="  flex h-[76px] items-center  space-x-4 overflow-scroll border-t p-3 pb-3 scrollbar-hide      ">
      <Google />
      <p className="font-sans text-gray-700 hover:text-gray-900">Help</p>
      <p className="font-sans text-gray-700 hover:text-gray-900">Send</p>
      <p className="font-sans text-gray-700 hover:text-gray-900">feedback</p>
      <p className="font-sans text-gray-700 hover:text-gray-900">Privacy</p>
      <p className="font-sans text-gray-700 hover:text-gray-900"> Terms </p>
      <p className="font-sans text-gray-700 hover:text-gray-900">Disclaimer</p>
    </footer>
  )
}

export default Footer
