import React from "react";
import "./Header.css";
const Header = ({ query, setQuery, getData, setRecipeExist }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    getData();
    setRecipeExist(true);
  };
  return (
    <div className="headerWrapper">
      <p className="eyebrow">Your everyday kitchen companion</p>
      <h1>Find your next favorite meal.</h1>
      <p className="subtitle">
        Search hundreds of simple, satisfying recipes and cook something wonderful today.
      </p>
      <div className="searchWrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            aria-label="Search recipes"
            placeholder="Try chicken, pasta, or curry..."
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
