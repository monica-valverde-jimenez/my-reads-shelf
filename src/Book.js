import React from 'react';
import PropTypes from 'prop-types';

const optionMenu = ['currentlyReading', 'wantToRead', 'read', 'none'];

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
          value={shelf ? `${shelf}|${id}` : `${optionMenu[3]}`}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value={`${optionMenu[0]}|${id}`}>Currently Reading</option>
          <option value={`${optionMenu[1]}|${id}`}>Want to Read</option>
          <option value={`${optionMenu[2]}|${id}`}>Read</option>
          <option value={`${optionMenu[3]}`}>None</option>
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
