export interface IFiles {
  [key: string]: IFile;
}

export interface IFile {
  name: string;
  language: string;
  value: string;
}
