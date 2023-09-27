import './index.css'
import Header from './components/header';
import { useState } from 'react';

function App() { 
  const [recipeList, updateRecipeList] = useState([]);
  return (
    <div>
      <Header updateRecipeList={updateRecipeList} />
   </div>
  )
}

export default App;
