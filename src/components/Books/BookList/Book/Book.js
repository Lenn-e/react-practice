import React from 'react';

import classes from './Book.module.css';

const Book = (props) => {
  return (
    <div className={classes.Book}>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
    </div>
  );
};

export default Book;