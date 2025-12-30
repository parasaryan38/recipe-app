import React from "react";
import { GiChefToque } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <GiChefToque className="chef-icon" />
        <h1>About Our Recipe App</h1>
      </div>
      <div className="about-content">
        <p className="about-description">
          Welcome to our delicious Recipe App! Discover a world of flavors with
          our curated collection of recipes from around the globe. Whether
          you're a seasoned chef or a kitchen novice, our app is designed to
          inspire your culinary adventures.
        </p>
        <div className="features">
          <div className="feature">
            <FaUtensils className="feature-icon" />
            <h3>Easy Recipes</h3>
            <p>Step-by-step instructions for every dish.</p>
          </div>
          <div className="feature">
            <MdOutlineRestaurantMenu className="feature-icon" />
            <h3>Diverse Cuisine</h3>
            <p>Explore recipes from various cultures and cuisines.</p>
          </div>
          <div className="feature">
            <IoMdHeart className="feature-icon" />
            <h3>Save Favorites</h3>
            <p>Bookmark your favorite recipes for quick access.</p>
          </div>
        </div>
        <p className="about-footer">
          Join our community of food lovers and start cooking today!
        </p>
      </div>
    </div>
  );
};

export default About;
