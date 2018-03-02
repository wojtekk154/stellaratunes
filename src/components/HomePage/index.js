import React, { Component } from 'react';
import Header from '../Header';
import Songs from '../Songs';
import Favourites from '../Favourites';
import Loader from '../Loader';
import TunesService from '../../services/TunesService';
import StorageService from '../../services/storage.service';

class Page extends Component {
  constructor() {
    super();
    this.tunesService = new TunesService();
    this.storageService = new StorageService();

    this.state = {
      loading: true,
      songs: this.storageService.getSongs() || [],
      favourites: this.storageService.getFavourites() || [],
      query: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addSongToFavourites = this.addSongToFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
  }

  componentDidMount() {
    this.tunesService.getData('despacito').then((data) => {
      this.setState({ songs: data, loading: false });
      this.storageService.setSongs(data);
    });
  }

  handleButtonClick() {
    this.setState({ loading: true });
    this.tunesService.getData(this.state.query).then((data) => {
      this.setState({ songs: data, loading: false });
      this.storageService.setSongs(data);
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
    this.storageService.setFavourites(this.state.favourites);
  }

  removeFromFavourites(song) {
    this.setState(prevState => ({
      favourites: prevState.favourites.filter(f => f.trackId !== song.trackId)
    }));
  }

  render() {
    const content = (
      this.state.loading ?
        <Loader/> :
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
        {content}
        {/* When songs are being loaded the Loader component should be shown */}
        <Favourites
          favourites={this.state.favourites}
          removeFromFavourites={this.removeFromFavourites}
        />
        {/* Favourites should be saved to localstorage */}
        {/* On page refresh they should be added to state */}
      </div>
    );
  }
}

export default Page;
