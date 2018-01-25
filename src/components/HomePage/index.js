import React, { Component } from 'react';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      favourites: []
    };
  }

  render() {
    return (
      <div className="container">
        <Header/>
        Page!
        <Songs songs={this.state.songs}/>
        {/* When songs are being loaded the Loader component should be shown */}
        <Favourites favourites={this.state.favourites}/>
        {/* Favourites should be saved to localstorage */}
        {/* On page refresh they should be added to state */}
      </div>
    );
  }
}

export default Page;
