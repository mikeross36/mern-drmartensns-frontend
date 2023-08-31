import * as authReducers from "./reducers/authReducers";
import * as orderReducers from "./reducers/orderReducers";
import * as categoryReducers from "./reducers/categoryReducers";
import * as reviewReducers from "./reducers/reviewReducers";
import * as footwearReducers from "./reducers/footwearReducers";
import { cartReducer } from "./reducers/cartReducers";
import { updateAccountReducer } from "./reducers/userReducers";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  signupUser: authReducers.signupUserReducer,
  loginUser: authReducers.loginUserReducer,
  logoutUser: authReducers.logoutUserReducer,
  resetPassword: authReducers.resetPasswordReducer,
  getAllFootwear: footwearReducers.getAllFootwearReducer,
  getFootwear: footwearReducers.getFootwearReducer,
  cart: cartReducer,
  createOrder: orderReducers.createOrderReducer,
  getUserOrders: orderReducers.getUserOrdersReducer,
  getAllCategories: categoryReducers.getAllCategoriesReducer,
  getCategory: categoryReducers.getCategoryReducer,
  getAllReviews: reviewReducers.getAllReviewsReducer,
  getReview: reviewReducers.getReviewReducer,
  addReview: reviewReducers.addReviewReducer,
  updateAccount: updateAccountReducer,
});

function rootReducer(state, action) {
  if (action.type === "LOGOUT_USER_REQUEST") {
    storage.removeItem("persis:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
