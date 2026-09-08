import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <main className="missingRecipe">
        <p className="sectionLabel">Recipe not selected</p>
        <h1>Choose a meal to see its recipe.</h1>
        <Link to="/">Back to search</Link>
      </main>
    );
  }

  const { strMeal, strMealThumb, strInstructions, strYoutube, strCategory, strArea } = state;
  const ingredients = [];
  for (let i = 1; i <= 20; i += 1) {
    const ingredient = state[`strIngredient${i}`];
    const measure = state[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) ingredients.push(`${measure || ""} ${ingredient}`.trim());
  }

  return (
    <main className="detailWrapper">
      <div className="recipeHero">
        <div className="recipeHeroCopy">
          <Link className="backLink" to="/">← Back to recipes</Link>
          <p className="sectionLabel">{strArea || "World"} cuisine {strCategory ? `· ${strCategory}` : ""}</p>
          <h1>{strMeal}</h1>
          <p>Everything you need to bring this recipe to the table.</p>
        </div>
        <img src={strMealThumb} alt={strMeal} />
      </div>

      <div className="recipeBody">
        <aside className="ingredientsCard">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>

        <section className="instructionsCard">
          <h2>Method</h2>
          <p>{strInstructions}</p>
          {strYoutube && (
            <a className="videoLink" href={strYoutube} target="_blank" rel="noreferrer">
              Watch the video <span aria-hidden="true">↗</span>
            </a>
          )}
        </section>
      </div>
    </main>
  );
};

export default Detail;
