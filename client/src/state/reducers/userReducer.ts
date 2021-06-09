import { ILoginUserReducerState } from "../../types";
import { loginUserActionTypes, registerUserActionTypes } from "../action-types";
import { loginUserAction, registerUserAction } from "../actions";

const loginUserInitialState: ILoginUserReducerState = {
  data: null,
};

export const loginUserReducer = (
  state: ILoginUserReducerState = loginUserInitialState,
  action: loginUserAction
) => {
  switch (action.type) {
    case loginUserActionTypes.LOGIN_USER_REQUEST:
      return {
        loading: true,
        data: null,
      };
    case loginUserActionTypes.LOGIN_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case loginUserActionTypes.LOGIN_USER_FAILURE: {
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    }

    case loginUserActionTypes.LOGOUT_USER: {
      return {
        data: null,
      };
    }
    default:
      return state;
  }
};

const registerUserInitialState: ILoginUserReducerState = {
  data: null,
};

export const registerUserReducer = (
  state: ILoginUserReducerState = registerUserInitialState,
  action: registerUserAction
) => {
  switch (action.type) {
    case registerUserActionTypes.REGISTER_USER_REQUEST:
      return {
        loading: true,
        data: null,
      };
    case registerUserActionTypes.REGISTER_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case registerUserActionTypes.REGISTER_USER_FAILURE: {
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
