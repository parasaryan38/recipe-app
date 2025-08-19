import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
const Card = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <div className="mainCard">
      {recipes.map((recipe, index) => {
        const { strMealThumb, strMeal } = recipe;
        return (
          <div className="cardWrapper" key={index}>
            <h1>{strMeal}</h1>
            <img className="thumbWrapper" src={strMealThumb} alt="Thumbnail" />
            <button onClick={() => navigate("/detail", { state: recipe })}>
              More Detail
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
