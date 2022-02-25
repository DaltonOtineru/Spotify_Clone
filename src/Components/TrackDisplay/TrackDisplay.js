import React from 'react';
import TrackItem from '../TrackItem/TrackItem';
import './TrackDisplay.css';
const TrackDisplay = ({ trackData }) => {
  console.log(trackData);

  const imageMap = () => {};

  return (
    <div className="track--display">
      <div className="track--display--inner">
        {trackData.map((track) => (
          <TrackItem
            name={track.name}
            images={track.album.images[1].url}
            href={track.external_urls.spotify}
            album={track.album.name}
            artists={track.album.artists[0].name}
            key={track.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackDisplay;
