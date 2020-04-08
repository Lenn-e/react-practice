import React from 'react';

import classes from './CreateBookModal.module.css';

const CreateBookModal = (props) => {
  const modalClasses = [classes.CreateBookModal];
  const backdropClasses = [classes.Backdrop];
  if(!props.isOpen) {
    modalClasses.push(classes.hidden);
    backdropClasses.push(classes.hidden);
  }

  return (
    <React.Fragment>
      <div 
        className={backdropClasses.join(" ")}
        onClick={props.closeModal}></div>
      <div className={modalClasses.join(" ")}>
        <h2>Add new book</h2>
        <form onSubmit={props.createBook}>
          <label>Title</label>
          <input type="text" name="title" maxlength="30"/>
          <label>Author</label>
          <input type="text" name="author" maxlength="30"/>
          <label>Number of pages</label>
          <input type="text" name="pages" pattern="\d*" maxlength="4"/>
          <button>Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateBookModal;