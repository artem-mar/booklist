/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: JSON.parse(localStorage.getItem('books')) || [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    deleteBook: (state, { payload }) => {
      state.books = state.books.filter((b) => b.id !== payload);
    },
    setBooks: (state, { payload }) => {
      state.books = payload;
    },
  },
});

export const { actions } = booksSlice;
export default booksSlice.reducer;
