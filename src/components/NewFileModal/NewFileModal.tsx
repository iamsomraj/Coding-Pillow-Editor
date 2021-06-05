import { Button, Form, Modal, FormControlProps } from "react-bootstrap";

interface NewFileModalProps {
  show: boolean;
  name: string;
  onChange: FormControlProps["onChange"];
  onSave: React.FormEventHandler<HTMLFormElement>;
  handleClose: () => void;
}

const NewFileModal: React.FC<NewFileModalProps> = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New File</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.onSave}>
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
