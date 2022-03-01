import './Header.css';
import React from 'react';
import { InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';
import { FiSearch } from 'react-icons/fi';

const Header = ({ searchInputTerm, onInputChange, handleSearch }) => {
  return (
    <div className="header">
      <div className="header--inner">
        <div className="title">
          <a href="#">
            <h1> Spotify Music Clone</h1>
          </a>
        </div>
        <div className="header--search">
          <TextField
            type="text"
            className="search--input"
            value={searchInputTerm}
            onChange={(e) => onInputChange(e)}
            onKeyPress={(e) => handleSearch(e)}
            autoComplete="off"
            placeholder="Search..."
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
            onClick={(e) => handleSearch(e)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
