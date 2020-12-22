import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestRecommendationSymbolList = async keyword => {
  const response = await fetch(`https://api.warrenbuffetttest500.site${PATHS.COMPANY_PROFILES}${PATHS.RECOMMENDATION_STOCK_LIST}/${keyword}`, {
    mode: 'no-cors',
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const responseToString = await response.text();
  const json = responseToString === '' ? {} : JSON.parse(responseToString);
  return json;
};

export default requestRecommendationSymbolList;
