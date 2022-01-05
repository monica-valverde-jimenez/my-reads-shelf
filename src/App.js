import React from 'react';
import './App.css';
import Search from './Search';
import BookShelf from './BookShelf';
import { Route } from 'react-router-dom';

import * as BooksAPI from './utils/BooksAPI';

class BooksApp extends React.Component {
  state = {
    booksList: [],
    searchResults: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((data) =>
      this.setState(() => ({
        booksList: data,
      }))
    );
  }

  onSelect = (event) => {
    const value = event.currentTarget.value;
    const result = value.split('|');
    const action = result[0];
    const id = result[1];
    switch (action) {
      case 'read':
      case 'wantToRead':
      case 'currentlyReading':
        BooksAPI.update({ id }, action).then(() =>
          this.setState((prevState) => {
            const bookIndex = prevState.booksList.findIndex(
              (item) => item.id === id
            );
            const bookListUpdate = prevState.booksList || [];
            if (bookIndex === -1) {
              const newIndex = prevState.searchResults.findIndex(
                (item) => item.id === id
              );
              const newBook = prevState.searchResults[newIndex];
              newBook.shelf = action;
              bookListUpdate.push(newBook);
            } else {
              bookListUpdate[bookIndex].shelf = action;
            }
            return {
              booksList: bookListUpdate,
            };
          })
        );
        break;
      default:
        break;
    }
  };

  onSearch = (value) => {
    if (value.length === 0) {
      this.setState(() => ({
        searchResults: [],
      }));
      return;
    }
    BooksAPI.search(value).then((result) => {
      let searchResults = [];
      if (!result.error) {
        searchResults = result.map((book) => {
          const currentBook = this.state.booksList.findIndex(
            (item) => item.id === book.id
          );
          if (currentBook !== -1) {
            book.shelf = this.state.booksList[currentBook].shelf;
          }
          return book;
        });
      }
      this.setState(() => ({ searchResults }));
    });
  };

  onClose = () => this.setState({ searchResults: [] });

  renderSearch = () => (
    <Search
      onSearch={this.onSearch}
      booksList={this.state.booksList}
      searchResults={this.state.searchResults}
      onSelect={this.onSelect}
      onClose={this.onClose}
    />
  );

  renderMain = () => (
    <BookShelf booksList={this.state.booksList} onSelect={this.onSelect} />
  );

  render() {
    return (
      <div className="app">
        <Route path="/search" render={this.renderSearch} />
        <Route exact path="/" render={this.renderMain} />
      </div>
    );
  }
}

export default BooksApp;
