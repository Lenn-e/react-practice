import React, { Component } from 'react';

import classes from './BookContainer.module.css';
import BookList from '../../components/Books/BookList/BookList';

class BookContainer extends Component {
  state = {
    books: {
      1: {title: "Dune", author: "Frank Herbert"},
      2: {title: "Supreme Book", author: "Supreme"},
      3: {title: "Test Book", author: "Tester"}
    }
  }

  render() {
    return (
      <div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BookContainer;