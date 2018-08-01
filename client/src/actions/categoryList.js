// @flow

import axios from 'axios';

const _requestCategoryList = () => {
  return {
    type: 'CATEGORY_LIST_REQUEST'
  };
};

export const fetchCategoryList = () => async (dispatch) => {
  dispatch(_requestCategoryList());
  try {
    const data = await axios.get('http://localhost:8000/api/category');
    return dispatch({
      type: 'CATEGORY_LIST_FETCH_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'CATEGORY_LIST_FETCH_ERROR',
      error
    });
  };
};
