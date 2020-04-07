import React from 'react';

import classes from './BookList.module.css';
import Book from './Book/Book';

const BookList = (props) => {
  let books = Object.keys(props.books)
    .map((book, idx) => {
      book = props.books[book];
      return (
        <Book
          key={idx+book.title}
          title={book.title} 
          author={book.author} />
      );
    });

  return (
    <div className={classes.BookList}>
      {books}
    </div>
  );
};

export default BookList;