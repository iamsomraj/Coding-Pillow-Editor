import { useState } from "react";
import { Button, Col, FormControlProps, Row } from "react-bootstrap";
import { EraserFill } from "react-bootstrap-icons";
import { IFile } from "../../types";
import { fileTypes } from "../../util";
import NewFileModal from "../NewFileModal/NewFileModal";
import styles from "./FileEditor.module.css";

interface FileEditorProps {
  onAdd: (file: IFile) => void;
  fileList: string[];
  selectedFile: string;
  onSelect: (file: string) => void;
  onErase: (file: string) => void;
}

const FileEditor: React.FC<FileEditorProps> = (props) => {
  const [show, setShow] = useState(false);

  /**
   * @description: input file state
   */
  const [file, setFile] = useState<IFile>({
    name: "",
    language: "",
    value: "",
  });

  /**
   * @description: Initializes the input form
   */
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

  /**
   * @description: Handles file creation and adds the file to file list
   * @param event
   * @returns void
   */
  const saveBtnHandler: React.FormEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    if (props.fileList.includes(file.name.trim())) {
      return;
    }
    props.onAdd({ ...file, name: file.name.trim() });
    handleClose();
  };

  /**
   * @description Handles input form and determines language from file name
   * @param event
   */
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
      <div className="mb-4">FILES</div>
      <Row className="mb-4">
        <Col className="m-0 p-0">
          <Button className="rounded-0" onClick={handleShow}>
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
            className={`${
              props.selectedFile === file ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => props.onSelect(file)}
          >
            <Col className="d-flex justify-content-between align-items-center">
              {file}
              <EraserFill
                className={styles.clearBtn}
                onClick={() => props.onErase(file)}
              />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default FileEditor;