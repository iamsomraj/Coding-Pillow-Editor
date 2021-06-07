/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button, Col, FormControlProps, Row } from "react-bootstrap";
import { EraserFill } from "react-bootstrap-icons";
import { IFile } from "../../types";
import { fileTypes } from "../../util";
import styles from "./FileEditor.module.css";

interface FileEditorProps {
  // onAdd: (file: IFile) => void;
  fileList: IFile[];
  // selectedFile: IFile;
  // onSelect: (id: string) => void;
  // onErase: (id: string) => void;
}

const FileEditor: React.FC<FileEditorProps> = (props) => {

  const [show, setShow] = useState(false);

  /**
   * @description: input file state
   */
  const [file, setFile] = useState({
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

  // /**
  //  * @description: Handles file creation and adds the file to file list
  //  * @param event
  //  * @returns void
  //  */
  // const saveBtnHandler: React.FormEventHandler<HTMLElement> = (event) => {
  //   event.preventDefault();
  //   const found = props.fileList.find(
  //     (savedFile) => savedFile.name === file.name
  //   );

  //   /**
  //    * If file exists, then return
  //    */
  //   if (found) {
  //     return;
  //   }

  //   props.onAdd({ ...file, name: file.name.trim(), id: file.name.trim() });
  //   handleClose();
  // };

  // /**
  //  * @description Handles input form and determines language from file name
  //  * @param event
  //  */
  // const inputChangeHandler: FormControlProps["onChange"] = (event) => {
  //   const fileDetail = event.target.value.split(".");
  //   const fileExt = fileDetail[fileDetail.length - 1];
  //   const fileLanguage:
  //     | "html"
  //     | "css"
  //     | "javascript"
  //     | "json"
  //     | "md"
  //     | "mjs"
  //     | "typescript" = fileTypes(fileExt);

  //   setFile({
  //     name: event.target.value,
  //     language: fileLanguage,
  //     value: "",
  //   });
  // };

  return (
    <div className="px-3">
      <div className="m-0 mb-4">FILES</div>
      <Row className="mb-4">
        <Col className="m-0 p-0">
          <Button className="rounded-0" onClick={handleShow}>
            New File
          </Button>
          {/* <NewFileModal
            show={show}
            name={file.name}
            onChange={inputChangeHandler}
            handleClose={handleClose}
            onSave={saveBtnHandler}
          /> */}
        </Col>
      </Row>
      {props.fileList.map((file) => {
        return (
          <Row
            key={file._id}
            // className={`${
            //   props.selectedFile.id === file.id ? "bg-primary" : "bg-secondary"
            // }`}
            // onClick={() => props.onSelect(file.id)}
          >
            <Col className="d-flex justify-content-between align-items-center">
              {file.name}
              {/* {props.selectedFile.id === file.id && ( */}
              <EraserFill
                className={styles.clearBtn}
                // onClick={() => props.onErase(file.id)}
              />
              {/* )} */}
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default FileEditor;
