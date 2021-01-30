import axios from 'axios';
import { API_ID, API_FAVOURITE } from '../api/railshouse';

const handleFavoriteClick = (usr, houseId) => {
  axios.post(`${API_ID}${API_FAVOURITE}`, {
    user_id: usr,
    house_id: houseId,
  },
  { withCredentials: true });
};

export default handleFavoriteClick;
