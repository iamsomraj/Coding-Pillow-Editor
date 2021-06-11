import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const userInfoFromStorage: any = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") as any)
  : null;

const initialState: any = {
  loginUser: { data: userInfoFromStorage },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
