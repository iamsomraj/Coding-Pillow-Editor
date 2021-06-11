import { Button, Col, Row } from "react-bootstrap";
import { FileTextFill } from "react-bootstrap-icons";
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
      <Col
        data-testid="file-item"
        className="d-flex p-2 justify-content-between align-items-center"
      >
        <FileTextFill />
        {props.file.name}
        {props.selectedFile._id === props.file._id && (
          <div>
            <Button
              data-testid="file-item__save-btn"
              className="rounded-0 btn-sm"
              onClick={() => props.onSave(props.file)}
            >
              Save
            </Button>
            <Button
              data-testid="file-item__erase-btn"
              className="rounded-0 btn-sm"
              onClick={() => props.onErase(props.file)}
            >
              Erase
            </Button>
            <Button
              data-testid="file-item__delete-btn"
              className="rounded-0 btn-sm btn-danger"
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
