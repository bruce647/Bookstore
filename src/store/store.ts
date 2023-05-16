import { configureStore } from '@reduxjs/toolkit'
import { BookSlice } from './features/bookSlice'

export const store = configureStore({
  reducer: {
    books: BookSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
