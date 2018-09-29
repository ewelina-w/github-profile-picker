import React, { Component } from 'react';

class Search extends Component {

  render() {
    const { searchForUser, updateUser, handleKeyPress } = this.props;
    return (
      <div className='search-for-profile'>
        <input
          className='search'
          type='text'
          placeholder='Put a Github login here'
          onChange={(event) => updateUser(event.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <button
          onClick={() =>
            searchForUser()}
          className='search'>
          Search
        </button>
      </div>
    )
  }
}

export default Search;
