const _initialState = {
  shopItem: {
    isFetching: false,
    data: {}
  }
};

const shopItem = (state = _initialState, action) => {
  switch(action.type) {
  case 'SHOP_ITEM_REQUEST':
    return {
      shopItem: {
        isFetching: true,
        data: {}
      }
    };
  break;
  case 'SHOP_ITEM_FETCH_SUCCESS':
    return {
      shopItem: {
        isFetching: false,
        data: action.data.data
      }
    };
  break;
  case 'SHOP_ITEM_UPDATE_SUCCESS':
    return {
      shopItem: {
        isFetching: false,
        data: action.data.data.value ? action.data.data.value : {}
      }
    };
  break;
  case 'SHOP_ITEM_FETCH_ERROR':
  case 'SHOP_ITEM_UPDATE_ERROR':
    return {
      shopItem: {
        isFetching: false,
        data: action.error
      }
    };
  default:
    return state;
  }
};

export default shopItem;
