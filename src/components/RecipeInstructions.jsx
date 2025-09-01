const RecipeInstructions = ({ recipeInfo }) => {
  return (
    <>
      <div className="instructions-title">Instructions</div>
      <p className="instruction-body">{recipeInfo?.strInstructions}</p>
    </>
  );
};

export default RecipeInstructions;
