import React from "react";
import "./Header.css";
const Header = ({ query, setQuery, getData, recipeExist, setRecipeExist }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setRecipeExist((recipeExist = !recipeExist));
  };
  return (
    <div className="headerWrapper">
      <h1>Recipe App</h1>
      <div className="searchWrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button type="submit">Search</button>
          {/* !!!
        <select
          name="mealtype"
          id="mealtype"       !!! THIS WAS FOR ANOTHER API
          value={selectedMeal}
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealTypes.map((mealType, index) => (
            <option value={mealType} key={index}>
              {mealType}
            </option>
          ))}
        </select>
        !!! */}
        </form>
      </div>
    </div>
  );
};

export default Header;
