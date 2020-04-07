import React from 'react';

import classes from './BookList.module.css';
import Book from './Book/Book';

const BookList = (props) => {
  return (
    <div>
      <Book />
      <Book />
    </div>
  );
};

export default BookList;