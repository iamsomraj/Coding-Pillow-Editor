export interface IFile {
  id: string;
  name: string;
  language: string;
  value: string;
}

export interface IFileReducerState {
  loading: boolean;
  data: IFile[];
  error: string | null;
}
