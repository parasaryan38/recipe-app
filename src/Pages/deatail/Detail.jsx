import React from "react";
import "./Detail.css";
import { NavLink, useLocation } from "react-router-dom";
import png from "../../LOGO/ing.png";
const Detail = () => {
  const { state } = useLocation();
  const { strMeal, strMealThumb, strInstructions, strYoutube } = state;
  console.log(strMeal);
  console.log("STATE", state);
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = state[`strIngredient${i}`];
    const measure = state[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure ? measure : ""} ${ingredient}`.trim());
    }
  }

  return (
    <div className="deatailWrapper">
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
      <div className="imgWrapper">
        <h1>{strMeal}</h1>
        <img src={png} alt="food" />
      </div>
      <div className="bottomWrapper">
        <div className="main">
          <div className="mealImg">
            <img src={strMealThumb} alt="meal" />
          </div>
          <div className="ingWrapper">
            <h1>
              <u>INGREDIENT</u>
            </h1>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>{item} </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="instruction">
          <h1>INSTRUCTIONS</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: strInstructions.replace(/\r?\n/g, "<br />"),
            }}
          ></p>
        </div>
        <div>
          <p>
            For more information checkout 🔗
            <NavLink to={strYoutube}>{strYoutube}</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
