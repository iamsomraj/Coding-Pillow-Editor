export interface IFile {
  _id: string;
  name: string;
  language: string;
  value: string;
}

export interface IFetchFileReducerState {
  loading?: boolean;
  data: IFile[];
  error?: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface ILoginUserReducerState {
  loading?: boolean;
  data: {} | IUser;
  error?: string;
}
