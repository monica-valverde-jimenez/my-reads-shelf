import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Shelf from './Shelf';
import { SHELVES } from './utils/Constants';

const BookShelf = (props) => {
  const { booksList, onSelect } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {SHELVES
            .filter((shelfConfig) => shelfConfig.id !== 'none')
            .map((shelfConfig) => {
              const sheldType =
                booksList.filter((book) => book.shelf === shelfConfig.id) || [];
              return (
                <Shelf
                  key={shelfConfig.id}
                  header={shelfConfig.title}
                  booksList={sheldType}
                  onSelect={onSelect}
                />
              );
            }
          )}
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
