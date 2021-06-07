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

const CodeEditorContainer: React.FC = ({ history }: any) => {
  const [selectedFile, setSelectedFile] = useState<IFile>(Object);

  const { fetchFiles, updateFile } = useActions();
  const {
    loading,
    data: files,
    error,
  } = useTypedSelector((state) => state.fetchedFiles);

  const { data: userInfo } = useTypedSelector((state) => state.loginUser);
  const { data: createdFile } = useTypedSelector((state) => state.createFile);
  const { data: updatedFile } = useTypedSelector((state) => state.updateFile);

  useEffect(() => {
    if (userInfo || (userInfo && createdFile) || (userInfo && updatedFile)) {
      fetchFiles();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, userInfo, createdFile, updatedFile]);

  const selectFileHandler = (file: IFile) => {
    setSelectedFile(file);
  };

  const eraseHandler = (file: IFile) => {
    const updatedFile = { ...file, value: "" };
    updateFile(
      updatedFile._id,
      updatedFile.name,
      updatedFile.language,
      updatedFile.value
    );
    setSelectedFile((prevFile) => ({ ...prevFile, value: "" }));
    console.log(selectedFile);
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
            />
          </Col>
          <Col className="my-4" md={6}>
            <Row className="mb-2">
              <div className="mb-4">EDITOR</div>
              <CodeEditor
                onEditorChange={editorChangeHandler}
                currentFile={selectedFile}
              />
            </Row>
            <Row className="mb-3">
              <Terminal />
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CodeEditorContainer;
