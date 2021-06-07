import { IFetchFileReducerState } from "../../types";
import { fetchFilesActionTypes } from "../action-types";
import { fetchFilesAction } from "../actions";

const initialState: IFetchFileReducerState = {
  data: [],
};

export const fetchFilesReducer = (
  state = initialState,
  action: fetchFilesAction
) => {
  switch (action.type) {
    case fetchFilesActionTypes.FETCH_FILES_REQUEST:
      return {
        loading: true,
        data: [],
      };
    case fetchFilesActionTypes.FETCH_FILES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case fetchFilesActionTypes.FETCH_FILES_FAILURE: {
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
