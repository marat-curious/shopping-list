// @flow

import axios from 'axios';

export const fetchProductList = category => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:8000/api/product', { category });
    console.log(data);
  } catch(error) {
    console.error(error);
  };
};
