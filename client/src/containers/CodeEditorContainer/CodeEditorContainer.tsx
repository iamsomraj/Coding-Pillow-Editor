import { OnChange } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import Terminal from "../../components/Terminal/Terminal";
import FileEditor from "../../components/FileEditor/FileEditor";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IFile } from "../../types";
import Preview from "../../components/Preview/Preview";

const CodeEditorContainer: React.FC = ({ history }: any) => {
  let [selectedFile, setSelectedFile] = useState<IFile>(Object);

  const { fetchFiles, updateFile, deleteFile } = useActions();
  const {
    loading,
    data: files,
    error,
  } = useTypedSelector((state) => state.fetchedFiles);

  const { data: userInfo } = useTypedSelector((state) => state.loginUser);
  const { data: createdFile } = useTypedSelector((state) => state.createFile);
  const { data: updatedFile } = useTypedSelector((state) => state.updateFile);
  const { data: deletedFile } = useTypedSelector((state) => state.deleteFile);

  useEffect(() => {
    if (
      userInfo ||
      (userInfo && createdFile) ||
      (userInfo && updatedFile) ||
      (userInfo && deletedFile)
    ) {
      fetchFiles();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, userInfo, createdFile, updatedFile, deletedFile]);

  const selectFileHandler = (file: IFile) => {
    setSelectedFile((pfile) => ({ ...pfile, ...file }));
  };

  const updateHandler = (file: IFile, value: string) => {
    const updatedFile = { ...file };
    updatedFile.value = value;
    updateFile(
      updatedFile._id,
      updatedFile.name,
      updatedFile.language,
      updatedFile.value
    );
    setSelectedFile((prevFile) => {
      return {
        ...prevFile,
        ...updatedFile,
      };
    });
  };

  const eraseHandler = (file: IFile) => {
    updateHandler(file, "");
  };

  const saveHandler = (file: IFile) => {
    updateHandler(file, selectedFile.value);
  };

  const deleteHandler = (file: IFile) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Do you really want to delete " + file.name + "?")) {
      deleteFile(file._id);
    }
  };

  const editorChangeHandler: OnChange = (enteredValue) => {
    if (!enteredValue) return;
    setSelectedFile({
      ...selectedFile,
      value: enteredValue,
    });
  };

  return (
    <>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row className="my-3">
          <Col className="my-4" md={3}>
            <FileEditor
              fileList={files}
              selectedFile={selectedFile}
              onSelect={selectFileHandler}
              onErase={eraseHandler}
              onSave={saveHandler}
              onDelete={deleteHandler}
            />
          </Col>
          <Col className="my-4" md={6}>
            <Row className="mb-2">
              <div className="mb-4">EDITOR</div>
              <CodeEditor
                onEditorChange={editorChangeHandler}
                currentFile={files.find(
                  (file) => file._id === selectedFile._id
                )}
              />
            </Row>
            <Row className="mb-3">
              <Terminal />
            </Row>
          </Col>
          <Col className="my-4" md={3}>
            <Row className="mb-2">
              <div className="mb-4">PREVIEW</div>
              <Preview
                currentFile={files.find(
                  (file) => file._id === selectedFile._id
                )}
              />
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CodeEditorContainer;
