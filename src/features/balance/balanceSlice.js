import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'balance',
  initialState: {
    amount: 0,
  },
  reducers: {
    increment: (state) => {
      state.amount += 100
    },
    decrement: (state) => {
      state.amount -= 100
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = slice.actions
export const selectBalance = (state) => state.balance.amount
export default slice.reducer
