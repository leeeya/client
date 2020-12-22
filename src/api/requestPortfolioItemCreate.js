import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestPortfolioItemCreate = async (userUid, data) => {
  const response = await fetch(`https://api.warrenbuffetttest500.site${PATHS.USERS}/${userUid}/portfolio_items`, {
    mode: 'no-cors',
    method: METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export default requestPortfolioItemCreate;
