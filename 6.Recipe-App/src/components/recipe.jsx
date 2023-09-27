import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function RecipeCard({ recipeList }) {
  const [show, setShow] = React.useState(false);
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  const handleIngredientsClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  }

  return (
    <>
      <div name='recipeListContainer' className="flex flex-row flex-wrap justify-evenly p-7.5 ">
        {recipeList.length > 0 ? (
          recipeList.map((recipeObj, index) => (
            <div name='recipeCard' className="border border-solid border-gray-300 bg-gray-100 hover:bg-gray-200 text-center shadow-2xl my-5 flex flex-col w-75 p-2.5 " key={index}>
              <img src={recipeObj.recipe.image} className="h-200 " alt={recipeObj.recipe.label} />
              <div name='RecipeName' className="text-base font-bold text-black pb-5">{recipeObj.recipe.label}</div>
              <button onClick={() => handleIngredientsClick(recipeObj.recipe)} className="text-base font-bold text-black my-1.5 border border-solid border-green-300 hover:bg-green-500 transition border-opacity-100 duration-300">Ingredients</button>
              <button onClick={() => window.open(recipeObj.recipe.url)} className="text-base font-bold text-black my-1.5 border border-solid border-red-300 hover:bg-red-500 transition border-opacity-100 duration-300">See More</button>
            </div>
          ))
        ) : ( 
          <div className="text-2xl font-bold text-black-300 p-0.1">
            <img className="h-screen w-screen" src="/src/assets/default1.jpg" alt="Pizza" />
          </div>
        )}
      </div>

      {/* Ingredients Dialog */}
      {selectedRecipe && (
        <Dialog open={show}>
          <DialogTitle id="alert-dialog-slide-description">Ingredients</DialogTitle>
          <DialogContent>
            <table className="w-full border-collapse border border-solid border-black">
              <thead>
                <tr>
                  <th className="border border-transparent border-black">Ingredient</th>
                  <th className="border border-transparent border-black">Weight</th>
                </tr>
              </thead>
              <tbody>
                {selectedRecipe.ingredients.map((ingredientObj, index) => (
                  <tr key={index} className="border border-solid border-black">
                    <td className="border border-transparent border-black">{ingredientObj.text}</td>
                    <td className="border border-transparent border-black">{Math.round(ingredientObj.weight)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <DialogActions>
              <button onClick={() => window.open(selectedRecipe.url)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded">See More</button>
              <button onClick={() => setShow(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close</button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default RecipeCard;
