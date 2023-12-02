import AddNote from './AddNote';
import Note from './Note'
import { useNoteContext } from './NoteContext';

function NotesList({ searchTerm }) {
  const { notes, addNote, deleteNote } = useNoteContext();
  const handleDeleteNote = deleteNote;

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div name='notes-container' className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 '>
      {filteredNotes.map((note) => (
        <Note
          id={note.id}
          key={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={addNote} />
    </div>
  );
}

export default NotesList;
