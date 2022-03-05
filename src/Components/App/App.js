import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import TrackDisplay from '../TrackDisplay/TrackDisplay';
import axios from 'axios';

const App = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const [apiFetchTerm, setApiFetchTerm] = useState('drake');
  const [searchInputTerm, setSearchInputTerm] = useState('');
  const [trackData, setTrackData] = useState([]);

  const onInputChange = (e) => {
    setSearchInputTerm(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.which === 13) {
      setApiFetchTerm(e.target.value);
    }
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
      axios('https://api.spotify.com/v1/search?type=track&limit=20', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + tokenResponse.data.access_token,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          q: apiFetchTerm,
        },
      }).then((tracksResponse) => {
        setTrackData(tracksResponse.data.tracks.items);
      });
    });
  }, [apiFetchTerm]);

  return (
    <div className="app">
      <Header
        searchInputTerm={searchInputTerm}
        handleSearch={handleSearch}
        apiFetchTerm={apiFetchTerm}
        onInputChange={onInputChange}
      />
      <TrackDisplay trackData={trackData} />
    </div>
  );
};

export default App;
