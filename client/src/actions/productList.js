// @flow

import axios from 'axios';

const _requestCategoryList = () => {
  return {
    type: 'PRODUCT_LIST_REQUEST'
  };
};

export const fetchProductList = category => async (dispatch) => {
  dispatch(_requestCategoryList());
  let data;
  try {
    if (category) {
      data = await axios.get('http://localhost:8000/api/product', { params: { category }});
    } else {
      data = await axios.get('http://localhost:8000/api/product');
    }
    return dispatch({
      type: 'PRODUCT_LIST_FETCH_SUCCESS',
      data: data.data
    });
  } catch(error) {
    return dispatch({
      type: 'PRODUCT_LIST_FETCH_ERROR',
      error
    });
  };
};

