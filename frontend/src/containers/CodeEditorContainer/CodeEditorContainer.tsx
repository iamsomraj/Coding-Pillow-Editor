/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import FileEditor from "../../components/FileEditor/FileEditor";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CodeEditorContainer: React.FC = () => {
  const { fetchFiles } = useActions();
  const {
    loading,
    data: files,
    error,
  } = useTypedSelector((state) => state.fetchedFiles);

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <>
      <Row className="my-3">
        <Col className="my-4" md={3}>
          {files && <FileEditor fileList={files} />}
        </Col>
        {/* <Col className="my-4" md={3}>
          <FileEditor
            selectedFile={currentFile}
            onAdd={addFileHandler}
            onSelect={selectFileHandler}
            onErase={eraseFileHandler}
            fileList={files}
          />
        </Col>
        <Col className="my-4" md={6}>
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
        <Col className="my-4" md={3}>
          <Row className="mb-2">
            <div className="mb-4">PREVIEW</div>
            <Preview currentFile={currentFile} />
          </Row>
        </Col> */}
      </Row>
    </>
  );
};

export default CodeEditorContainer;
