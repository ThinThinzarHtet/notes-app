import NoteForm from "./NoteForm";

type Props = {};

function NewNote(props: Props) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm />
    </>
  );
}

export default NewNote;
