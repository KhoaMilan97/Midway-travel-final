import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import tourReducer from "./tour/tour.reducer";
import typeReducer from "./type-tour/type-tour.reducer";
import cartReducer from "./cart/cart.reducer";
import reviewReducer from "./review/review.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  tour: tourReducer,
  type: typeReducer,
  cart: cartReducer,
  review: reviewReducer,
});

export default persistReducer(persistConfig, rootReducer);
