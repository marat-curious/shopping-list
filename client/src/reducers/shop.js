const _initialState = {
  list: [],
  isListFetching: false,
  item: {}
};

const shop = (state = _initialState, action) => {
  switch(action.type) {
  case 'SHOP_LIST_REQUEST':
    return {
      ...state,
      isListFetching: action.status
    };
  case 'SHOP_LIST_FETCH_SUCCESS':
    return {
      ...state,
      isListFetching: false,
      list: [ ...action.data.data]
    };
  case 'SHOP_LIST_FETCH_ERROR':
    return {
      error: action.error
    };
  case 'SHOP_LIST_ITEM_FETCH_SUCCESS':
    return {
      ...state,
      item: action.data.data
    };
  case 'SHOP_LIST_ITEM_FETCH_ERROR':
    return {
      error: action.error
    };
  case 'SHOP_ITEM_UPDATE_SUCCESS':
    return {
      ...state,
      item: action.data.data.value ? action.data.data.value : state.item
    };
  case 'SHOP_ITEM_UPDATE_ERRORR':
    return {
      error: action.error
    };
  default:
    return state;
  };
};

export default shop;
