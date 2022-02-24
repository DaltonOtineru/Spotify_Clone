import React from 'react';
import './TrackItem.css';

const TrackItem = ({ name, href, artists, images }) => {
  return (
    <a href={href} target="_blank" className="track--item--anchor">
      <div className="track--item">
        <div className="track--img">
          <img src={images} alt="album picture" />
        </div>
        <div className="track--info">
          <h5 className="track--title">{name}</h5>
          <p className="artist">{artists}</p>
        </div>
      </div>
    </a>
  );
};

export default TrackItem;
