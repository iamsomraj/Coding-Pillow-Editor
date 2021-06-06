import { IFileReducerState } from "../../types";
import { fetchFilesActionTypes } from "../action-types";
import { fetchFilesAction } from "../actions";

const initialState: IFileReducerState = {
  loading: false,
  data: [],
  error: null,
};

const fetchFilesReducer = (state = initialState, action: fetchFilesAction) => {
  switch (action.type) {
    case fetchFilesActionTypes.FETCH_FILES_REQUEST:
      return {
        loading: true,
        data: [],
        error: null,
      };
    case fetchFilesActionTypes.FETCH_FILES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
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

export default fetchFilesReducer;
