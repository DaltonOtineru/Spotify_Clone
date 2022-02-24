import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Dropdown from '../Dropdown/Dropdown';
import { Credentials } from '../../Spotify/Credentials';
import axios from 'axios';

const App = () => {
  const spotify = Credentials();

  const [token, setToken] = useState('');
  const [term, setSearchTerm] = useState('');

  const handleSearch = () => {
    setSearchTerm(term);
  };

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    }).then((tokenResponse) => {
      // console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/search', {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + tokenResponse.data.access_token },
      }).then((tracksResponse) => {
        setSearchTerm(tracksResponse.data.categories.items);
        console.log(tracksResponse.data.categories.items);
      });
    });
  }, []);

  return (
    <div className="app">
      <Header
        term={term}
        handleSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
};

export default App;
