import { Button } from "@mui/material";
import { useState } from "react";

function AddNote({handleAddNote}){
    const [noteText, setNoteText] = useState('');

    const characterLimit = 250;

    const handleChange=(e)=>{
        if (characterLimit - e.target.value.length>=0){
            setNoteText(e.target.value)
        }
    }   

    const handleSaveClick=()=>{
        if (noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText('')
        }        
    }

    return(
        <div name="new-note" className="bg-green-200 p-4 h-auto rounded flex flex-col justify-between ">
        <textarea
        rows='8'
        columns='10'
        placeholder='add a new note...'
        value={noteText}
        onChange={handleChange}
        className="h-auto border-none resize-none outline-none bg-green-200"
        >
        </textarea>
        <div name='footer' className="flex items-center justify-between">
        <small className="text-sm">{characterLimit - noteText.length} Remaining</small>
        <Button
            variant='outlined'
            name='save'
            size="small"
            className="bg-gray-500 rounded" 
            onClick={handleSaveClick}
        >
            Save
        </Button>
        </div>
        </div>
    
)}
export default AddNote;