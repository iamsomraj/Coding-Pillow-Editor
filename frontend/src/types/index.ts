export interface IFile {
  _id: string;
  name: string;
  language: string;
  value: string;
}

export interface IReducerState {
  loading?: boolean;
  data?: IFile[];
  error?: string;
}
