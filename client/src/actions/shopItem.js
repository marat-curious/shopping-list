// @flow

import axios from 'axios';
import { fetchShopList } from './shopList';

const _requestShopItem = () => {
  return {
    type: 'SHOP_ITEM_REQUEST'
  };
};

export const fetchShopItem = id => async (dispatch) => {
  dispatch(_requestShopItem());
  try {
    const data = await axios.get(`http://localhost:8000/api/shop/${id}`);
    return dispatch({
      type: 'SHOP_ITEM_FETCH_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'SHOP_ITEM_FETCH_ERROR',
      error
    });
  }
};

export const updateShopItem = item => async (dispatch) => {
  try {
    const data = await axios.put('http://localhost:8000/api/shop', item);
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

export const deleteShopItem = id => async (dispatch) => {
  try {
    const data = await axios.delete('http://localhost:8000/api/shop', { data: {id} });
    if (data.data.data.ok) {
      dispatch(fetchShopList());
    }
  } catch (error) {
    console.error(error);
  }
};

export const addShopItem = name => async (dispatch) => {
  try {
    const data = await axios.post('http://localhost:8000/api/shop', name);
    return dispatch({
      type: 'SHOP_ITEM_ADD_SUCCESS'
    });
  } catch(error) {
    return dispatch({
      type: 'SHOP_ITEM_ADD_ERROR',
      error
    });
  }
};

