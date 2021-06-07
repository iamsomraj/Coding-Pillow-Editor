import {
  ICreateFileReducerState,
  IFetchFileReducerState,
  IUpdateFileReducerState,
  IDeleteFileReducerState,
} from "../../types";
import {
  createFileActionTypes,
  deleteFileActionTypes,
  fetchFilesActionTypes,
  updateFileActionTypes,
} from "../action-types";
import {
  createFileActions,
  deleteFileActions,
  fetchFilesAction,
  updateFileActions,
} from "../actions";

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

const updateFileInitialState: IUpdateFileReducerState = {
  data: null,
};

export const updateFileReducer = (
  state = updateFileInitialState,
  action: updateFileActions
) => {
  switch (action.type) {
    case updateFileActionTypes.UPDATE_FILE_REQUEST:
      return {
        loading: true,
        data: null,
      };
    case updateFileActionTypes.UPDATE_FILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case updateFileActionTypes.UPDATE_FILE_FAILURE: {
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

const deleteFileInitialState: IDeleteFileReducerState = {
  data: null,
};

export const deleteFileReducer = (
  state = deleteFileInitialState,
  action: deleteFileActions
) => {
  switch (action.type) {
    case deleteFileActionTypes.DELETE_FILE_REQUEST:
      return {
        loading: true,
        data: null,
      };
    case deleteFileActionTypes.DELETE_FILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case deleteFileActionTypes.DELETE_FILE_FAILURE: {
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
