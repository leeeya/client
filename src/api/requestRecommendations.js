import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestRecommendations = async (recommendationCriterion, currentUser) => {
  let fetchUrl;

  if (recommendationCriterion === 'random') {
    fetchUrl = `${PATHS.HOST}${PATHS.SERVER_PORT}/portfolios/random`;
  } else if (recommendationCriterion === 'preference') {
    fetchUrl = `${PATHS.HOST}${PATHS.SERVER_PORT}${PATHS.USERS}/${currentUser.uid}/portfolios/recommendations/preference`;
  } else if (recommendationCriterion === 'portfolio') {
    fetchUrl = `${PATHS.HOST}${PATHS.SERVER_PORT}${PATHS.USERS}/${currentUser.uid}/portfolios/recommendations/portfolio`;
  } else {
    fetchUrl = `${PATHS.HOST}${PATHS.SERVER_PORT}${PATHS.USERS}/${currentUser.uid}/companies/recommendations`;
  }

  const response = await fetch(fetchUrl, {
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestRecommendations;
