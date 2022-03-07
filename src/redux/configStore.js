import { combineReducers, createStore } from "redux";
import { appThuKinhReducer } from "./AppThuKinhReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  appThuKinhReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
