import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Text from '../Text';
import Song from '../Song';

function Favourites({ favourites, removeFromFavourites }) {
  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="elements">
        {favourites.map(song => (
          <Song
            song={song}
            action={removeFromFavourites}
            actionName="Remove from favourites"
            key={song.trackId}
          />))}
      </div>
    </div>
  );
}

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.object),
  removeFromFavourites: PropTypes.func
};

export default Favourites;
