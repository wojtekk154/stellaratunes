import React from 'react';
import PropTypes from 'prop-types';

import Song from '../Song';

function Songs({ songs, addSongToFavourites }) {
  return (
    <div>
      {
        songs.map(song => (
          <div>
            <Song key={song.trackId} song={song} addSongToFavourites={addSongToFavourites} />
          </div>
        ))
      }
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  addSongToFavourites: PropTypes.func
};

export default Songs;
