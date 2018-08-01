// @flow

import axios from 'axios';
import { fetchCategoryList } from './categoryList';

const _requestCategoryItem = () => {
  return {
    type: 'CATEGORY_ITEM_REQUEST'
  };
};

export const fetchCategoryItem = id => async (dispatch) => {
  dispatch(_requestCategoryItem());
  try {
    const data = await axios.get(`http://localhost:8000/api/category/${id}`);
    return dispatch({
      type: 'CATEGORY_ITEM_FETCH_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'CATEGORY_ITEM_FETCH_ERROR',
      error
    });
  }
};

export const updateCategoryItem = item => async (dispatch) => {
  try {
    const data = await axios.put('http://localhost:8000/api/category', item);
    return dispatch({
      type: 'CATEGORY_ITEM_UPDATE_SUCCESS',
      data: data.data
    });
  } catch (error) {
    return dispatch({
      type: 'CATEGORY_ITEM_UPDATE_ERROR',
      error
    });
  }
};

export const deleteCategoryItem = id => async (dispatch) => {
  try {
    const data = await axios.delete('http://localhost:8000/api/category', { data: {id} });
    if (data.data.data.ok) {
      dispatch(fetchCategoryList());
    }
  } catch (error) {
    console.error(error);
  }
};

export const addCategoryItem = name => async (dispatch) => {
  try {
    const data = await axios.post('http://localhost:8000/api/category', name);
    return dispatch({
      type: 'CATEGORY_ITEM_ADD_SUCCESS'
    });
  } catch(error) {
    return dispatch({
      type: 'CATEGORY_ITEM_ADD_ERROR',
      error
    });
  }
};

