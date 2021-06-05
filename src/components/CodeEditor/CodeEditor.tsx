import { useState } from "react";
import Editor, { OnChange } from "@monaco-editor/react";
import { editorConfig } from "../../config/config";
import { Col, Row } from "react-bootstrap";
import FileEditor from "../FileEditor/FileEditor";
import { IFile, IFiles } from "../../types";
import { files as defaultFiles } from "../../data/files";

const CodeEditor: React.FC = () => {
  /**
   * @type: object
   * @description: storing all the file with name, value, language
   */
  const [files, setFiles] = useState<IFiles>(defaultFiles);

  /**
   * @type: string
   * @description: stores current selected file
   */
  const [selectedFile, setSelectedFile] = useState("script.js");
  const [currentFile, setCurrentFile] = useState<IFile>(files[selectedFile]);

  /**
   *  @type: string[]
   *  @description: storing only file names
   */
  let fileNames: string[] = [];
  if (files) fileNames = Object.keys(files);

  /**
   *
   * @description: updates selected file on file select
   * @param file
   */
  const selectFileHandler = (file: string) => {
    setSelectedFile(file);
    setCurrentFile(files[file]);
  };

  /**
   *
   * @description: updating main files state with a new file
   * @param file
   */
  const addFileHandler = (file: IFile) => {
    const currFiles = { ...files };
    currFiles[file.name] = file;
    setFiles(currFiles);
  };

  /**
   *
   * @description Updating file content of the selected file
   * @param enteredValue
   * @returns void
   */
  const editorChangeHandler: OnChange = (enteredValue) => {
    if (!enteredValue) return;

    const currFiles = { ...files };
    currFiles[selectedFile].value = enteredValue;
    setFiles(currFiles);
  };

  const deleteFileHandler = (fileName: string) => {
    if (!fileName) return;

    const currFiles = { ...files };
    delete currFiles[fileName];
    setFiles(currFiles);
  };

  return (
    <>
      <Row className="my-3">
        <Col className="my-4" md={2}>
          <FileEditor
            selectedFile={selectedFile}
            onAdd={addFileHandler}
            onSelect={selectFileHandler}
            onDelete={deleteFileHandler}
            fileList={fileNames}
          />
        </Col>
        <Col className="my-4" md={8}>
          {currentFile && (
            <Editor
              height={editorConfig.height}
              theme={editorConfig.theme}
              onChange={editorChangeHandler}
              path={currentFile.name}
              defaultLanguage={currentFile.language}
              defaultValue={currentFile.value}
            />
          )}
        </Col>
        <Col className="my-4" md={2}>
          PREVIEW
        </Col>
      </Row>
    </>
  );
};

export default CodeEditor;
