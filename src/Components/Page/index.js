/* eslint-disable no-tabs,no-undef,react/prefer-stateless-function,no-alert,prefer-destructuring */
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
      <div>
        <Header/>
        Page!
        <Songs songs={this.state.songs}/>
        <Favourites favourites={this.state.favourites}/>
      </div>
    );
  }
}

export default Page;
