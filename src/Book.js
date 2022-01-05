import React from 'react';
import PropTypes from 'prop-types';
import { SHELVES } from './utils/Constants';

const Book = ({ title, authors, id, imageLinks, onSelect, shelf }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${imageLinks.thumbnail})`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select
          onChange={onSelect}
          value={shelf ? `${shelf}|${id}` : `${SHELVES[3].id}|${id}`}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value={`${SHELVES[0].id}|${id}`}>Currently Reading</option>
          <option value={`${SHELVES[1].id}|${id}`}>Want to Read</option>
          <option value={`${SHELVES[2].id}|${id}`}>Read</option>
          <option value={`${SHELVES[3].id}|${id}`}>None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    {authors &&
      authors.map((author, index) => (
        <div key={`autor=${index}`} className="book-authors">
          {author}
        </div>
      ))}
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.array,
  imageLinks: PropTypes.shape({
    smallThumbnail: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
  defaultMenuValue: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};

Book.defaultProps = {
  imageLinks: {},
  defaultMenuValue: 0,
};

export default Book;
