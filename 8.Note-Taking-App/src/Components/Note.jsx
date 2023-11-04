import DeleteIcon from '@mui/icons-material/Delete';


function Note({id,text,date}){
  return (
    <div name="note-container" className='bg-yellow-200  p-4 h-60 rounded flex flex-col justify-between'>
      <span className='whitespace-normal break-words'>{text}</span>
      <div name='note-footer' className='flex items-center justify-between'>
        <small>{date}</small>
       <DeleteIcon />
      </div>
    </div>
  )
}

export default Note;