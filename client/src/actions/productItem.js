// @flow

import axios from 'axios';
import { fetchProductList } from './productList';

const _requestProductItem = () => {
  return {
    type: 'PRODUCT_ITEM_REQUEST'
  };
};

export const fetchProductItem = id => async (dispatch) => {
  dispatch(_requestProductItem());
  try {
    const data = await axios.get(`http://localhost:8000/api/product/${id}`);
    return dispatch({
      type: 'PRODUCT_ITEM_FETCH_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'PRODUCT_ITEM_FETCH_ERROR',
      error
    });
  }
};

export const updateProductItem = item => async (dispatch) => {
  try {
    const data = await axios.put('http://localhost:8000/api/product', item);
    return dispatch({
      type: 'PRODUCT_ITEM_UPDATE_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'PRODUCT_ITEM_UPDATE_ERROR',
      error
    });
  }
};

export const deleteProductItem = id => async (dispatch) => {
  try {
    const data = await axios.delete('http://localhost:8000/api/product', { data: {id} });
    if (data.data.data.ok) {
      dispatch(fetchProductList());
    }
  } catch (error) {
    console.error(error);
  }
};

export const addProductItem = product => async (dispatch) => {
  try {
    const data = await axios.post('http://localhost:8000/api/product', product);
    return dispatch({
      type: 'PRODUCT_ITEM_ADD_SUCCESS'
    });
  } catch(error) {
    return dispatch({
      type: 'PRODUCT_ITEM_ADD_ERROR',
      error
    });
  }
};
