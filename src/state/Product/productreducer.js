import * as actionTypes from '../actionTypes';

let initialState = {
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDPRODUCTTOSTORE:
      return {
        ...state,
        product: action.payload,
      };
    case actionTypes.DISPLAYALLPRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case actionTypes.SELECTPRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case actionTypes.REMOVESELECTEDPRODUCT:
      return { product: [] };

    default:
      return state;
  }
};

export default productReducer;