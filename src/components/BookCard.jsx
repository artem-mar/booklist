import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/booksSlice.js';
import EditBookForm from './EditBookForm.jsx';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState(false);
  const {
    id, bookTitle, author, file,
  } = book;

  const books = useSelector((state) => state.booklist.books);
  const handleDeleteBook = () => {
    dispatch(actions.deleteBook(id));
    const filteredBooks = books.filter((b) => b.id !== id);
    localStorage.setItem('books', JSON.stringify(filteredBooks));
  };

  return (
    <div className="d-flex bg-light">
      <img alt="book cover" src={file} style={{ width: '145px', height: '205px' }} />
      {isEdit ? (
        <div className="container d-flex align-items-center">
          <EditBookForm editedBook={book} close={() => setEdit(false)} />
        </div>
      ) : (
        <div className="container d-flex flex-column justify-content-between py-2">
          <div className="row">
            <span className="fs-4 lh-sm fw-normal">{bookTitle}</span>
            <span className="fs-5 fw-light">{author}</span>
          </div>
          <div className="row gap-2 px-3">
            <Button className="col btn-sm" variant="outline-primary" onClick={() => setEdit(true)}>
              Редактировать
            </Button>
            <Button className="col btn-sm" variant="outline-danger" onClick={handleDeleteBook}>
              Удалить
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
