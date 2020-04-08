import React from 'react';

import classes from './BookList.module.css';
import Book from './Book/Book';

const BookList = (props) => {
  let books = Object.keys(props.books)
    .map((bookID, idx) => {
      const book = props.books[bookID];
      return (
        <Book
          key={bookID}
          id={bookID}
          title={book.title} 
          author={book.author}
          pages={book.pages}
          isRead={book.isRead}
          toggleRead={props.toggleRead}
          deleteBook={props.deleteBook} />
      );
    });

  return (
    <div className={classes.BookList}>
      {books}
    </div>
  );
};

export default React.memo(BookList);