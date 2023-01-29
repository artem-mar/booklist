import React from 'react';
import AddBookForm from './components/AddBookForm';
import Collapse from './components/Collapse';
import BookList from './components/BookList';

const App = () => (
  <main className="container-md py-4">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <Collapse>
          <AddBookForm />
        </Collapse>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <BookList />
      </div>
    </div>
  </main>
);

export default App;
