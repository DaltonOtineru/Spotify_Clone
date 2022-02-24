import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';

import axios from 'axios';

const App = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const [token, setToken] = useState('');
  const [term, setSearchTerm] = useState('drake');
  const [trackData, setTrackData] = useState([]);

  const handleSearch = () => {
    setSearchTerm(term);
  };

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
      console.log(tokenResponse.data.access_token);
      console.log(token);

      axios('https://api.spotify.com/v1/search?type=track&limit=15', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + tokenResponse.data.access_token,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          q: term,
        },
      }).then((tracksResponse) => {
        console.log(tracksResponse.data.tracks.items);
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
