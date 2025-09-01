import SearchBar from "./components/SearchBar";
import InitialState from "./components/InitialState";
import RecipeCards from "./components/RecipeCards";
import LoadingState from "./components/LoadingState";
import "./App.css";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const searchVal = useRef("");

  const searchHandler = () => {
    setQuery(searchVal.current.value);
    searchVal.current.value = "";
  };

  const onEnterClick = (event) => {
    if (event.key === "Enter") {
      setQuery(searchVal.current.value);
      searchVal.current.value = "";
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchApiData = async () => {
      const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApiData();
  }, [query]);

  if (error) console.log(error);
  console.log(recipes);

  return (
    <center className="app-container">
      <SearchBar
        searchVal={searchVal}
        searchHandler={searchHandler}
        onEnterClick={onEnterClick}
      ></SearchBar>
      {!query ? (
        <InitialState />
      ) : isLoading ? (
        <LoadingState />
      ) : (
        <RecipeCards recipes={recipes} query={query} />
      )}
    </center>
  );
};

export default App;
