import RecipeCard from "./RecipeCard";
import NotFoundState from "./NotFoundState";

const RecipeCards = ({ recipes, query }) => {
  return (
    <>
      <p className="result-msg">Search results for: {query}</p>
      <div className="card-container">
        {recipes && recipes.length > 0
          ? recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe}></RecipeCard>
            ))
          : query && <NotFoundState />}
      </div>
    </>
  );
};

export default RecipeCards;
