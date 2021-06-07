import { ILoginUserReducerState } from "../../types";
import { loginUserActionTypes } from "../action-types";
import { loginUserAction } from "../actions";

const initialState: ILoginUserReducerState = {
  data: {},
};

export const userLoginReducer = (
  state = initialState,
  action: loginUserAction
) => {
  switch (action.type) {
    case loginUserActionTypes.LOGIN_USER_REQUEST:
      return {
        loading: true,
        data: {},
      };
    case loginUserActionTypes.LOGIN_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case loginUserActionTypes.LOGIN_USER_FAILURE: {
      return {
        loading: false,
        error: action.payload,
      };
    }

    case loginUserActionTypes.LOGOUT_USER: {
      return {
        data: {},
      };
    }
    default:
      return state;
  }
};
