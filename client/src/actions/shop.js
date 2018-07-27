// @flow

import axios from 'axios';

export const fetchShopList = () => async (dispatch) => {
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

export const fetchShopListItem = id => async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:8000/api/shop/${id}`);
    return dispatch({
      type: 'SHOP_LIST_ITEM_FETCH_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'SHOP_LIST_ITEM_FETCH_ERROR',
      error
    });
  }
};
