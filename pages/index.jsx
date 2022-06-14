import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebars/Sidebar'
import Modal from '../components/Sidebars/Modal'
import Messanger from '../components/Messager'
import StoryModal from '../components/Sotry/StoryModal'
import { useRecoilState } from 'recoil'
import { darkMode } from '../atoms/darkMode'
import { postModal } from '../atoms/postModal'
import { contactId } from '../atoms/contactId'

function Home() {
  const [dark, setDark] = useRecoilState(darkMode)

  const [openPostWindow, setOpenPostWindow] = useRecoilState(postModal)

  return (
    <div
      className={`h-screen overflow-y-scroll ${
        dark ? 'bg-zinc-800' : 'bg-gray-200'
      }`}
    >
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header dark={dark} />
      <div className=" relative flex lg:space-x-2">
        <Sidebar dark={dark} />
        <Feed dark={dark} />
      </div>

      {<Messanger dark={dark} />}
      {openPostWindow && <Modal dark={dark} />}
    </div>
  )
}

export default Home
