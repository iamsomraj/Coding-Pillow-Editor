import Editor, { OnChange } from "@monaco-editor/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { editorConfig } from "../../config/config";
import { files as defaultFiles } from "../../data/files";
import { IFile, IFiles } from "../../types";
import Terminal from "../Terminal/Terminal";
import FileEditor from "../FileEditor/FileEditor";
import Preview from "../Preview/Preview";

const CodeEditor: React.FC = () => {
  /**
   * @type: object
   * @description: storing all the file with name, value, language
   */
  const [files, setFiles] = useState<IFiles>(defaultFiles);

  /**
   * @type: object
   * @description: stores current selected file
   */
  const [currentFile, setCurrentFile] = useState<IFile>(files["script.js"]);

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
    if (!file) return;

    if (files[file]) setCurrentFile(files[file]);
  };

  /**
   *
   * @description: updating main files state with a new file
   * @param file
   */
  const addFileHandler = (file: IFile) => {
    if (file && file.name) {
      const currFiles = { ...files };
      currFiles[file.name.trim()] = file;
      setFiles(currFiles);
    }
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
    currFiles[currentFile.name].value = enteredValue;
    setFiles(currFiles);
  };

  const eraseFileHandler = (fileName: string) => {
    if (!fileName) return;

    if (!files[fileName]) return;

    const currFiles = { ...files };
    currFiles[fileName].value = "";
    setFiles(currFiles);
  };

  return (
    <>
      <Row className="my-3">
        <Col className="my-4" md={2}>
          <FileEditor
            selectedFile={currentFile.name}
            onAdd={addFileHandler}
            onSelect={selectFileHandler}
            onErase={eraseFileHandler}
            fileList={fileNames}
          />
        </Col>
        <Col className="my-4" md={8}>
          <Row className="mb-2">
            <div className="mb-4">EDITOR</div>
            {currentFile && (
              <Editor
                height={editorConfig.height}
                theme={editorConfig.theme}
                onChange={editorChangeHandler}
                path={currentFile.name}
                language={currentFile.language}
                value={currentFile.value}
              />
            )}
          </Row>
          <Row className="mb-3">
            <Terminal />
          </Row>
        </Col>
        <Col className="my-4" md={2}>
          <Row className="mb-2">
            <div className="mb-4">PREVIEW</div>
            <Preview
              htmlFile={{
                name: "sample.html",
                language: "html",
                value: `This is a static text preview for check`,
              }}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CodeEditor;
