import { useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
export const useFetch = (url) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        if (url.includes('https://newsapi.org')) {
          setData(json.articles)
        } else {
          setData(json)
        }
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])
  return {
    data,
  }
}

export const getUserData = (db) => {
  const [data, setData] = useState(null)
  useEffect(
    () =>
      onSnapshot(collection(db, 'watchlist'), (snapshot) => {
        setData(snapshot.docs.map((ticker) => ticker.data()))
      }),
    []
  )

  return {
    data,
  }
}

export const setUserData = async (db, name, following, fullName) => {
  if (following >= 0 && name) {
    await deleteDoc(doc(db, 'watchlist', name))
  } else {
    await setDoc(doc(db, 'watchlist', name), {
      ticker: name.toLocaleUpperCase(),
      desc: fullName,
    })
  }
}
export const createProtfolio = async (db, userName, portfolioName, uid) => {
  if (!uid) return
  await addDoc(collection(db, uid, 'portfolios', portfolioName), {})
}
export const getUserProtfolios = (db) => {
  const [data, setData] = useState(null)
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'portfolios')), (snapshot) => {
        setData(snapshot.docs)
      }),
    [db]
  )
  return {
    data,
  }
}
export const deleteStockFromPortfolio = (db, uid, portfolio) => {
  const ref = doc(db, 'portfolios', uid)
  updateDoc(ref, {
    symbols: [...portfolio?.symbols, { ...data, totalCost }],
  })
}
