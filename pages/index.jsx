import Head from 'next/head'
import Search from '../components/Search'
import List from '../components/List'
import News from '../components/News'
import MarketTrends from '../components/MarketTrends'
import YourProfolio from '../components/YourProfolio'
import Protfolios from '../components/Protfolios'
import Calendar from '../components/Calendar'
import MostFollowed from '../components/MostFollowed'

function Home() {
  return (
    <>
      <div className=" flex flex-col items-center space-y-5 ">
        <div className={`flex-flex-col  max-w-[1074px]   `}>
          <Head>
            <title>Google Finance</title>
            <link rel="icon" href="/icons8-google.svg" />
          </Head>

          <div className="flex flex-col items-center justify-center space-y-[16px] px-4 ">
            <Search />

            <div className="flex flex-col justify-center  md:flex-row  md:space-x-10">
              <div className="flex   flex-col space-y-4">
                <List />
                <Protfolios />
                <News />
              </div>
              <div className="flex-col md:inline-flex md:max-w-[326px] md:space-y-8">
                <YourProfolio />
                <MarketTrends />
                <Calendar />
                <MostFollowed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
