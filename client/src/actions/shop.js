// @flow

import axios from 'axios';

export const fetchShopList = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:8000/api/shop');
    return dispatch({
      type: 'FETCH_SHOP_LIST_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'FETCH_SHOP_LIST_ERROR',
      error
    })
  };
};
