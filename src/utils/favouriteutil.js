import axios from 'axios';
import { API_ID, API_FAVOURITE } from '../api/railshouse';

export const handleFavoriteClick = (usr, houseId) => {
    axios.post(`${API_ID}${API_FAVOURITE}`, {
      user_id: usr,
      house_id: houseId,
    },
    { withCredentials: true}
    )
    .then(res => {
      console.log("Added succes", res);
    })
    .catch(err => {
      console.log("Add favourite error", err);
    });
};
