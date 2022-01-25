/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookItem from './components/BookItem';

function App() {

  const [books, setBooks] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "JavaScript for Dummies",
      price: 15000,
      type: "Logic"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Bootstrap for Dummies",
      price: 35000,
      type: "Logic"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Express for Dummies",
      price: 50000,
      type: "Logic"
    }
  ]);

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-12 text-center">
          <h1>List Books</h1>
        </div>
        <div className="row">
            {
              books.map(book => {
                return (
                  <BookItem book={book} />
                );
              })
            };
        </div>
      </div>
    </div>
  );
};

export default App;
