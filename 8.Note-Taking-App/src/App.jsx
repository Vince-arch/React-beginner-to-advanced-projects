import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import NotesList from './Components/NotesList'
import { NoteProvider } from "./Components/NoteContext";
import { useState } from "react";

function App() {

const [searchTerm, setSearchTerm] = useState('');


 return(
 <div name= 'container' className=" pl-2 pr-2 flex flex-col m-auto ">
    <NoteProvider>
    <Header />
    <SearchBar  searchNote={searchTerm} handleSearchNote={setSearchTerm}/>
    <NotesList />
    </NoteProvider>
 </div>
 )}
export default App
