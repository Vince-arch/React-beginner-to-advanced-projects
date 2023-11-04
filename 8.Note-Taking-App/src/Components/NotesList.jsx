import AddNote from './AddNote';
import Note from './Note'
import { useNoteContext } from './NoteContext';

function NotesList(){
   const { notes, addNote } = useNoteContext();
 return(
<div name='notes-container' className='bg-blue-200 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 '>
   {notes.map((note)=> (
      <Note key={note.id} text={note.text} date={note.date}/>
   ))}
   <AddNote handleAddNote={addNote}/>
 </div>
)}

export default NotesList;