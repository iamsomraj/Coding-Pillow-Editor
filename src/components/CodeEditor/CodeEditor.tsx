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
  const currentFile = files[selectedFile];

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

  const editorChangeHandler: OnChange = (value, event) => {};

  return (
    <>
      <Row className="my-3">
        <Col className="my-4" md={2}>
          <FileEditor
            onAdd={addFileHandler}
            fileList={fileNames}
            selectedFile={selectedFile}
            onSelect={selectFileHandler}
          />
        </Col>
        <Col className="my-4" md={8}>
          <Editor
            height={editorConfig.height}
            theme={editorConfig.theme}
            onChange={editorChangeHandler}
            path={currentFile.name}
            defaultLanguage={currentFile.language}
            defaultValue={currentFile.value}
          />
        </Col>
        <Col className="my-4" md={2}>
          PREVIEW
        </Col>
      </Row>
    </>
  );
};

export default CodeEditor;
