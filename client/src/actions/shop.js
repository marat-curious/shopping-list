// @flow

import axios from 'axios';

export const _fetchingShopList = () => {
  return {
    type: 'SHOP_LIST_REQUEST',
    status: true
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

export const updateShopName = shop => async (dispatch) => {
  try {
    const data = await axios.put(
      'http://localhost:8000/api/shop',
      { nameCur: shop._name, nameNew: shop.name }
    );
    return dispatch({
      type: 'SHOP_ITEM_UPDATE_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'SHOP_ITEM_UPDATE_ERROR',
      error
    });
  }
};

export const deleteShop = id => async (dispatch) => {
  try {
    const data = await axios.delete('http://localhost:8000/api/shop', { id });
    if (data.data.data.ok) {
      dispatch(fetchShopList());
    }
  } catch (error) {
    console.error(error);
  }
};
