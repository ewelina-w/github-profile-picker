import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div className='search-for-profile'>
        <input
          className='search'
          type='text'
          placeholder='Put a Github login here'
        />
        <button>Search</button>
      </div>
    )
  }
}

export default Search;
