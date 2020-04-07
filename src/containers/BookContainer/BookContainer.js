import React, { Component } from 'react';

import classes from './BookContainer.module.css';
import BookList from '../../components/Books/BookList/BookList';
import CreateBookModal from '../../components/Books/CreateBookModal/CreateBookModal';

class BookContainer extends Component {
  state = {
    books: {
      1: {title: "Dune", author: "Frank Herbert"},
      2: {title: "Supreme Book", author: "Supreme"},
      3: {title: "Test Book", author: "Tester"}
    },
    createBookModalOpen: true,
  }

  createBookHandler = (e) => {
    e.preventDefault();
    console.log('oyou')
  }

  closeCreateBookModal = () => {
    this.setState({ createBookModalOpen: false });
  }

  render() {
    return (
      <div className={classes.BookContainer}>
        <BookList books={this.state.books} />
        <CreateBookModal 
          createBook={this.createBookHandler}
          isOpen={this.state.createBookModalOpen}
          closeModal={this.closeCreateBookModal} />
      </div>
    );
  }
}

export default BookContainer;