/* eslint-disable no-undef */
import { API_URL } from '../../../utils/constants';

class TunesService {
  getSongs(query) {
    return fetch(`${API_URL}?term=${decodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => data.results)
      .catch((error) => {
        console.log(error);
      });
  }
}

export default TunesService;
