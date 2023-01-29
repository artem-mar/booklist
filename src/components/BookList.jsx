import React from 'react';
import { useSelector } from 'react-redux';
// import { ListGroup } from 'react-bootstrap';
import BookCard from './BookCard.jsx';

const BookList = () => {
  const books = useSelector((state) => state.booklist.books);
  // <ListGroup className="w-75 mx-auto" variant="flush">
  //   {books.map((book) => (
  //     <ListGroup.Item key={book.id} className="px-0">
  //       <BookCard book={book} />
  //     </ListGroup.Item>
  //   ))}
  // </ListGroup>
  return (

    <div className="container-sm">
      <div className="row g-3">
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
