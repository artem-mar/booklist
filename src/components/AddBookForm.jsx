import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices/booksSlice.js';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBooktitle] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const books = useSelector((state) => state.booklist.books);

  const submit = (e) => {
    e.preventDefault();
    const book = {
      id: Date.now(),
      author,
      bookTitle,
      file,
    };
    localStorage.setItem('books', JSON.stringify([...books, book]));
    dispatch(actions.addBook(book));
    setBooktitle('');
    setAuthor('');
    e.target.reset();
  };

  const handleImgLoad = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Form onSubmit={submit}>
      <Form.Group className="flex-fill mb-2" controlId="bookTitle">
        <Form.Control
          required
          value={bookTitle}
          onChange={(e) => setBooktitle(e.target.value)}
          type="text"
          placeholder="Название книги"
          className="form-control"
        />
      </Form.Group>

      <Form.Group className="flex-fill mb-1" controlId="author">
        <Form.Control
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Автор"
          className="form-control"
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formFile">
        <Form.Label>Обложка книги</Form.Label>
        <Form.Control
          type="file"
          onChange={handleImgLoad}
          accept=".svg, .jpg, .jpeg, .png, .gif"
          className="form-control-sm"
        />
      </Form.Group>

      <Button className="w-100 btn-sm" variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
};

export default AddBookForm;
