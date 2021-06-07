import { IReducerState } from "../../types";
import { fetchFilesActionTypes } from "../action-types";
import { fetchFilesAction } from "../actions";

const initialState: IReducerState = {};

export const fetchFilesReducer = (
  state = initialState,
  action: fetchFilesAction
) => {
  switch (action.type) {
    case fetchFilesActionTypes.FETCH_FILES_REQUEST:
      return {
        loading: true,
      };
    case fetchFilesActionTypes.FETCH_FILES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case fetchFilesActionTypes.FETCH_FILES_FAILURE: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

