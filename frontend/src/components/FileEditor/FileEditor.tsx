/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button, Col, FormControlProps, Row } from "react-bootstrap";
import { FileImage } from "react-bootstrap-icons";
import { useActions } from "../../hooks/useActions";
import { IFile } from "../../types";
import { fileTypes } from "../../util";
import FileItem from "../FileItem/FileItem";
import NewFileModal from "../NewFileModal/NewFileModal";

interface FileEditorProps {
  fileList: IFile[];
  selectedFile: IFile;
  onSelect: (file: IFile) => void;
  onErase: (file: IFile) => void;
  onSave: (file: IFile) => void;
  onDelete: (file: IFile) => void;
}

const FileEditor: React.FC<FileEditorProps> = (props) => {
  const { createFile } = useActions();

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

  /**
   * @description: Handles file creation and adds the file to file list
   * @param event
   * @returns void
   */
  const createFileHandler = () => {
    createFile(file.name, file.language, file.value);
    handleClose();
  };

  /**
   * @description Handles input form and determines language from file name
   * @param event
   */
  const inputChangeHandler: FormControlProps["onChange"] = (event) => {
    const fileDetail = event.target.value.split(".");
    let fileLanguage = "";
    if (fileDetail.length > 1) {
      const fileExt = fileDetail[fileDetail.length - 1];
      fileLanguage = fileTypes(fileExt);
    }
    setFile({
      name: event.target.value,
      language: fileLanguage,
      value: "",
    });
  };

  return (
    <div className="px-3">
      <div className="m-0 mb-4">FILES</div>
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
            onSave={createFileHandler}
          />
        </Col>
      </Row>
      {props.fileList.map((file) => {
        return (
          <FileItem
            key={file._id}
            selectedFile={props.selectedFile}
            file={file}
            onDelete={props.onDelete}
            onErase={props.onErase}
            onSave={props.onSave}
            onSelect={props.onSelect}
          />
        );
      })}
    </div>
  );
};

export default FileEditor;
