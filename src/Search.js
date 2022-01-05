import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  static propTypes = {
    searchResults: PropTypes.arrayOf(
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
    onClose: PropTypes.func,
  };

  state = {
    value: '',
  };

  componentDidMount() {
    this.changed = _.debounce((value) => this.props.onSearch(value), 300);
  }

  handleChange = (event) => {
    const value = _.get(event, ['currentTarget', 'value'], '');
    this.setState({ value }, () => {
      this.changed(value);
    });
  };

  render() {
    const { onClose, searchResults, onSelect } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link onClick={onClose} className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Shelf header="" booksList={searchResults} onSelect={onSelect} />
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
