import { createProtfolio, getUserProtfolios } from './useFetch'
import { db } from '../firebase'
import { Poll } from '@mui/icons-material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/solid'

function Protfolios() {
  const router = useRouter()
  const { data: userProtfolios } = getUserProtfolios(db)
  const uid = router.query.uid

  return (
    <div
      className={` min-w-[480px]  font-light text-gray-900 ${
        !uid && 'md:w-[500px] lg:w-[670px]'
      }`}
    >
      {!uid && <p className="mb-1 text-lg ">Your Lists</p>}
      <div className="  flex h-16 space-x-2 overflow-hidden overflow-x-scroll p-2 scrollbar-hide">
        {userProtfolios?.map((portfolio) => (
          <Link href={`/protfolio/${portfolio.data().portfolioName}`}>
            <div
              className={`flex h-10 w-[170px] items-center space-x-3 rounded-lg border p-2 hover:shadow-lg ${
                portfolio.data().portfolioName == uid &&
                'shadow-sm  shadow-blue-700'
              } `}
            >
              <Poll className="h-6 w-6 font-light text-gray-600 " />
              <p className="w-[96px] text-sm">
                {portfolio.data().portfolioName}
              </p>
              <p className="h-6 w-6  ">{portfolio.data().symbols.length}</p>
            </div>
          </Link>
        ))}
        <div className=" flex h-10 w-[170px] items-center justify-center space-x-1 rounded-lg border-blue-500 bg-blue-200 p-2  text-blue-500 transition-all duration-100 ease-in focus:border-[2.7px] focus:bg-white active:scale-95">
          <p>New</p>
          <PlusIcon className="h-5 w-5 " />
        </div>
      </div>
    </div>
  )
}

export default Protfolios
