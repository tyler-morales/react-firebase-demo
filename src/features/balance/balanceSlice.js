import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'balance',
  initialState: {
    amount: 0,
  },
  reducers: {
    increment: (state) => {
      state.amount += 100
      // localStorage.setItem('amount', state.amount) // sets local storage
    },
    decrement: (state) => {
      state.amount -= 100
      // localStorage.setItem('amount', state.amount) // sets local storage
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
      // localStorage.setItem('amount', state.amount) // sets local storage
    },
  },
})

export const { increment, decrement, incrementByAmount } = slice.actions
export const selectBalance = (state) => state.balance.amount
export default slice.reducer
