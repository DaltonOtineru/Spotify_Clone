import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header/Header';
import TrackDisplay from '../TrackDisplay/TrackDisplay';
import axios from 'axios';

const App = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const [token, setToken] = useState('');
  const [apiFetchTerm, setApiFetchTerm] = useState('drake');
  const [searchInputTerm, setSearchInputTerm] = useState('');
  const [trackData, setTrackData] = useState([]);

  const fetchTermRef = useRef(searchInputTerm);
  fetchTermRef.current = searchInputTerm;

  const onInputChange = (e) => {
    setSearchInputTerm(e.target.value);
    console.log(searchInputTerm);
  };

  const handleSearch = (e) => {
    if (e.which === 13) {
      setSearchInputTerm(e.target.value);
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
      setToken(tokenResponse.data.access_token);
      console.log(tokenResponse.data.access_token);
      console.log(token);

      axios('https://api.spotify.com/v1/search?type=track&limit=24', {
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
        // console.log(tracksResponse.data.tracks.items);
        setTrackData(tracksResponse.data.tracks.items);
        console.log(trackData);
      });
    });
  }, [apiFetchTerm]);

  useEffect(() => {
    setTimeout(() => {
      setApiFetchTerm(searchInputTerm);
    }, 2000);
    return () => {
      setApiFetchTerm(searchInputTerm);
      console.log(apiFetchTerm);
    };
  }, [searchInputTerm]);

  return (
    <div className="app">
      <Header
        searchInputTerm={searchInputTerm}
        handleSearch={handleSearch}
        apiFetchTerm={apiFetchTerm}
        onInputChange={onInputChange}
        // setSearchTerm={setSearchTerm}
      />
      <TrackDisplay trackData={trackData} />
    </div>
  );
};

export default App;
