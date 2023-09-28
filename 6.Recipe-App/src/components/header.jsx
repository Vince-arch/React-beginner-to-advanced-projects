import axios from "axios";
import { useState } from "react";
import RecipeCard from "./recipe"; // Updated import statement

function Header() { 
  const [inputValue, setinputValue] = useState("");
  const [recipeList, updateRecipeList] = useState([]);

  const APP_ID= import.meta.env.VITE_APP_ID;
  const APP_KEY= import.meta.env.VITE_APP_KEY;

  const fetchRecipe = async (food) => {
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      console.log(response.data.hits)
      updateRecipeList(response.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    fetchRecipe(inputValue);
    setinputValue('');
  }

  return (
    <div name='container' className='flex flex-col'>
      <div name='header-section' className='text-white bg-gray-800 flex items-center justify-between w-full p-5 text-2xl font-bold shadow-md'>
        <div name='appnamecontainer' className='flex items-center'>
          <img src='https://www.svgrepo.com/show/356620/pizza-slice-02.svg' className='w-16 h-16 flex mr-2' alt='Pizza'/>
          Recipe Finder
        </div>
        <div name='search-container' className='flex items-center bg-white p-2 rounded w-1/2'>
          <img src="https://www.svgrepo.com/download/522443/search.svg" alt="Search Icon" className="w-6 h-6 mr-2" />
          <form onSubmit={handleSumbit}>
            <input
                type="text"
                value={inputValue} 
                className="text-black border-none outline-none text-base font-bold w-full" 
                onChange={(e) => setinputValue(e.target.value)}
                placeholder="Search for recipe... " />
          </form>
        </div>
      </div>
      <RecipeCard recipeList={recipeList} /> {/* Passing the recipeList to RecipeCard component */}
    </div>
  )
}

export default Header;
