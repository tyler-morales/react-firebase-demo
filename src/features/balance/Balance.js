import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  selectBalance,
} from './balanceSlice'

function Balance() {
  // use local storage for balance
  // let totalBalance = localStorage.getItem('amount') || 0
  const balance = useSelector(selectBalance)
  const dispatch = useDispatch()
  const [incrementAmount, setincrementAmount] = useState(500)

  const updateText = () => {
    return incrementAmount > 0
      ? '💰 Add to Balance'
      : '🚰  Subtract from Balance'
  }
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
      <div class="flex gap-4 justify-center items-center text-center m-auto">
        <input
          class="p-2 rounded-md w-36 text-2xl"
          type="number"
          value={incrementAmount}
          onChange={(e) => setincrementAmount(e.target.value)}
        />
        <button
          className={
            incrementAmount > 0
              ? 'text-white border-2 border-green-500 p-3 rounded-md w-1/2 bg-green-600'
              : 'text-white border-2 border-red-500 p-3 rounded-md w-1/2 bg-red-600'
          }
          onClick={() => dispatch(incrementByAmount(+incrementAmount || 0))}
        >
          {updateText()}
        </button>
      </div>
    </>
  )
}

export default Balance
