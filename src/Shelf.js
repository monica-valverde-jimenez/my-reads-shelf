import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const Shelf = ({ header, booksList, onSelect }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{header}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {booksList.map((book, index) => (
          <li key={`title-${index}`}>
            <Book
              title={book.title}
              authors={book.authors}
              id={book.id}
              imageLinks={book.imageLinks}
              onSelect={onSelect}
              shelf={book.shelf}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

Shelf.propTypes = {
  header: PropTypes.string,
  booksList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.array,
      id: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
        thumbnail: PropTypes.string,
      }),
      shelf: PropTypes.number,
    })
  ),
  onSelect: PropTypes.func.isRequired,
};

Shelf.defaultProps = {
  booksList: [],
};

export default Shelf;
