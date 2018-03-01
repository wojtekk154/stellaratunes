import React, { Component } from 'react';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import TunesService from '../../services/TunesService';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      songs: [],
      favourites: [],
      query: ''
    };

    this.tunesService = new TunesService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addSongToFavourites = this.addSongToFavourites.bind(this);
  }

  componentDidMount() {
    this.tunesService.getData('despacito').then((data) => {
      this.setState({ songs: data, loading: false });
    });
  }

  handleButtonClick() {
    this.setState({ loading: true });
    this.tunesService.getData(this.state.query).then((data) => {
      console.log(data);
    });
  }

  handleInputChange(evt) {
    const { name, value } = evt.target;

    this.setState({
      [name]: value
    });
  }

  addSongToFavourites(song) {
    this.setState(prevState => ({
      favourites: (!prevState.favourites.some(f => f.trackId === song.trackId)) ?
        [...prevState.favourites, song] :
        prevState.favourites
    }));
  }

  render() {
    const content = (
      this.state.loading ?
        '' :
        (
          <Songs
            songs={this.state.songs}
            addSongToFavourites={this.addSongToFavourites}
          />
        )
    );
    return (
      <div className="container">
        <Header
          query={this.state.query}
          onInputChange={this.handleInputChange}
          onButtonClick={this.handleButtonClick}
        />
        Page!
        { content }
        {/* When songs are being loaded the Loader component should be shown */}
        <Favourites favourites={this.state.favourites}/>
        {/* Favourites should be saved to localstorage */}
        {/* On page refresh they should be added to state */}
      </div>
    );
  }
}

export default Page;
