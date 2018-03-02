/* eslint-disable no-undef */
import { FAVOURITE_STORAGE, SONG_STORAGE } from '../utils/constants';

class StorageService {
  setFavourites(data) {
    localStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(data));
  }

  setSongs(data) {
    localStorage.setItem(SONG_STORAGE, JSON.stringify(data));
  }

  getFavourites() {
    return JSON.parse(localStorage.getItem(FAVOURITE_STORAGE));
  }

  getSongs() {
    return JSON.parse(localStorage.getItem(SONG_STORAGE));
  }
}

export default StorageService;
