// @flow

import axios from 'axios';

const _fetchingShopList = () => {
  return {
    type: 'SHOP_LIST_REQUEST'
  };
};

export const fetchShopList = () => async (dispatch) => {

  dispatch(_fetchingShopList());

  try {
    const data = await axios.get('http://localhost:8000/api/shop');
    return dispatch({
      type: 'SHOP_LIST_FETCH_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'SHOP_LIST_FETCH_ERROR',
      error
    });
  };
};
