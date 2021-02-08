import axios from 'axios';
import { API_ID, API_FAVOURITE, API_HOUSE } from '../api/railshouse';

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

export const fetchHouseDetail = id => axios.get(`${API_ID}${API_HOUSE}/${id}`);

export const fetchHouse = () => axios.get(`${API_ID}${API_HOUSE}`);
