import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';

function Song({ song, addSongToFavourites }) {
  return (
    <div className="item">
      {song.artistName} - {song.trackName}
      <Button type="primary" onButtonClick={() => addSongToFavourites(song)}>
        Add To favourites
      </Button>
    </div>
  );
}

Song.propTypes = {
  song: PropTypes.shape({
    artistName: PropTypes.string,
    trackName: PropTypes.string
  }),
  addSongToFavourites: PropTypes.func
};

export default Song;
