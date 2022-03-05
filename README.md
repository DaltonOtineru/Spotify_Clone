# Spotify Clone

### Project Description

React JS web application that pulls artist and track data from the Spotify web API. Application has the ability to search for specific artists or tracks. The application utilizes the Spotify client credentials authorization flow to request for an access token and receive back the requested data. Axios is used for all interaction between the application and the API. The Songs received are displayed on the application and if a user wants to listen to a song, they can click the song and open up a link in a new tab.

### Technologies Used

- React JS
- Spotify web API
- Axios
- CSS

## Quick Start

First, go to [https://developer.spotify.com/dashboard/login](https://developer.spotify.com/dashboard/login) and create your spotify developer account, in order to retrieve you Client Id & Client Secret.

Second, download the zip file of the project, or clone the repo on your machine.

```
$ git clone https://github.com/DaltonOtineru/Spotify_Clone
```

Third, open up the project and create a .env file. Enter you Client Id & Client Secret as shown below:

```
REACT_APP_CLIENT_ID = XXXXXXXXXXXXXXX
REACT_APP_CLIENT_SECRET = XXXXXXXXXXXXXXX
```

Last, In the project directory, you can run:

### `npm install`

This will install necessary dependencies

Still in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
