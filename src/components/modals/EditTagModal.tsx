
import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { Tag } from "../../App";

type EditTagModalProps = {
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
  show: boolean;
  availableTags: Tag[];
  handleClose: () => void;
};

const EditTagModal = ({
  onUpdateTag,
  onDeleteTag,
  availableTags,
  show,
  handleClose,
}: EditTagModalProps) => {
  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    onClick={() => onDeleteTag(tag.id)}
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTagModal;
