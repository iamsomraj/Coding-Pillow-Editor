import { useState } from "react";
import Editor from "@monaco-editor/react";
import { editorConfig } from "../../config/config";
import { Col, Row } from "react-bootstrap";
import FileEditor from "../FileEditor/FileEditor";
import { IFiles } from "../../types";
// import { files } from "../../data/files";

const CodeEditor: React.FC = () => {
  const [files, setFiles] = useState<IFiles>();

  return (
    <>
      <Row className="my-3">
        <Col className="my-4" md={2}>
          <FileEditor />
        </Col>
        <Col className="my-4" md={8}>
          <Editor
            height={editorConfig.height}
            theme={editorConfig.theme}
            // path={file.name}
            // defaultLanguage={file.language}
            // defaultValue={file.value}
          />
        </Col>
        <Col className="my-4" md={2}>
          Preview
        </Col>
      </Row>
    </>
  );
};

export default CodeEditor;
