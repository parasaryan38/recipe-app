import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Home.css";
import Header from "../../Components/header/Header";
import Card from "../../Components/card/Card";
import home from "../../LOGO/burger.png";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);
  const [recipeExist, setRecipeExist] = useState(false);
  const APP_ID = process.env.REACT_APP_API_ID;
  const location = useLocation();

  const getData = async () => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/${APP_ID}/search.php?s=${query.trim()}`;
      const { data } = await axios(url);
      setRecipe(data.meals || []);
    } catch (error) {
      console.error("Could not fetch recipes", error);
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
    <main className="home-container">
      <Header query={query} setQuery={setQuery} getData={getData} setRecipeExist={setRecipeExist} />

      {!recipeExist && (
        <section className="welcomePanel" aria-label="Start searching for a recipe">
          <div className="welcomeCopy">
            <p className="sectionLabel">What’s cooking?</p>
            <h2>Fresh ideas are only one search away.</h2>
            <p>From comforting classics to new dinner inspiration, start with an ingredient or meal you love.</p>
          </div>
          <div className="welcomeIllustration" aria-hidden="true">
            <img src={home} alt="" />
            <span>✦</span><span>✦</span>
          </div>
        </section>
      )}

      {recipeExist && recipes.length === 0 && (
        <section className="emptyState">
          <img src={home} alt="" />
          <p className="sectionLabel">No matches yet</p>
          <h2>We couldn’t find “{query}”.</h2>
          <p>Try a broader search, such as chicken, pasta, or curry.</p>
        </section>
      )}

      {recipes.length > 0 && <Card recipes={recipes} />}
    </main>
  );
};

export default Home;
