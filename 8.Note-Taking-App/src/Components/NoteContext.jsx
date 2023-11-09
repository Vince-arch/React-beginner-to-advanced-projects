import {createContext, useContext, useState} from 'react';
import {nanoid} from 'nanoid'

const NoteContext = createContext()

    export function useNoteContext(){
    return( 
        useContext(NoteContext)
)};

export function NoteProvider ({children}){
    const [notes, setNotes] = useState([{
        id: nanoid(),
        text:"This is my first Note",
        date:"02/11/2023"
    },
    {
        id: nanoid(),
        text:"This is my second Note",
        date:"01/11/2023"
    },
    {   id: nanoid(),
        text:"This is my third Note",
        date:"31/10/2023"
    }
])

const addNote = (text)=>{
    const date = new Date;
    const newNote = {
        id:nanoid(),
        text: text,
        date:date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
};

const deleteNote = (id) =>{
    const newNotes = notes.filter(note => note.id !==id)
    setNotes(newNotes)
}

return  (
    <NoteContext.Provider value={{notes, addNote,deleteNote,setNotes}}>
        {children}
    </NoteContext.Provider>
)
}

