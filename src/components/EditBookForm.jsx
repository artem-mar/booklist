import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices/booksSlice.js';

const EditBookForm = ({ close, editedBook }) => {
  const dispatch = useDispatch();
  const titleField = useRef(null);
  const [bookTitle, setBooktitle] = useState(editedBook.bookTitle);
  const [author, setAuthor] = useState(editedBook.author);
  const [file, setFile] = useState(null);
  const books = useSelector((state) => state.booklist.books);

  useEffect(() => {
    titleField.current.select();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const currentBook = {
      author,
      bookTitle,
      id: editedBook.id,
      file: file || editedBook.file,
    };
    const updatedBooks = books.map((b) => (b.id === currentBook.id ? currentBook : b));
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    dispatch(actions.setBooks(updatedBooks));
    close();
  };

  const handleImgLoad = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  return (
    <Form className="w-100" onSubmit={submit}>
      <Form.Group className="flex-fill mb-2" controlId="bookTitle">
        <Form.Label className="mb-0"><small>Название книги</small></Form.Label>
        <Form.Control
          ref={titleField}
          required
          value={bookTitle}
          onChange={(e) => setBooktitle(e.target.value)}
          type="text"
          placeholder="Название книги"
          className="form-control-sm"
        />
      </Form.Group>

      <Form.Group className="flex-fill mb-1" controlId="author">
        <Form.Label className="mb-0"><small>Автор книги</small></Form.Label>
        <Form.Control
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Автор"
          className="form-control-sm"
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formFile">
        <Form.Label className="mb-0"><small>Обложка</small></Form.Label>
        <Form.Control
          type="file"
          onChange={handleImgLoad}
          accept=".svg, .jpg, .jpeg, .png, .gif, .webp"
          className="form-control-sm"
        />
      </Form.Group>

      <ButtonGroup className="w-100 gap-2">
        <Button className="btn-sm" variant="secondary" onClick={close}>
          Отмена
        </Button>
        <Button className="btn-sm" variant="primary" type="submit">
          Принять
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default EditBookForm;
