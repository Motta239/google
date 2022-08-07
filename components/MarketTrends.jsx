import {
  CurrencyBitcoin,
  CurrencyYuan,
  Equalizer,
  LightMode,
  PeopleAltTwoTone,
  TrendingDown,
  TrendingUp,
} from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'
const trends = [
  {
    id: 1,
    Icon: TrendingUp,
    head: 'Gainers',
    color: 'text-green-600',
    href: '/movers/gainers',
  },
  {
    id: 1,
    Icon: TrendingDown,
    head: 'Losers',
    color: 'text-red-500',
    href: '/movers/losers',
  },
  {
    id: 1,
    Icon: PeopleAltTwoTone,
    head: 'Trending',
    color: 'text-black',
    href: '/movers/gainers',
  },
  {
    id: 1,
    Icon: LightMode,
    head: 'Renewable Energy',
    color: 'text-yellow-400',
    href: '/movers/gainers',
  },
  {
    id: 1,
    Icon: Equalizer,
    head: 'Most Active',
    color: 'text-blue-500',
    href: '/movers/actives',
  },
  {
    id: 1,
    Icon: CurrencyBitcoin,
    head: 'Crypto',
    color: 'text-orange-300',
    href: '/movers/gainers',
  },
  {
    id: 1,
    Icon: CurrencyYuan,
    head: 'Currencies',
    color: 'text-gray-800',
    href: '/movers/gainers',
  },
]
function MarketTrends() {
  return (
    <div className="  flex h-fit   flex-col rounded-lg p-4 md:border-[0.7px] md:shadow-md ">
      <p className="text-gray-800">Market Trends</p>
      <div className="mt-4 flex flex-wrap   ">
        {trends.map(({ Icon, head, color, href }) => (
          <div key={head} className="">
            <MarketTrendsBtn
              Icon={Icon}
              head={head}
              color={color}
              href={href}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketTrends

function MarketTrendsBtn({ Icon, head, color, href }) {
  return (
    <Link href={href}>
      <div className="marketTrendsBtn">
        <Icon className={color} />
        <p className=" btnText">{head}</p>
      </div>
    </Link>
  )
}
