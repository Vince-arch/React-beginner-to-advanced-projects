import { useState } from "react";
import { TextField } from "@mui/material";

function SearchBar(){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return(
    <div className="mb-2">
        <TextField
      label="Search"
      variant="outlined"
      fullWidth
      size="small"
      className=" p-2 rounded bg-gray-200" 
      value={searchTerm}
      onChange={handleSearch}
    />
    </div>
    )
}

export default SearchBar;