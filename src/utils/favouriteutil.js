import axios from 'axios';
import { API_ID, API_FAVOURITE } from '../api/railshouse';

export const handleFavoriteClick = (usr, houseId) => {
  axios.post(`${API_ID}${API_FAVOURITE}`, {
    house_id: houseId,
  }, {
    headers: {
      Authorization: usr,
    },
  },
  { withCredentials: true });
};

export const fetchFavourite = usr => {
  axios.get(`${API_ID}${API_FAVOURITE}`, {
    headers: {
      Authorization: usr,
    },
  },
  { withCredentials: true });
};
