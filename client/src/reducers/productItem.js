// @flow

const _initialState = {
  isFetching: false,
  data: {}
};

const productItem = (state = _initialState, action) => {
  switch(action.type) {
  case 'PRODUCT_ITEM_REQUEST':
    return {
      isFetching: true,
      data: {}
    };
  case 'PRODUCT_ITEM_FETCH_SUCCESS':
    return {
      isFetching: false,
      data: action.data.data
    };
  case 'PRODUCT_ITEM_UPDATE_SUCCESS':
    return {
      isFetching: false,
      data: {}
    };
  case 'PRODUCT_ITEM_ADD_SUCCESS':
    return {
      isFetching: false,
      data: {}
    };
  case 'PRODUCT_ITEM_FETCH_ERROR':
  case 'PRODUCT_ITEM_UPDATE_ERROR':
  case 'PRODUCT_ITEM_ADD_ERROR':
    return {
      isFetching: false,
      data: action.error
    };
  default:
    return state;
  }
};

export default productItem;
