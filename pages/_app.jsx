import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Footer from '../components/Footer'
import DiscoverMore from '../components/DiscoverMore'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Helper from '../components/Helper'
import { getUserData } from '../components/useFetch'
import { db } from '../firebase'

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Header />
      <div className="flex  flex-col items-center justify-center   ">
        <Overview />
      </div>
      <Component {...pageProps} />
      <div className="flex  flex-col  items-center justify-center bg-gray-100 p-4 md:p-6">
        <DiscoverMore />
        <Footer />
      </div>
      <Helper />
    </SessionProvider>
  )
}
export default App
