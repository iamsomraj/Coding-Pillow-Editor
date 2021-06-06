/* eslint-disable @typescript-eslint/no-unused-vars */
import { OnChange } from "@monaco-editor/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import FileEditor from "../../components/FileEditor/FileEditor";
import Preview from "../../components/Preview/Preview";
import Terminal from "../../components/Terminal/Terminal";
import { files as defaultFiles } from "../../data/files";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IFile } from "../../types";

const CodeEditorContainer: React.FC = () => {
  /**
   * @type: array
   * @description: storing all the files with id, name, value, language
   */
  const [files, setFiles] = useState<IFile[]>([]);

  /**
   * @type: object
   * @description: stores current selected file object with id, name, value and language
   */
  let [currentFile, setCurrentFile] = useState<IFile>(Object);

  const { fetchFiles } = useActions();
  const { loading, data, error } = useTypedSelector(
    (state) => state.fetchedFiles
  );

  // useEffect(() => {
  //   // fetchFiles();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  /**
   *  @type: string[]
   *  @description: storing all the file names
   */
  let fileNames: string[] = [];
  if (files) fileNames = files.map((file) => file.name);

  /**
   * @description checks whether the file exists or not
   * @param id
   * @returns false if file not present else IFile
   */
  const fileExists = (id: string) => {
    if (id && files && files.length > 0) {
      const found = files.find((file) => file.id === id);
      if (found) {
        return found;
      } else {
        return false;
      }
    }
    return false;
  };

  /**
   *
   * @description: updates selected file on file select
   * @param file
   */
  const selectFileHandler = (id: string) => {
    if (id === null || id.length === 0) return;

    const found = fileExists(id);
    if (found) {
      setCurrentFile(found);
      // currentFile = found;
    }
  };

  /**
   *
   * @description: updating main files array with a new file
   * @param file
   */
  const addFileHandler = (file: IFile) => {
    if (fileExists(file.id)) return;

    if (file && file.name && files) {
      const currFiles = [...files, file];
      setFiles(currFiles);
    }

    debugger;
  };

  /**
   *
   * @description Updating file content of the selected file
   * @param enteredValue
   * @returns void
   */
  const editorChangeHandler: OnChange = (enteredValue) => {
    const currentSelectedFile = {
      ...currentFile,
      value: enteredValue ? enteredValue : "",
    };

    setCurrentFile((prevFile) => {
      return {
        ...prevFile,
        ...currentSelectedFile,
      };
    });

    setFiles((prevFiles) => {
      return prevFiles.map((file) =>
        file.id === currentFile.id ? currentSelectedFile : file
      );
    });
  };

  /**
   * @description erases the file content
   * @param id
   * @returns void
   */
  const eraseFileHandler = (id: string) => {
    if (!id || id.length === 0) return;

    const thisFile = fileExists(id);

    if (thisFile) {
      thisFile.value = "";
      setCurrentFile((prevFile) => {
        return {
          ...prevFile,
          ...thisFile,
        };
      });
      setFiles((prevFiles) => {
        return prevFiles.map((file) =>
          file.id === id ? { ...thisFile } : file
        );
      });
    }
  };

  return (
    <>
      <Row className="my-3">
        <Col className="my-4" md={2}>
          <FileEditor
            selectedFile={currentFile}
            onAdd={addFileHandler}
            onSelect={selectFileHandler}
            onErase={eraseFileHandler}
            fileList={files}
          />
        </Col>
        <Col className="my-4" md={8}>
          <Row className="mb-2">
            <div className="mb-4">EDITOR</div>
            <CodeEditor
              onEditorChange={editorChangeHandler}
              currentFile={currentFile}
            />
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
                id: "sample.html",
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

export default CodeEditorContainer;
