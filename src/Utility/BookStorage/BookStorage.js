let bookStorage;
if(localStorage.length < 1) {
  bookStorage = {
    1: {title: "Dune", author: "Frank Herbert", pages: "634", isRead: false},
    2: {title: "Sample Book", author: "Sample Guy", pages: "432", isRead: false},
    3: {title: "Test Book", author: "Tester", pages: "564", isRead: false}
  };
  for(let key of Object.keys(bookStorage)) {
    localStorage.setItem(key, JSON.stringify(bookStorage[key]));
  }
} else {
  bookStorage = {};
  for(let key of Object.keys(localStorage)) {
    bookStorage[key] = JSON.parse(localStorage[key]);
  }
}

function addBookToLocalStorage(book, id) {
  localStorage.setItem(id, JSON.stringify(book));
}

function removeBookFromLocalStorage(id) {
  localStorage.removeItem(id);
}

export { bookStorage, addBookToLocalStorage, removeBookFromLocalStorage };