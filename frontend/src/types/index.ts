export interface IFiles {
  [key: string]: IFile;
}

export interface IFile {
  name: string;
  language: string;
  value: string;
}

export interface IFileReducerState {
  loading: boolean;
  data: IFiles;
  error: string | null;
}
