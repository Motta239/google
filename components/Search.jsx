import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SearchResults from './SearchResults'
import { useRouter } from 'next/router'
import { Close } from '@mui/icons-material'
import { SearchIcon } from '@heroicons/react/solid'
function Search() {
  let list = [
    {
      symbol: 'H',
      name: 'Hyatt Hotels Corporation',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 98.43,
      change: -5.69,
    },
    {
      symbol: 'S&P',
      name: 'Ishears ',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'Index',
      price: 2.61,
      change: 11.68,
    },
    {
      symbol: 'Rusell',
      name: 'Ishears ',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'Index',
      price: 67.44,
      change: 6.43,
    },
    {
      symbol: 'Dow Jones',
      name: 'Ishears ',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'Index',
      price: 128.7,
      change: 18.8,
    },
    {
      symbol: 'Y',
      name: 'Alleghany Corporation',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 140.06,
      change: -4.01,
    },
    {
      symbol: 'A',
      name: 'Agilent Technologies, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 35.53,
      change: -3.69,
    },
    {
      symbol: 'NU',
      name: 'Nu Holdings Ltd.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 19.99,
      change: -9.71,
    },
    {
      symbol: 'DS',
      name: 'Drive Shack Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 157.88,
      change: 10.61,
    },
    {
      symbol: 'NM',
      name: 'Navios Maritime Holdings Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 188.66,
      change: 16.5,
    },
    {
      symbol: 'LX',
      name: 'LexinFintech Holdings Ltd.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 145.28,
      change: 15.2,
    },
    {
      symbol: 'ME',
      name: '23andMe Holding Co.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 61.84,
      change: 0.91,
    },
    {
      symbol: 'CG',
      name: 'The Carlyle Group Inc.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 85.68,
      change: 1.02,
    },
    {
      symbol: 'FV',
      name: 'First Trust Dorsey Wright Focus 5 ETF',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Market',
      exchangeShortName: 'NASDAQ',
      price: 107.95,
      change: -11.11,
    },
    {
      symbol: 'WH',
      name: 'Wyndham Hotels & Resorts, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 161.47,
      change: 15.67,
    },
    {
      symbol: 'EL',
      name: 'Estee Lauder Companies Inc',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 10.4,
      change: -18.53,
    },
    {
      symbol: 'GT',
      name: 'The Goodyear Tire & Rubber Company',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 31.17,
      change: 13.36,
    },
    {
      symbol: 'RH',
      name: 'RH',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 197.87,
      change: 8.8,
    },
    {
      symbol: 'IE',
      name: 'Ivanhoe Electric Inc.',
      currency: 'USD',
      stockExchange: 'American Stock Exchange',
      exchangeShortName: 'AMEX',
      price: 62.9,
      change: 16.44,
    },
    {
      symbol: 'PG',
      name: 'The Procter & Gamble Company',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 196.54,
      change: -18.3,
    },
    {
      symbol: 'PM',
      name: 'Philip Morris International Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 190.05,
      change: -3.91,
    },
    {
      symbol: 'GB',
      name: 'Global Blue Group Holding AG',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 29.66,
      change: -8.89,
    },
    {
      symbol: 'PK',
      name: 'Park Hotels & Resorts Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 28.67,
      change: -18.17,
    },
    {
      symbol: 'JT',
      name: 'Jianpu Technology Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 14.9,
      change: 10.68,
    },
    {
      symbol: 'RL',
      name: 'Ralph Lauren Corporation',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 36.95,
      change: 16.28,
    },
    {
      symbol: 'KR',
      name: 'The Kroger Co.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 172.73,
      change: 13.54,
    },
    {
      symbol: 'SJ',
      name: 'Scienjoy Holding Corporation',
      currency: 'USD',
      stockExchange: 'NASDAQ Capital Market',
      exchangeShortName: 'NASDAQ',
      price: 58.16,
      change: -0.47,
    },
    {
      symbol: 'CN',
      name: 'Xtrackers MSCI All China Equity ETF',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      price: 153.23,
      change: -1.22,
    },
    {
      symbol: 'UP',
      name: 'Wheels Up Experience Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 100.34,
      change: -5.91,
    },
    {
      symbol: 'BJ',
      name: "BJ's Wholesale Club Holdings, Inc.",
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 179.46,
      change: -8.17,
    },
    {
      symbol: 'SO',
      name: 'The Southern Company',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 108.83,
      change: -17.61,
    },
    {
      symbol: 'HP',
      name: 'Helmerich & Payne, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 134.71,
      change: 13.79,
    },
    {
      symbol: 'LL',
      name: 'LL Flooring Holdings, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 97.59,
      change: -8.65,
    },
    {
      symbol: 'GF',
      name: 'The New Germany Fund, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 128.22,
      change: -1.6,
    },
    {
      symbol: 'FM',
      name: 'iShares MSCI Frontier and Select EM ETF',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      price: 189.78,
      change: 14.38,
    },
    {
      symbol: 'GH',
      name: 'Guardant Health, Inc.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 67.44,
      change: 10.47,
    },
    {
      symbol: 'IO',
      name: 'ION Geophysical Corporation',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 166.67,
      change: 5.16,
    },
    {
      symbol: 'MF',
      name: 'Missfresh Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Market',
      exchangeShortName: 'NASDAQ',
      price: 99.61,
      change: 14.56,
    },
    {
      symbol: 'AB',
      name: 'AllianceBernstein Holding L.P.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 99.65,
      change: -5.37,
    },
    {
      symbol: 'AP',
      name: 'Ampco-Pittsburgh Corporation',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 74.9,
      change: 7.63,
    },
    {
      symbol: 'CD',
      name: 'Chindata Group Holdings Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 22.31,
      change: -15.12,
    },
    {
      symbol: 'KF',
      name: 'The Korea Fund, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 20.03,
      change: 7.13,
    },
    {
      symbol: 'WY',
      name: 'Weyerhaeuser Company',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 71.31,
      change: 6.25,
    },
    {
      symbol: 'ZH',
      name: 'Zhihu Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 175.81,
      change: -19.18,
    },
    {
      symbol: 'BA',
      name: 'The Boeing Company',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 198.08,
      change: 4.05,
    },
    {
      symbol: 'HL',
      name: 'Hecla Mining Company',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 162.64,
      change: -8.09,
    },
    {
      symbol: 'EH',
      name: 'EHang Holdings Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Market',
      exchangeShortName: 'NASDAQ',
      price: 105.3,
      change: 16.57,
    },
    {
      symbol: 'GO',
      name: 'Grocery Outlet Holding Corp.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 116.23,
      change: -15.91,
    },
    {
      symbol: 'MU',
      name: 'Micron Technology, Inc.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 62,
      change: -16.81,
    },
    {
      symbol: 'CF',
      name: 'CF Industries Holdings, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 97.33,
      change: 5.72,
    },
    {
      symbol: 'DB',
      name: 'Deutsche Bank Aktiengesellschaft',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 107.69,
      change: -15.52,
    },
    {
      symbol: 'HD',
      name: 'The Home Depot, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 92.04,
      change: -17.87,
    },
    {
      symbol: 'YQ',
      name: '17 Education & Technology Group Inc.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 172.88,
      change: 12.65,
    },
    {
      symbol: 'PB',
      name: 'Prosperity Bancshares, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 43.18,
      change: 10.03,
    },
    {
      symbol: 'VG',
      name: 'Vonage Holdings Corp.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 137.79,
      change: -2.69,
    },
    {
      symbol: 'CB',
      name: 'Chubb Limited',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 111.49,
      change: -5.93,
    },
    {
      symbol: 'HA',
      name: 'Hawaiian Holdings, Inc.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 199.79,
      change: 15.17,
    },
    {
      symbol: 'BZ',
      name: 'Kanzhun Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 138.89,
      change: 14.28,
    },
    {
      symbol: 'PT',
      name: 'Pintec Technology Holdings Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Market',
      exchangeShortName: 'NASDAQ',
      price: 28.77,
      change: 10.77,
    },
    {
      symbol: 'ST',
      name: 'Sensata Technologies Holding plc',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 194.47,
      change: 6.04,
    },
    {
      symbol: 'LW',
      name: 'Lamb Weston Holdings, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 20.84,
      change: 14.1,
    },
    {
      symbol: 'KO',
      name: 'The Coca-Cola Company',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 170.2,
      change: -18.15,
    },
    {
      symbol: 'HT',
      name: 'Hersha Hospitality Trust',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 135.39,
      change: -7.88,
    },
    {
      symbol: 'TT',
      name: 'Trane Technologies plc',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 107.54,
      change: -1.4,
    },
    {
      symbol: 'QH',
      name: 'Quhuo Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Market',
      exchangeShortName: 'NASDAQ',
      price: 171.91,
      change: -11.02,
    },
    {
      symbol: 'DH',
      name: 'Definitive Healthcare Corp.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 166.61,
      change: 1.75,
    },
    {
      symbol: 'JP',
      name: 'Jupai Holdings Limited',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 90.86,
      change: -6.82,
    },
    {
      symbol: 'GK',
      name: 'AdvisorShares Gerber Kawasaki ETF',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      price: 197.36,
      change: 16.23,
    },
    {
      symbol: 'TD',
      name: 'The Toronto-Dominion Bank',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 197.04,
      change: 4.98,
    },
    {
      symbol: 'LH',
      name: 'Laboratory Corporation of America Holdings',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 95.44,
      change: -4.31,
    },
    {
      symbol: 'CW',
      name: 'Curtiss-Wright Corporation',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 61.52,
      change: 8.94,
    },
    {
      symbol: 'NH',
      name: 'NantHealth, Inc.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 172.03,
      change: -11.06,
    },
    {
      symbol: 'LD',
      name: 'iPath Bloomberg Lead Subindex Total Return(SM) ETN',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      price: 77.11,
      change: 19.74,
    },
    {
      symbol: 'JO',
      name: 'iPath Series B Bloomberg Coffee Subindex Total Return ETN',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      price: 107.44,
      change: -4.06,
    },
    {
      symbol: 'BK',
      name: 'The Bank of New York Mellon Corporation',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 73.04,
      change: 2.86,
    },
    {
      symbol: 'WU',
      name: 'The Western Union Company',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 10.61,
      change: -7.66,
    },
    {
      symbol: 'HY',
      name: 'Hyster-Yale Materials Handling, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 102.26,
      change: -9.81,
    },
    {
      symbol: 'BH',
      name: 'Biglari Holdings Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 28.42,
      change: 4.65,
    },
    {
      symbol: 'LB',
      name: 'Bath & Body Works, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 36.65,
      change: -10.05,
    },
    {
      symbol: 'LU',
      name: 'Lufax Holding Ltd',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 93.1,
      change: 6.39,
    },
    {
      symbol: 'IH',
      name: 'iHuman Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 176.67,
      change: -6.18,
    },
    {
      symbol: 'DK',
      name: 'Delek US Holdings, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 104.47,
      change: -13.35,
    },
    {
      symbol: 'TC',
      name: 'TuanChe Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Capital Market',
      exchangeShortName: 'NASDAQ',
      price: 76.52,
      change: -13.68,
    },
    {
      symbol: 'DV',
      name: 'DoubleVerify Holdings, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 161.84,
      change: 18.16,
    },
    {
      symbol: 'CR',
      name: 'Crane Holdings, Co.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 153.97,
      change: -3.06,
    },
    {
      symbol: 'NP',
      name: 'Neenah, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 54.05,
      change: 5.89,
    },
    {
      symbol: 'EM',
      name: 'Smart Share Global Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 174.03,
      change: -7.72,
    },
    {
      symbol: 'XT',
      name: 'iShares Exponential Technologies ETF',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Market',
      exchangeShortName: 'NASDAQ',
      price: 131.74,
      change: 7.85,
    },
    {
      symbol: 'GS',
      name: 'The Goldman Sachs Group, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 198.15,
      change: -11.67,
    },
    {
      symbol: 'HX',
      name: 'Akso Health Group',
      currency: 'USD',
      stockExchange: 'Nasdaq Global Market',
      exchangeShortName: 'NASDAQ',
      price: 139.41,
      change: -8.03,
    },
    {
      symbol: 'MJ',
      name: 'ETFMG Alternative Harvest ETF',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      price: 16.45,
      change: 10.68,
    },
    {
      symbol: 'HE',
      name: 'Hawaiian Electric Industries, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 18.24,
      change: 3.98,
    },
    {
      symbol: 'KC',
      name: 'Kingsoft Cloud Holdings Limited',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 28.82,
      change: -11.4,
    },
    {
      symbol: 'BQ',
      name: 'Boqii Holding Limited',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 115,
      change: -2.05,
    },
    {
      symbol: 'AU',
      name: 'AngloGold Ashanti Limited',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 130.56,
      change: 13.25,
    },
    {
      symbol: 'ZI',
      name: 'ZoomInfo Technologies Inc.',
      currency: 'USD',
      stockExchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      price: 160.52,
      change: 6.54,
    },
    {
      symbol: 'HI',
      name: 'Hillenbrand, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 53.58,
      change: -11.62,
    },
    {
      symbol: 'BV',
      name: 'BrightView Holdings, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 197.73,
      change: -14.71,
    },
    {
      symbol: 'SC',
      name: 'Santander Consumer USA Holdings Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 53.12,
      change: 12.17,
    },
    {
      symbol: 'TH',
      name: 'Target Hospitality Corp.',
      currency: 'USD',
      stockExchange: 'NASDAQ Capital Market',
      exchangeShortName: 'NASDAQ',
      price: 54.15,
      change: 18.12,
    },
    {
      symbol: 'CC',
      name: 'The Chemours Company',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 54.08,
      change: -11.28,
    },
    {
      symbol: 'AZ',
      name: 'A2Z Smart Technologies Corp.',
      currency: 'USD',
      stockExchange: 'NASDAQ Capital Market',
      exchangeShortName: 'NASDAQ',
      price: 18.78,
      change: 5.79,
    },
    {
      symbol: 'MX',
      name: 'Magnachip Semiconductor Corporation',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 65.29,
      change: 14.25,
    },
    {
      symbol: 'KW',
      name: 'Kennedy-Wilson Holdings, Inc.',
      currency: 'USD',
      stockExchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      price: 101.66,
      change: -12.19,
    },
  ]
  const [searchResults, setSearchResults] = useState(list)
  const [search, setSearch] = useState(false)
  const [searchBarWit, setSearchBarWit] = useState(true)
  const [modalView, setModalView] = useState('')
  const [openSearchField, setOpenSearchField] = useState(false)
  const [top, setTop] = useState('h-[-10vh]')
  const [tab, setTab] = useState(false)
  const openSearch = useRef()
  const searchInput = useRef()

  const router = useRouter()
  const uid = router?.query?.uid?.toLocaleUpperCase()
  const goToPage = (url) => {
    setOpenSearchField(false)
    router.push({
      pathname: `/finance/${url}`,
    })
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside)
    return () => document.removeEventListener('mousedown', clickOutside)
  })
  useEffect(() => {
    document.addEventListener('mousedown', clickInside)
    return () => document.removeEventListener('mousedown', clickInside)
  })
  useEffect(() => {
    document.addEventListener('keypress', keyPress)
    return () => document.removeEventListener('keypress', keyPress)
  })
  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => {
      document.removeEventListener('keydown', keyPress)
    }
  })
  useEffect(() => {
    document.addEventListener('keydown', keyDown)
    return () => document.removeEventListener('keydown', keyDown)
  })
  const keyPress = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.code === 'KeyJ') {
      setOpenSearchField(true)
      setModalView(
        `fixed inset-0 z-50 flex ${top} justify-center md:z-0 bg-white md:bg-transparent md:sticky md:top-[45px]`
      )
      setSearchBarWit(false)
      searchInput.current.focus()
    }
  }
  const clickOutside = (e) => {
    if (!openSearch.current?.contains(e.target)) {
      setSearch(false)
      setOpenSearchField(false)
      setModalView('')
      setTop('h-[-10vh]')
      setTab(false)
      setSearchResults(list)
      setSearchBarWit(true)
    }
  }
  const clickInside = (e) => {
    if (openSearch.current?.contains(e.target)) {
      setOpenSearchField(true)

      setModalView(
        `fixed inset-0 z-50 flex ${top} justify-center md:z-0 bg-white md:bg-transparent md:sticky md:top-[45px]`
      )
      setSearchBarWit(false)
    }
  }

  const keyDown = (e) => {
    if (e.key == 'Escape') {
      searchInput.current.blur()
      setSearch(false)
      setOpenSearchField(false)
      setTop('h-[-10vh]')
      setTab(false)
    }
  }

  const filterByExchange = (exchange) => {
    const exchangeList = list.filter((ticker) =>
      ticker.exchangeShortName.includes(exchange)
    )
    setSearchResults(exchangeList)
  }

  return (
    <>
      <div className={modalView}>
        <div
          className={` sticky z-20  flex w-min flex-col items-center justify-start space-y-3  transition duration-300 ease-in-out `}
        >
          <div ref={openSearch} className=" ">
            <div
              className={`  flex h-[60px]  ${
                searchBarWit && uid ? 'w-[60px]' : 'w-[94vw]'
              } items-center  ${
                openSearchField ? 'rounded-t-[30px]' : 'rounded-full'
              }  relative    md:border-[1px]  ${
                uid && !openSearchField ? 'md:bg-gray-100' : 'bg-white'
              } transition-all duration-500 ease-in-out hover:border-none hover:shadow-2xl ${
                uid && 'rounded-md'
              }  md:w-[550px]  `}
            >
              <div className="flex items-center ">
                <SearchIcon className=" ml-4 h-6 w-6 text-gray-500" />

                <input
                  ref={searchInput}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className={` flex ${
                    uid && !openSearchField && 'hidden'
                  } flex-shrink items-center border-transparent bg-transparent  text-xs placeholder-gray-700 outline-none   focus:border-transparent focus:ring-0  lg:inline-flex `}
                  placeholder={
                    uid
                      ? `${uid}`
                      : "Search Stocks/ETF's/Bonds/Currincies/Crypto"
                  }
                />

                {searchInput.current?.value.length >= 1 && (
                  <div
                    onClick={() => {
                      searchInput.current.value = ''
                      setSearch(false)
                      setTab(0)
                    }}
                    className=" absolute right-3 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-300 "
                  >
                    <Close />
                  </div>
                )}
              </div>
            </div>
            {openSearchField && (
              <div
                className={`absolute  flex  h-[${
                  searchResults.length * 48
                }px] scrollbar-thin  max-h-[300px]  w-[100%]  flex-col overflow-y-scroll   rounded-md  bg-white    shadow-xl md:w-[550px]`}
              >
                <div className="sticky top-0 mt-4 mb-4 flex h-16  justify-between bg-white px-3  ">
                  <div
                    onClick={() => {
                      filterByExchange('')
                      setTab(0)
                    }}
                    className={`${tab == 0 && 'active'} filterBtn `}
                  >
                    <p className="">All</p>
                  </div>
                  <div
                    onClick={() => {
                      filterByExchange('NYSE')
                      setTab(1)
                    }}
                    className={`${tab == 1 && 'active'} filterBtn `}
                  >
                    <p className="">NYSE</p>
                  </div>
                  <div
                    onClick={() => {
                      filterByExchange('NASDAQ')
                      setTab(2)
                    }}
                    className={`${tab == 2 && 'active'} filterBtn `}
                  >
                    <p className="">NASDAQ</p>
                  </div>
                  <div
                    onClick={() => {
                      setTab(3)
                      filterByExchange('Index')
                    }}
                    className={`${tab == 3 && 'active'} filterBtn `}
                  >
                    <p className="">Index</p>
                  </div>
                  <div
                    onClick={() => setTab(4)}
                    className={`${tab == 4 && 'active'} filterBtn `}
                  >
                    <p className="">Currency</p>
                  </div>
                  <div
                    onClick={() => setTab(5)}
                    className={`${tab == 5 && 'active'} filterBtn `}
                  >
                    <p className="">Futures</p>
                  </div>
                </div>
                {searchResults?.map((result) => (
                  <div
                    onClick={() => {
                      goToPage(result.symbol)
                    }}
                    key={result.symbol}
                    className=""
                  >
                    <SearchResults
                      ticker={result.symbol}
                      tickerName={result.name}
                      exc={result.exchangeShortName}
                      price={result.price}
                      change={result.change}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
