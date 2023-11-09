import DeleteIcon from '@mui/icons-material/Delete';


function Note({id,text,date,handleDeleteNote}){
  
  const handleDeleteClick = ()=>{
    handleDeleteNote(id); 
   };
  
   return (
    <div name="note-container" className='bg-yellow-200 p-6 h-auto w-auto rounded flex flex-col justify-between'>
      <span className='h-auto whitespace-normal break-words '>{text}</span>
      <div name='note-footer' className='flex items-center justify-between'>
        <small>{date}</small>
       <DeleteIcon onClick = {handleDeleteClick} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Note;