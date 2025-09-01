import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeDetailCard from "./RecipeDetailCard";
import IngredientsList from "./IngredientsList";
import RecipeInstructions from "./RecipeInstructions";
import RecipeDetailLoading from "./RecipeDetailLoading";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeInfo, setRecipeInfo] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setRecipeInfo(data.meals[0]);
      } catch (error) {
        setError(error);
      }
    };

    fetchRecipeInfo();
  }, [id]);

  const tags = recipeInfo?.strTags ? recipeInfo.strTags.split(",") : [];

  return (
    <>
      {recipeInfo ? (
        <div className="detail-container">
          <RecipeDetailCard recipeInfo={recipeInfo} tags={tags} />
          <IngredientsList recipeInfo={recipeInfo} />
          <RecipeInstructions recipeInfo={recipeInfo} />
        </div>
      ) : (
        <RecipeDetailLoading />
      )}
    </>
  );
};

export default RecipeDetail;
