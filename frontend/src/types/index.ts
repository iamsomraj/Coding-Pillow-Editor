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
