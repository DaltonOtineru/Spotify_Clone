// import React from 'react';
// import axios from 'axios';

// const clientId = process.env.REACT_APP_CLIENT_ID;
// const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

// export default spotifyApi = () => {
//   axios('https://accounts.spotify.com/api/token', {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
//     },
//     data: 'grant_type=client_credentials',
//     method: 'POST',
//   }).then((tokenResponse) => {
//     axios('https://api.spotify.com/v1/search?type=track&limit=40', {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + tokenResponse.data.access_token,
//         Accept: 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       params: {
//         q: apiFetchTerm,
//       },
//     }).then((tracksResponse) => {
//       setTrackData(tracksResponse.data.tracks.items);
//     });
//   });
// };
