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
    createBookModalOpen: false,
  }

  createBookHandler = (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value
    };
    const ID = new Date() + e.target.author.value + e.target.title.value;
    this.setState(prevState => {
      const booksCopy = {...prevState.books};
      booksCopy[ID] = newBook;

      return {
        books: booksCopy
      }
    });
    this.closeCreateBookModal();
  }

  openCreateBookModal = () => {
    this.setState({ createBookModalOpen: true });
  }

  closeCreateBookModal = () => {
    this.setState({ createBookModalOpen: false });
  }

  render() {
    return (
      <div className={classes.BookContainer}>
        <div 
          className={classes.CreateBookButton}
          onClick={this.openCreateBookModal}>Add Book</div>
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