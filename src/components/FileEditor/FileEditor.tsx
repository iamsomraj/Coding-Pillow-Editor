import { useState } from "react";
import { Button, Col, FormControlProps, Row } from "react-bootstrap";
import { FileEarmarkPlusFill, Trash } from "react-bootstrap-icons";
import { IFile } from "../../types";
import { fileTypes } from "../../util";
import NewFileModal from "./NewFileModal/NewFileModal";

interface FileEditorProps {
  onAdd: (file: IFile) => void;
  fileList: string[];
  selectedFile: string;
  onSelect: (file: string) => void;
}

const FileEditor: React.FC<FileEditorProps> = (props) => {
  const [show, setShow] = useState(false);

  const [file, setFile] = useState<IFile>({
    name: "",
    language: "",
    value: "",
  });

  const initForm = () => {
    setFile({
      name: "",
      language: "",
      value: "",
    });
  };

  const handleClose = () => {
    setShow(false);
    initForm();
  };
  const handleShow = () => setShow(true);

  const saveBtnHandler: React.MouseEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    if (props.fileList.includes(file.name)) {
      return;
    }
    props.onAdd(file);
    handleClose();
  };

  const inputChangeHandler: FormControlProps["onChange"] = (event) => {
    const fileDetail = event.target.value.split(".");
    const fileExt = fileDetail[fileDetail.length - 1];
    const fileLanguage:
      | "html"
      | "css"
      | "javascript"
      | "json"
      | "md"
      | "mjs"
      | "typescript" = fileTypes(fileExt);

    setFile({
      name: event.target.value,
      language: fileLanguage,
      value: "",
    });
  };

  return (
    <>
      <h5 className="mb-4">FILES</h5>
      <Row className="mb-4">
        <Col>
          <Button onClick={handleShow}>
            <FileEarmarkPlusFill className="px-1" size={24} />
            New File
          </Button>
          <NewFileModal
            show={show}
            name={file.name}
            onChange={inputChangeHandler}
            handleClose={handleClose}
            onSave={saveBtnHandler}
          />
        </Col>
      </Row>
      {props.fileList.map((file) => {
        return (
          <Row
            key={file}
            className={`my-1 p-1 ${
              props.selectedFile === file ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => props.onSelect(file)}
          >
            <Col>
              {file}
              <Trash style={{ cursor: "pointer" }} />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default FileEditor;
