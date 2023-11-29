import { TextField } from "@mui/material";

function SearchBar({ searchNote, handleSearchNote}){
   
    const handleSearch = (e) => {
        handleSearchNote(e.target.value);
    };

    return(
    <div className="mb-2">
        <TextField
      label="Search"
      variant="outlined"
      fullWidth
      size="small"
      className="p-2 rounded bg-gray-200" 
      value={searchNote}
      onChange={handleSearch}
    />
    </div>
    )
}

export default SearchBar;