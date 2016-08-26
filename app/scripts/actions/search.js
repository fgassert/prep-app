import 'whatwg-fetch';
import { LINK_SHORTEN_RECEIVE, LINK_SHORTEN_ERROR } from '../constants';

import { push } from 'react-router-redux';

export function goToSearchPage(param) {
  return (dispatch) => {
    dispatch(push(`/search/${param}`));
  };
}

export function getSearchResults(search) {
  return dispatch => {
    const url = encodeURIComponent(longUrl);
    fetch(`https://www.googleapis.com/customsearch/v1?query=${search}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      })
      .then(data => {
        dispatch({
          type: SEARCH_RESULTS_RECEIVED,
          payload: {data}
        });
      })
      .catch((err) => {
        dispatch({
          type: SEARCH_RESULTS_ERROR,
          payload: {
            error: err.message,
            longUrl
          }
        });
      });
  };
}
