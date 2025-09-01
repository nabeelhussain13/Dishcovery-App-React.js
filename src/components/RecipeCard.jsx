import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card recipe-card">
      <img src={recipe?.strMealThumb} alt="..." />
      <div className="card-body">
        <div className="card-title recipe-title">{recipe?.strMeal}</div> <hr />
        <div className="card-text body-container">
          Type: <span className="type-title">{recipe?.strCategory}</span>
          <br />
          Cuisine: <span className="type-title">{recipe?.strArea}</span>
        </div>
        <Link to={`/recipe/${recipe?.idMeal}`} className="btn  my-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
