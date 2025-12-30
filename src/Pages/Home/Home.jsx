import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Header from "D:/MERN/recipe-app/src/Components/header/Header.jsx";
import Card from "D:/MERN/recipe-app/src/Components/card/Card";
import home from "../../LOGO/burger.png";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);
  const [selectedMeal, setSelecctedMeal] = useState([]);
  const [recipeExist, setRecipeExist] = useState(false);
  const APP_ID = process.env.REACT_APP_API_ID;

  const location = useLocation();

  // const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const url = `https://www.themealdb.com/api/json/v1/${APP_ID}/search.php?s=${query}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipe(data.meals || []);
      console.log(data.meals);
    } catch (error) {
      console.log(error);
      setRecipe([]);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setRecipe([]);
      setRecipeExist(false);
      setQuery("");
    }
  }, [location.pathname]);

  return (
    <div className="home-container">
      <div className="falling-food">
        <span>🍕</span>
        <span>🍔</span>
        <span>🍟</span>
        <span>🌭</span>
        <span>🍗</span>
        <span>🍖</span>
        <span>🥗</span>
        <span>🍝</span>
        <span>🍛</span>
        <span>🍜</span>
        <span>🍣</span>
        <span>🍱</span>
        <span>🥪</span>
        <span>🌮</span>
        <span>🌯</span>
        <span>🥙</span>
        <span>🍲</span>
        <span>🥘</span>
        <span>🍰</span>
        <span>🍪</span>
        <span>🍩</span>
        <span>🍦</span>
        <span>🍫</span>
        <span>🍬</span>
      </div>
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
      {!recipeExist && <img className="homeIMG" src={home} alt="home" />}
      {recipeExist && recipes.length === 0 && (
        <>
          <img className="homeIMG" src={home} alt="home" />
          <h1>Sorry!! try another food.</h1>
        </>
      )}
      {recipes.length > 0 && <Card recipes={recipes} />}
    </div>
  );
};

export default Home;
