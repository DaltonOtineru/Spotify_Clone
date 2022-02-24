import './Header.css';
import React from 'react';
import { Input } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';
import { FiSearch } from 'react-icons/fi';

const Header = ({ term, handleSearch, setSearchTerm }) => {
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log('foo');
  };

  return (
    <div className="header">
      <div className="header--inner">
        <div className="title">
          <h1> Spotify Music Clone</h1>
        </div>
        <div className="header--search">
          <TextField
            type="text"
            className="search--input"
            value={term}
            onChange={onInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch className="search--icon" />
                </InputAdornment>
              ),
            }}
          />
          <button
            type="button"
            className="search--btn"
            // onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <p className="label">Enter a Search Term</p> */
}
