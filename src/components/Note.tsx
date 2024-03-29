import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DeleteConfirmModal from "./modals/DeleteConfirmModal";
import { useState } from "react";

type NoteProps = {
  onDelete: (id: string) => void;
};
export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const [deleteConfirmModalIsOpen, setDeleteConfirmModalIsOpen] =
    useState(false);
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/notes-app/${note.id}/edit`}>
              <Button type="button" variant="primary">
                Edit
              </Button>
            </Link>
            <Button
              type="button"
              variant="outline-danger"
              onClick={() => {
                setDeleteConfirmModalIsOpen(true);
              }}
            >
              Delete
            </Button>
            <Link to="/notes-app">
              <Button type="button" variant="outline-secondary">
                Back
              </Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
      {deleteConfirmModalIsOpen && (
        <DeleteConfirmModal
          onDeleteNote={onDelete}
          show={deleteConfirmModalIsOpen}
          handleClose={() => setDeleteConfirmModalIsOpen(false)}
        />
      )}
    </>
  );
}
