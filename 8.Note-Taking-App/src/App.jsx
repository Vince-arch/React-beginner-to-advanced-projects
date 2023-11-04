import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import NotesList from './Components/NotesList'
import { useState } from "react";
import {nanoid} from 'nanoid'
import { NoteProvider } from "./Components/NoteContext";

function App() {
    

 return(
 <div name= 'container' className=" pl-2 pr-2 flex flex-col m-auto ">
    <NoteProvider>
    <Header />
    <SearchBar/>
    <NotesList  />
    </NoteProvider>
 </div>
 )}
export default App
