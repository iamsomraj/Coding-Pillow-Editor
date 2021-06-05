import { Button, Form, Modal } from "react-bootstrap";

type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

interface NewFileModalProps {
  show: boolean;
  name: string;
  onChange: React.ChangeEventHandler<FormControlElement>;
  onSave: React.MouseEventHandler<HTMLElement>;
  handleClose: () => void;
}

const NewFileModal: React.FC<NewFileModalProps> = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New File</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewFileModal;
