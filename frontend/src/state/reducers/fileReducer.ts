import { ICreateFileReducerState, IFetchFileReducerState } from "../../types";
import { createFileActionTypes, fetchFilesActionTypes } from "../action-types";
import { createFileActions, fetchFilesAction } from "../actions";

const fetchFilesInitialState: IFetchFileReducerState = {
  data: [],
};

export const fetchFilesReducer = (
  state = fetchFilesInitialState,
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

const createFileInitialState: ICreateFileReducerState = {
  data: null,
};

export const createFileReducer = (
  state = createFileInitialState,
  action: createFileActions
) => {
  switch (action.type) {
    case createFileActionTypes.CREATE_FILE_REQUEST:
      return {
        loading: true,
        data: null,
      };
    case createFileActionTypes.CREATE_FILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case createFileActionTypes.CREATE_FILE_FAILURE: {
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
