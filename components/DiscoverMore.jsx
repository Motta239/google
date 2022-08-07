import { ChevronLeft } from '@mui/icons-material'
import StockSqure from './StockSqure'

function DiscoverMore() {
  const stocks = [
    [
      {
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
        marketCap: 2493977460736,
        sector: 'Technology',
        industry: 'Consumer Electronics',
        beta: 1.1946,
        price: 154.09,
        lastAnnualDividend: 0.89,
        volume: 93032838,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#ff453b',
        change: 12.9,
      },
      {
        symbol: 'NVDA',
        companyName: 'NVIDIA Corporation',
        marketCap: 431589490688,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.6369,
        price: 173.19,
        lastAnnualDividend: 0.16,
        volume: 57186367,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#FFFF99',
        change: -13.9,
      },
      {
        symbol: 'ASML',
        companyName: 'ASML Holding N.V.',
        marketCap: 212208074752,
        sector: 'Technology',
        industry: 'Semiconductor Equipment & Materials',
        beta: 1.103,
        price: 534.26,
        lastAnnualDividend: 5.085,
        volume: 1128343,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'NL',
        isEtf: false,
        isActivelyTrading: true,
        color: '#4D80CC',
        change: -11.8,
      },
      {
        symbol: 'AVGO',
        companyName: 'Broadcom Inc.',
        marketCap: 207559327744,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.1047,
        price: 512.52,
        lastAnnualDividend: 15.9,
        volume: 2436806,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#9900B3',
        change: 12.5,
      },
      {
        symbol: 'ADBE',
        companyName: 'Adobe Inc.',
        marketCap: 188089204736,
        sector: 'Technology',
        industry: 'Software—Infrastructure',
        beta: 1.1081,
        price: 401.9,
        lastAnnualDividend: 0,
        volume: 3115045,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#1AB399',
        change: -13,
      },
      {
        symbol: 'QCOM',
        companyName: 'QUALCOMM Incorporated',
        marketCap: 172144001024,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.2231,
        price: 153.7,
        lastAnnualDividend: 2.86,
        volume: 10173266,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#999966',
        change: 0.76,
      },
      {
        symbol: 'AMD',
        companyName: 'Advanced Micro Devices, Inc.',
        marketCap: 142766931968,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.9408,
        price: 88.1,
        lastAnnualDividend: 0,
        volume: 106919227,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#ff453b',
        change: 7.84,
      },
      {
        symbol: 'INTU',
        companyName: 'Intuit Inc.',
        marketCap: 122630152192,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.1367,
        price: 434.74,
        lastAnnualDividend: 2.72,
        volume: 1927980,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#3366E6',
        change: -3.79,
      },
      {
        symbol: 'AMAT',
        companyName: 'Applied Materials, Inc.',
        marketCap: 88447508480,
        sector: 'Technology',
        industry: 'Semiconductor Equipment & Materials',
        beta: 1.5032,
        price: 101.67,
        lastAnnualDividend: 0.98,
        volume: 7947496,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#999966',
        change: -13.9,
      },
      {
        symbol: 'ADI',
        companyName: 'Analog Devices, Inc.',
        marketCap: 84868726784,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.0932,
        price: 163.27,
        lastAnnualDividend: 2.9,
        volume: 3462025,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#FF99E6',
        change: -0.63,
      },
      {
        symbol: 'MU',
        companyName: 'Micron Technology, Inc.',
        marketCap: 67612061696,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.278,
        price: 61.29,
        lastAnnualDividend: 0.415,
        volume: 18679987,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#4DB380',
        change: 6.93,
      },
      {
        symbol: 'LRCX',
        companyName: 'Lam Research Corporation',
        marketCap: 64362377216,
        sector: 'Technology',
        industry: 'Semiconductor Equipment & Materials',
        beta: 1.3227,
        price: 463.99,
        lastAnnualDividend: 6,
        volume: 1328983,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#991AFF',
        change: -8.34,
      },
      {
        symbol: 'SNPS',
        companyName: 'Synopsys, Inc.',
        marketCap: 51709980672,
        sector: 'Technology',
        industry: 'Software—Infrastructure',
        beta: 1.1728,
        price: 338.04,
        lastAnnualDividend: 0,
        volume: 946356,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#3366E6',
        change: -2.49,
      },
      {
        symbol: 'PANW',
        companyName: 'Palo Alto Networks, Inc.',
        marketCap: 51277508608,
        sector: 'Technology',
        industry: 'Software—Infrastructure',
        beta: 1.2422,
        price: 511.17,
        lastAnnualDividend: 0,
        volume: 1604406,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#1AFF33',
        change: 11.6,
      },
      {
        symbol: 'TEAM',
        companyName: 'Atlassian Corporation Plc',
        marketCap: 51272818688,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.0051,
        price: 202.27,
        lastAnnualDividend: 0,
        volume: 2098253,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'GB',
        isEtf: false,
        isActivelyTrading: true,
        color: '#66994D',
        change: -9.1,
      },
      {
        symbol: 'KLAC',
        companyName: 'KLA Corporation',
        marketCap: 50513694720,
        sector: 'Technology',
        industry: 'Semiconductor Equipment & Materials',
        beta: 1.2874,
        price: 354.02,
        lastAnnualDividend: 4.2,
        volume: 1464740,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#FF6633',
        change: -4.57,
      },
      {
        symbol: 'FTNT',
        companyName: 'Fortinet, Inc.',
        marketCap: 49145405440,
        sector: 'Technology',
        industry: 'Software—Infrastructure',
        beta: 1.1809,
        price: 61.23,
        lastAnnualDividend: 0,
        volume: 6486682,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#66991A',
        change: -5.48,
      },
      {
        symbol: 'CDNS',
        companyName: 'Cadence Design Systems, Inc.',
        marketCap: 46247546880,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.0915,
        price: 167.71,
        lastAnnualDividend: 0,
        volume: 1606908,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#00B3E6',
        change: 7.02,
      },
      {
        symbol: 'NXPI',
        companyName: 'NXP Semiconductors N.V.',
        marketCap: 45985632256,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.4202,
        price: 175.14,
        lastAnnualDividend: 2.816,
        volume: 3133038,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'NL',
        isEtf: false,
        isActivelyTrading: true,
        color: '#B34D4D',
        change: 4.92,
      },
      {
        symbol: 'MRVL',
        companyName: 'Marvell Technology, Inc.',
        marketCap: 44211798016,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.3768,
        price: 52.02,
        lastAnnualDividend: 0.24,
        volume: 10420301,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'BM',
        isEtf: false,
        isActivelyTrading: true,
        color: '#FF1A66',
        change: 8.58,
      },
      {
        symbol: 'CRWD',
        companyName: 'CrowdStrike Holdings, Inc.',
        marketCap: 42592174080,
        sector: 'Technology',
        industry: 'Software—Infrastructure',
        beta: 1.3205,
        price: 183.53,
        lastAnnualDividend: 0,
        volume: 4476183,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#6680B3',
        change: 5.26,
      },
      {
        symbol: 'ADSK',
        companyName: 'Autodesk, Inc.',
        marketCap: 42574446592,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.4606,
        price: 195.95,
        lastAnnualDividend: 0,
        volume: 1831274,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#3366E6',
        change: -8.32,
      },
      {
        symbol: 'WDAY',
        companyName: 'Workday, Inc.',
        marketCap: 37591998464,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.3946,
        price: 148,
        lastAnnualDividend: 0,
        volume: 3292940,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#99E6E6',
        change: 8.49,
      },
      {
        symbol: 'CTSH',
        companyName: 'Cognizant Technology Solutions Corporation',
        marketCap: 36013125632,
        sector: 'Technology',
        industry: 'Information Technology Services',
        beta: 1.106,
        price: 69.1,
        lastAnnualDividend: 1.02,
        volume: 3313312,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#FF99E6',
        change: -4.49,
      },
      {
        symbol: 'MCHP',
        companyName: 'Microchip Technology Incorporated',
        marketCap: 35756761088,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.5951,
        price: 64.72,
        lastAnnualDividend: 0.9795,
        volume: 5071309,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#999966',
        change: -10.4,
      },
      {
        symbol: 'DDOG',
        companyName: 'Datadog, Inc.',
        marketCap: 29545443328,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.2044,
        price: 93.79,
        lastAnnualDividend: 0,
        volume: 5827095,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#E64D66',
        change: -5.02,
      },
      {
        symbol: 'ENPH',
        companyName: 'Enphase Energy, Inc.',
        marketCap: 28563822592,
        sector: 'Technology',
        industry: 'Solar',
        beta: 1.3572,
        price: 211.54,
        lastAnnualDividend: 0,
        volume: 2779429,
        exchange: 'NASDAQ Global Market',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#4DB3FF',
        change: 4.36,
      },
      {
        symbol: 'MXIM',
        companyName: 'Maxim Integrated Products, Inc.',
        marketCap: 27699898368,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.1657,
        price: 103.14,
        lastAnnualDividend: 0.48,
        volume: 3254521,
        exchange: 'Nasdaq Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: false,
        color: '#FFFF99',
        change: -11.6,
      },
      {
        symbol: 'ON',
        companyName: 'ON Semiconductor Corporation',
        marketCap: 25818345472,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.742,
        price: 59.42,
        lastAnnualDividend: 0,
        volume: 8896404,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#66664D',
        change: 12.1,
      },
      {
        symbol: 'TTD',
        companyName: 'The Trade Desk, Inc.',
        marketCap: 22988630016,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 2.1724,
        price: 47.27,
        lastAnnualDividend: 0,
        volume: 6605651,
        exchange: 'NASDAQ Global Market',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#4DB380',
        change: 14.3,
      },
      {
        symbol: 'CDW',
        companyName: 'CDW Corporation',
        marketCap: 22983231488,
        sector: 'Technology',
        industry: 'Information Technology Services',
        beta: 1.0996,
        price: 170.1,
        lastAnnualDividend: 1.9,
        volume: 787598,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#FFB399',
        change: 4.8,
      },
    ],
    [
      {
        symbol: 'ZS',
        companyName: 'Zscaler, Inc.',
        marketCap: 22688149504,
        sector: 'Technology',
        industry: 'Software—Infrastructure',
        beta: 1.09,
        price: 159.93,
        lastAnnualDividend: 0,
        volume: 2483098,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#B34D4D',
        change: -2.02,
      },
      {
        symbol: 'ANSS',
        companyName: 'ANSYS, Inc.',
        marketCap: 22632214528,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.2652,
        price: 260.17,
        lastAnnualDividend: 0,
        volume: 546346,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#FFB399',
        change: 3.25,
      },
      {
        symbol: 'MPWR',
        companyName: 'Monolithic Power Systems, Inc.',
        marketCap: 20356870144,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.0579,
        price: 436.44,
        lastAnnualDividend: 2.7,
        volume: 485390,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#E666B3',
        change: -6.29,
      },
      {
        symbol: 'NUAN',
        companyName: 'Nuance Communications, Inc.',
        marketCap: 17882421248,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.0871,
        price: 55.99,
        lastAnnualDividend: 0,
        volume: 5693606,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: false,
        color: '#66E64D',
        change: -0.29,
      },
      {
        symbol: 'ZBRA',
        companyName: 'Zebra Technologies Corporation',
        marketCap: 17155208192,
        sector: 'Technology',
        industry: 'Communication Equipment',
        beta: 1.6066,
        price: 326.68,
        lastAnnualDividend: 0,
        volume: 484737,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#66994D',
        change: 4.39,
      },
      {
        symbol: 'SWKS',
        companyName: 'Skyworks Solutions, Inc.',
        marketCap: 17069420544,
        sector: 'Technology',
        industry: 'Semiconductors',
        beta: 1.1639,
        price: 106.07,
        lastAnnualDividend: 2.24,
        volume: 2214617,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#999933',
        change: 10,
      },
      {
        symbol: 'SPLK',
        companyName: 'Splunk Inc.',
        marketCap: 16931507200,
        sector: 'Technology',
        industry: 'Software—Infrastructure',
        beta: 1.3465,
        price: 105.23,
        lastAnnualDividend: 0,
        volume: 2096296,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#4D80CC',
        change: -10.9,
      },
      {
        symbol: 'STX',
        companyName: 'Seagate Technology Holdings plc',
        marketCap: 16506465280,
        sector: 'Technology',
        industry: 'Computer Hardware',
        beta: 1.0698,
        price: 76.83,
        lastAnnualDividend: 2.77,
        volume: 2026266,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'IE',
        isEtf: false,
        isActivelyTrading: true,
        color: '#66664D',
        change: -2.14,
      },
      {
        symbol: 'TER',
        companyName: 'Teradyne, Inc.',
        marketCap: 16093993984,
        sector: 'Technology',
        industry: 'Semiconductor Equipment & Materials',
        beta: 1.5287,
        price: 100.46,
        lastAnnualDividend: 0.42,
        volume: 1777772,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#ff453b',
        change: -2.28,
      },
      {
        symbol: 'OKTA',
        companyName: 'Okta, Inc.',
        marketCap: 16085569536,
        sector: 'Technology',
        industry: 'Software—Infrastructure',
        beta: 1.0519,
        price: 101.95,
        lastAnnualDividend: 0,
        volume: 3156891,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#FF3380',
        change: 5.17,
      },
      {
        symbol: 'SEDG',
        companyName: 'SolarEdge Technologies, Inc.',
        marketCap: 16003052544,
        sector: 'Technology',
        industry: 'Solar',
        beta: 1.0583,
        price: 288.93,
        lastAnnualDividend: 0,
        volume: 845361,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'IL',
        isEtf: false,
        isActivelyTrading: true,
        color: '#B34D4D',
        change: 11.9,
      },
      {
        symbol: 'SSNC',
        companyName: 'SS&C Technologies Holdings, Inc.',
        marketCap: 15997699072,
        sector: 'Technology',
        industry: 'Software—Application',
        beta: 1.5292,
        price: 62.79,
        lastAnnualDividend: 1.0026,
        volume: 1591993,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#B366CC',
        change: -1.94,
      },
      {
        symbol: 'TRMB',
        companyName: 'Trimble Inc.',
        marketCap: 15796467712,
        sector: 'Technology',
        industry: 'Scientific & Technical Instruments',
        beta: 1.5411,
        price: 63.15,
        lastAnnualDividend: 0,
        volume: 1137414,
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        country: 'US',
        isEtf: false,
        isActivelyTrading: true,
        color: '#66994D',
        change: 6.85,
      },
    ],
  ]
  const colorArray = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#ff453b',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ]
  // const stocks2 = stocks[0].map((stock) => ({
  //   ...stock,
  //   change:
  //     Math.random() > 0.5
  //       ? +(Math.random() * 15).toString().slice(0, 4)
  //       : -(Math.random() * 15).toString().slice(0, 4),
  // }))
  // console.log(stocks2)
  return (
    <div className="relative flex w-full flex-col space-y-4 lg:max-w-[1024px]  ">
      <div className="text-xl  text-[#243342]">
        <p>Discover more</p>
      </div>
      <p className="text-sm ">You may be interested in</p>
      <div className="flex h-56 flex-wrap items-center overflow-hidden overflow-x-scroll scrollbar-hide   ">
        <button className="l absolute top-[28%] left-[-12px] z-50 flex h-10 w-10 items-center  justify-center rounded-full bg-white ">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className={`flex space-x-3 `}>
          {stocks[0].map(({ symbol, price, companyName, color, change }) => (
            <div key={symbol} className="">
              <StockSqure
                change={change}
                name={symbol}
                price={price}
                color={color}
                fullName={companyName}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm ">Recently searched</p>
      <div className="flex h-56 flex-wrap items-center overflow-hidden overflow-x-scroll  scrollbar-hide   ">
        <button
          onClick={() => setTranslate(translate - 20)}
          className="absolute top-[28%] left-[-12px] z-50 flex h-10 w-10 items-center justify-center  rounded-full bg-white "
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className={`flex space-x-3 `}>
          {stocks[1].map(({ symbol, price, companyName, color, change }) => (
            <div key={symbol} className="">
              <StockSqure
                change={change}
                name={symbol}
                price={price}
                color={color}
                fullName={companyName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiscoverMore