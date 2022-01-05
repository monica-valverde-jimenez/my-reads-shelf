import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Shelf from './Shelf';

const shelfType = ['currentlyReading', 'wantToRead', 'read'];

const BookShelf = (props) => {
  const { booksList, onSelect } = props;
  const currentlyReading =
    booksList.filter((book) => book.shelf === shelfType[0]) || [];
  const wantToRead =
    booksList.filter((book) => book.shelf === shelfType[1]) || [];
  const read = booksList.filter((book) => book.shelf === shelfType[2]) || [];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            header="Currently Reading"
            booksList={currentlyReading}
            onSelect={onSelect}
          />
          <Shelf
            header="Want to Read"
            booksList={wantToRead}
            onSelect={onSelect}
          />
          <Shelf header="Read" booksList={read} onSelect={onSelect} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  booksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      authors: PropTypes.array,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
        thumbnail: PropTypes.string,
      }),
    })
  ),
  onSelect: PropTypes.func.isRequired,
};

export default BookShelf;
