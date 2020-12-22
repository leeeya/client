import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestUser = async () => {
  const response = await fetch(
    `https://api.warrenbuffetttest500.site${PATHS.USERS}/current_user`, {
    mode: 'no-cors',
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestUser;
