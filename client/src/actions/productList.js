// @flow

import axios from 'axios';

const _requestCategoryList = () => {
  return {
    type: 'PRODUCT_LIST_REQUEST'
  };
};

export const fetchProductList = category => async (dispatch) => {
  dispatch(_requestCategoryList());
  try {
    const data = await axios.get('http://localhost:8000/api/product', { params: { category }});
    console.log(data);
    return dispatch({
      type: 'PRODUCT_LIST_FETCH_SUCCESS',
      data: data.data
    });
  } catch(error) {
    console.error(error);
    return dispatch({
      type: 'PRODUCT_LIST_FETCH_ERROR',
      error
    });
  };
};

