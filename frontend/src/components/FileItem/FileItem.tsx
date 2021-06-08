import { Button, Col, Row } from "react-bootstrap";
import { IFile } from "../../types";

interface FileItemProps {
  selectedFile: IFile;
  file: IFile;
  onSave: (file: IFile) => void;
  onSelect: (file: IFile) => void;
  onErase: (file: IFile) => void;
  onDelete: (file: IFile) => void;
}

const FileItem: React.FC<FileItemProps> = (props) => {
  return (
    <Row
      className={`${
        props.selectedFile._id === props.file._id
          ? "bg-primary"
          : "bg-secondary"
      }`}
      onClick={() => props.onSelect(props.file)}
    >
      <Col className="d-flex p-2 justify-content-between align-items-center">
        {props.file.name}
        {props.selectedFile._id === props.file._id && (
          <div>
            <Button
              className="rounded-0"
              onClick={() => props.onSave(props.file)}
            >
              Save
            </Button>
            <Button
              className="rounded-0"
              onClick={() => props.onErase(props.file)}
            >
              Erase
            </Button>
            <Button
              className="rounded-0 btn-danger"
              onClick={() => props.onDelete(props.file)}
            >
              Delete
            </Button>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default FileItem;
