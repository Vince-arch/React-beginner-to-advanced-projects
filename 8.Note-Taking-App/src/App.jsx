import React, { useState } from 'react';
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import NotesList from './Components/NotesList';
import { NoteProvider, useNoteContext } from "./Components/NoteContext";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div name='container' className='pl-2 pr-2 flex flex-col m-auto'>
      <Header />
      <SearchBar searchNote={searchTerm} handleSearchNote={setSearchTerm} />
      <NotesList searchTerm={searchTerm} />
    </div>
  );
}

function AppWithProvider() {
  return (
    <NoteProvider>
      <App />
    </NoteProvider>
  );
}

export default AppWithProvider;
