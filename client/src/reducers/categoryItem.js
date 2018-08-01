// @flow

const _initialState = {
  isFetching: false,
  data: {}
};

const categoryItem = (state = _initialState, action) => {
  switch(action.type) {
  case 'CATEGORY_ITEM_REQUEST':
    return {
      isFetching: true,
      data: {}
    };
  case 'CATEGORY_ITEM_FETCH_SUCCESS':
    return {
      isFetching: false,
      data: action.data.data
    };
  case 'CATEGORY_ITEM_UPDATE_SUCCESS':
    return {
      isFetching: false,
      data: {}
    };
  case 'CATEGORY_ITEM_ADD_SUCCESS':
    return {
      isFetching: false,
      data: {}
    };
  case 'CATEGORY_ITEM_FETCH_ERROR':
  case 'CATEGORY_ITEM_UPDATE_ERROR':
  case 'CATEGORY_ITEM_ADD_ERROR':
    return {
      isFetching: false,
      data: action.error
    };
  default:
    return state;
  }
};

export default categoryItem;
