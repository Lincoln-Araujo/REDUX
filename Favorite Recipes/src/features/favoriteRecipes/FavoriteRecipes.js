import React from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'



export const FavoriteRecipes = (props) =>{
  
  
  const {favoriteRecipes, dispatch} = favoriteRecipes;
  const onRemoveRecipeHandler = (recipe) => {
    

  };

  
  return (
    <div id='favorite-recipes' className="recipes-container">
      {['REPLACE_ME'].map(createRecipeComponent)}
    </div>
  );

  
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  }
  
};
