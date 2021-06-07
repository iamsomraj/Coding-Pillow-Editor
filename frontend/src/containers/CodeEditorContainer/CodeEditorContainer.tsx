import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import FileEditor from "../../components/FileEditor/FileEditor";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CodeEditorContainer: React.FC = ({ history }: any) => {
  const { fetchFiles } = useActions();
  const {
    loading,
    data: files,
    error,
  } = useTypedSelector((state) => state.fetchedFiles);

  const { data: userInfo } = useTypedSelector((state) => state.loginUser);
  const { data: createdFile } = useTypedSelector((state) => state.createFile);

  useEffect(() => {
    if (userInfo || (userInfo && createdFile)) {
      fetchFiles();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, userInfo, createdFile]);

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
            <FileEditor fileList={files} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default CodeEditorContainer;
