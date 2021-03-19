import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  selectBalance,
} from './balanceSlice'

function Balance() {
  const balance = useSelector(selectBalance)
  const dispatch = useDispatch()
  const [incrementAmount, setincrementAmount] = useState(500)
  console.log(typeof incrementAmount)

  return (
    <>
      <span class="text-white text-6xl">${balance}</span>
      <div class="flex gap-4 justify-center my-4">
        <button
          class="text-white py-1 px-3 border-2 rounded-md border-green-500 bg-green-600"
          onClick={() => dispatch(increment())}
        >
          Quick Deposit $100
        </button>
        <button
          class="text-white py-1 px-3 border-2 rounded-md border-red-500 bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          Quick Withdrawl $100
        </button>
      </div>
      <div>
        <input
          class="p-2 rounded-md w-full"
          type="number"
          value={incrementAmount}
          onChange={(e) => setincrementAmount(e.target.value)}
        />
        <button
          class="text-white"
          onClick={() => dispatch(incrementByAmount(+incrementAmount || 0))}
        >
          💰 Add to Balance
        </button>
      </div>
    </>
  )
}

export default Balance
