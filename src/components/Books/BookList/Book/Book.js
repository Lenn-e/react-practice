import React from 'react';

import classes from './Book.module.css';

const Book = (props) => {
  const readStatusClasses = [classes.ReadStatus, classes.Button];
  if(props.isRead) readStatusClasses.push(classes.read);
  else readStatusClasses.push(classes.unread);

  return (
    <div className={classes.Book}>
      <h3 style={{fontSize: "26px"}}>{props.title}</h3>
      <h4 style={{fontSize: "18px"}}>{props.author}</h4>
      <p style={{fontSize: "12px"}}>Pages: {props.pages}</p>
      <div className={classes.Buttons}>
        <div 
          className={readStatusClasses.join(" ")}
          onClick={() => props.toggleRead(props.id)}>Read: {props.isRead ? "✓" : "x"}</div>
        <div 
          className={classes.Button + " " + classes.DeleteButton}
          onClick={() => props.deleteBook(props.id)}>Delete</div>
      </div>
    </div>
  );
};

export default Book;