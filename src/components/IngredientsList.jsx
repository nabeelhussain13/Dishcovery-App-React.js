const IngredientsList = ({ recipeInfo }) => {
  return (
    <>
      <div className="ingredients-title">Ingredients</div>
      <ul className="list-group list-group-numbered ing-ul">
        {Array.from({ length: 20 }, (_, i) => {
          const ingredient = recipeInfo[`strIngredient${i + 1}`];
          const measure = recipeInfo[`strMeasure${i + 1}`];

          return (
            ingredient &&
            ingredient.trim() !== "" && (
              <li className="list-group-item" key={i}>
                {measure} {ingredient}
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export default IngredientsList;
