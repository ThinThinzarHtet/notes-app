import { Button, Modal } from "react-bootstrap";
import { useNote } from "../NoteLayout";
import { useNavigate } from "react-router-dom";

type DeleteConfirmModalProps = {
  onDeleteNote: (id: string) => void;
  show: boolean;
  handleClose: () => void;
};

const DeleteConfirmModal = ({
  onDeleteNote,
  show,
  handleClose,
}: DeleteConfirmModalProps) => {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <Modal show={show} centered>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Confirm Delete?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">
          Are you sure you want to delete this note?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          variant="danger"
          onClick={() => {
            onDeleteNote(note.id);
            navigate("/notes-app");
          }}
        >
          Delete
        </Button>
        <Button variant="outline-secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmModal;
