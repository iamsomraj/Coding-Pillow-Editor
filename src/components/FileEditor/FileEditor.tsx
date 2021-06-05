import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FileEarmarkPlusFill } from "react-bootstrap-icons";
import { IFile } from "../../types";
import NewFileModal from "./NewFileModal/NewFileModal";

type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

const FileEditor: React.FC = () => {
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
    console.log({ file });
    handleClose();
  };

  const inputChangeHandler: React.ChangeEventHandler<FormControlElement> = (
    event
  ) => {
    const fileDetail = event.target.value.split(".");
    const fileExt = fileDetail[fileDetail.length - 1];

    setFile({
      name: event.target.value,
      language: fileExt,
      value: "",
    });
  };

  return (
    <>
      <Row>
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
    </>
  );
};

export default FileEditor;
