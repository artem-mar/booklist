import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard.jsx';

const BookList = () => {
  const books = useSelector((state) => state.booklist.books);

  return (

    <div className="container-fluid">
      <div className="row g-3 justify-content-start">
        {books.map((book) => (
          <div key={book.id} className="col-12 col-lg-6">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
