/* eslint-disable no-tabs,no-undef,react/prefer-stateless-function,no-alert,prefer-destructuring */
import React, { Component } from 'react';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import TunesService from '../../services/api/itunes';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      favourites: []
    };

    this.tunesService = new TunesService();
  }

  componentDidMount() {
    this.tunesService.getSongs('SONG TITLE HERE').then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="container">
        <Header/>
        Page!
        <Songs songs={this.state.songs}/>
        <Favourites favourites={this.state.favourites}/>
      </div>
    );
  }
}

export default Page;
