import { useState } from "react";
import { Button, Form, Modal, FormControlProps } from "react-bootstrap";
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
    let found = null;
    if (files && files.length > 0) {
      found = files.find((savedFile) => savedFile.name === props.name);
    }

    if (found) {
      setMessage("File already exists");
    }

    props.onSave();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New File</Modal.Title>
        {message && <Message>{message}</Message>}
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={createBtnHandler}>
          <Form.Group>
            <Form.Label>File Name</Form.Label>
            <Form.Control
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
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewFileModal;
