import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Book } from '@/models/book'
import { BOOK_DATA } from '@/constants'

// Define a type for the slice state
interface BooksState {
  books: Book[]
}

// Define the initial state using that type
const initialState: BooksState = {
  books: BOOK_DATA,
}

export const BookSlice = createSlice({
  name: 'book',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    decrement: (state, action: PayloadAction<number>) => {
      state.books.splice(action.payload, 1)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addByPayload: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload)
    },
    update: (state, action: PayloadAction<any>) => {
      state.books.splice(action.payload.index, 1, action.payload.item)
    },
  },
})

export const { decrement, addByPayload, update } = BookSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.books

export default BookSlice.reducer
