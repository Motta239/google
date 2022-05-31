import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'


const Home = () => {
  return (
    <div className=" h-screen overflow-y-scroll bg-gray-100">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <Feed />
      <Modal />

    </div>
  )
}

export default Home
