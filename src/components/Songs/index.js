import React from 'react';
import PropTypes from 'prop-types';

import Song from '../Song';

function Songs({ songs, addSongToFavourites }) {
  return (
    <div>
      {
        songs.map(song => (
          <Song
            key={song.trackId}
            song={song}
            action={addSongToFavourites}
            actionName="Add to Favourites"
          />
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
