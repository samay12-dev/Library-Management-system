import { configureStore, createSlice } from '@reduxjs/toolkit'

const booksSlice = createSlice({
  name: 'books',
  initialState: { items: [] },
  reducers: {
    addBook(state, action) {
      const exists = state.items.find(b => b.id === action.payload.id)
      if (!exists) state.items.push(action.payload)
    },
    removeBook(state, action) {
      state.items = state.items.filter(b => b.id !== action.payload)
    },
    clearBooks(state) {
      state.items = []
    }
  }
})

export const { addBook, removeBook, clearBooks } = booksSlice.actions

const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
})

export default store
