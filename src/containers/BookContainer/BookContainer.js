import React, { Component } from 'react';

import classes from './BookContainer.module.css';
import BookList from '../../components/Books/BookList/BookList';
import CreateBookModal from '../../components/Books/CreateBookModal/CreateBookModal';
import {bookStorage, addBookToLocalStorage, removeBookFromLocalStorage} from '../../Utility/BookStorage/BookStorage';


class BookContainer extends Component {
  state = {
    books: bookStorage,
    createBookModalOpen: false,
  }

  createBookHandler = (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      pages: e.target.pages.value,
      isRead: false
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
    addBookToLocalStorage(newBook, ID);
  }

  openCreateBookModal = () => {
    this.setState({ createBookModalOpen: true });
  }

  closeCreateBookModal = () => {
    this.setState({ createBookModalOpen: false });
  }

  toggleBookReadStatusHandler = (bookID) => {
    this.setState((prevState) => {
      const booksClone = JSON.parse(JSON.stringify(this.state.books));
      booksClone[bookID].isRead = !booksClone[bookID].isRead;

      return {
        books: booksClone,
      }
    });
  }

  deleteBookHandler = (bookID) => {
    const booksClone = JSON.parse(JSON.stringify(this.state.books));
    delete booksClone[bookID];

    this.setState({
      books: booksClone
    });

    removeBookFromLocalStorage(bookID);
  }

  render() {
    return (
      <div className={classes.BookContainer}>
        <div 
          className={classes.CreateBookButton}
          onClick={this.openCreateBookModal}>Add Book</div>
        <BookList 
          books={this.state.books}
          toggleRead={this.toggleBookReadStatusHandler}
          deleteBook={this.deleteBookHandler} />
        <CreateBookModal 
          createBook={this.createBookHandler}
          isOpen={this.state.createBookModalOpen}
          closeModal={this.closeCreateBookModal} />
      </div>
    );
  }
}

export default BookContainer;