import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './User/userReducer';
import productReducer from './Product/productReducer';
import cartReducer from './Cart/cartReducer';

const rootReducer = allReducers({
  userReducer,
  productReducer,
  cartReducer,
});

export default configureStore(
    {
      reducer: rootReducer
    });