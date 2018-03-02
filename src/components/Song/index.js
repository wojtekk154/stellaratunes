import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';

function Song({ song, action, actionName }) {
  return (
    <div className="item">
      <span className="artist">{song.artistName}</span>
      <span className="track">{song.trackName}</span>
      <Button type={actionName === 'Add to Favourites' ? 'primary' : 'secondary'} onButtonClick={() => action(song)}>
        { actionName }
      </Button>
    </div>
  );
}

Song.propTypes = {
  song: PropTypes.shape({
    artistName: PropTypes.string,
    trackName: PropTypes.string
  }),
  action: PropTypes.func,
  actionName: PropTypes.string
};

export default Song;
