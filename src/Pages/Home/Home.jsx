import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import Header from "D:/MERN/recipe-app/src/Components/header/Header.jsx";
import Card from "D:/MERN/recipe-app/src/Components/card/Card";
import home from "../../LOGO/burger.png";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState(null);
  const [selectedMeal, setSelecctedMeal] = useState([]);
  const [recipeExist, setRecipeExist] = useState(false);
  const APP_ID = process.env.REACT_APP_API_ID;

  // const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const url = `https://www.themealdb.com/api/json/v1/${APP_ID}/search.php?s=${query}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipe(data.meals);
      console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelecctedMeal={setSelecctedMeal}
        // mealTypes={mealTypes}
        getData={getData}
        recipeExist={recipeExist}
        setRecipeExist={setRecipeExist}
      />
      {!recipes && <img className="homeIMG" src={home} alt="home" />}
      {recipeExist && !recipes && <h1>Sorry!! try another food.</h1>}
      {recipes?.length > 0 && <Card recipes={recipes} />}
    </div>
  );
};

export default Home;
