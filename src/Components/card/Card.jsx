import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
const Card = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <section className="resultsSection" aria-live="polite">
      <div className="resultsHeading">
        <p className="sectionLabel">Recipe results</p>
        <h2>Choose something delicious</h2>
      </div>
      <div className="mainCard">
      {recipes.map((recipe, index) => {
        const { strMealThumb, strMeal } = recipe;
        return (
          <article className="cardWrapper" key={recipe.idMeal || index}>
            <div className="imageFrame">
              <img className="thumbWrapper" src={strMealThumb} alt={strMeal} />
            </div>
            <div className="cardContent">
              <h3>{strMeal}</h3>
            <button onClick={() => navigate("/detail", { state: recipe })}>
              View recipe <span aria-hidden="true">→</span>
            </button>
            </div>
          </article>
        );
      })}
      </div>
    </section>
  );
};

export default Card;
