import './Header.css';
import React from 'react';

const Header = ({ term, handleSearch, setSearchTerm }) => {
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log('foo');
  };

  return (
    <div className="header">
      <div className="title">
        <h1> Spotify Music Clone</h1>
      </div>
      <div className="search--label">
        <p className="label">Enter a Search Term</p>
      </div>
      <input
        type="text"
        className="search--input"
        value={term}
        onChange={onInputChange}
      />
      <button
        type="button"
        className="search--btn"
        // onClick={() => handleSearch()}
      >
        Search
      </button>
    </div>
  );
};

export default Header;
