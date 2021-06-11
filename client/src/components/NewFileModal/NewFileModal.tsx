import { useState } from "react";
import { Button, Form, FormControlProps, Modal } from "react-bootstrap";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Message from "../Message/Message";

interface NewFileModalProps {
  show: boolean;
  name: string;
  onChange: FormControlProps["onChange"];
  onSave: () => void;
  handleClose: () => void;
}

const NewFileModal: React.FC<NewFileModalProps> = (props) => {
  const [message, setMessage] = useState("");
  const { data: files } = useTypedSelector((state) => state.fetchedFiles);

  const createBtnHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (props.name.trim().length === 0) {
      setMessage("Invalid file name");
      return;
    }

    let found;
    if (files && files.length > 0) {
      found = files.find((savedFile) => savedFile.name === props.name);
    }

    if (found) {
      setMessage("File already exists");
      return;
    }

    props.onSave();
  };

  return (
    <Modal
      data-testid="new-file-modal"
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create New File</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={createBtnHandler}>
          {message && <Message>{message}</Message>}
          <Form.Group>
            <Form.Label>File Name</Form.Label>
            <Form.Control
              data-testid="file-name-input"
              name="file-name"
              type="text"
              value={props.name}
              onChange={props.onChange}
              placeholder="Your file name.."
            />
            <Form.Text className="text-muted">
              File name should contain it's extension
            </Form.Text>
          </Form.Group>
          <Button data-testid="create-file-btn" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          data-testid="close-modal-btn"
          variant="secondary"
          onClick={props.handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewFileModal;
