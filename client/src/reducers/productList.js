const _initialState = {
  isFetching: false,
  data: []
};

const productList = (state = _initialState, action) => {
  switch(action.type) {
  case 'PRODUCT_LIST_REQUEST':
    return {
      isFetching: true,
      data: []
    };
  case 'PRODUCT_LIST_FETCH_SUCCESS':
    return {
      isFetching: false,
      data: [ ...action.data.data]
    };
  case 'PRODUCT_LIST_FETCH_ERROR':
    return {
      isFetching: false,
      data: action.error
    };
  default:
    return state;
  };
};

export default productList;
