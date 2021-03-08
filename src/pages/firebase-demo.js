import { useEffect, useState } from 'react'
import { balanceCollection } from '../firebase'
// import loadData from '../data/load-data'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

function FirebaseDemo() {
  const [balance, setBalance] = useState([])
  useEffect(() => {
    const getBalance = async () => {
      try {
        const snapshot = await balanceCollection.get()
        const docs = snapshot.docs
        setBalance(docs)
      } catch (err) {
        console.log(err)
      }
    }
    getBalance()
  }, [])

  let total = balance.map((balanceDoc) => {
    const data = balanceDoc.data()
    return data
  })

  let sorted = total.sort((a, b) => a.index - b.index)

  // total.sort((a, b) => a.index - b.index)
  // console.log(total)

  // const addBalance = async () => {
  //   try {
  //     const doc = balanceCollection.add({
  //       month: 'May',
  //       balance: 1750,
  //     })
  //     console.log(doc.path)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  return (
    <div class="h-80">
      <h1 class="my-4 text-3xl text-white">🔥 Firebase</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={sorted}
          margin={{
            top: 5,
            right: 60,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <div class="flex gap-6 justify-center mt-4">
        <button class="p-2 rounded-md border-2 border-blue-400 text-blue-400 w-48">
          Add May's Balance
        </button>
        <button class="p-2 rounded-md border-2 border-blue-400 text-blue-400 w-48">
          Load Data
        </button>
      </div>
      {/* <ul>
        {balance.map((balanceDoc) => {
          const id = balanceDoc.id
          const data = balanceDoc.data()

          return (
            <li key={id} class="text-white">
              <span>{data.month}</span> | <span>{data.amount}</span>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default FirebaseDemo
