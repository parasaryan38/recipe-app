import React from "react";
import { GiChefToque } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import "./About.css";

const features = [
  { icon: FaUtensils, title: "Simple searches", text: "Start with an ingredient, a meal, or a craving." },
  { icon: MdOutlineRestaurantMenu, title: "Global flavors", text: "Discover dishes and cuisines from around the world." },
  { icon: IoMdHeart, title: "Cook with confidence", text: "Clear ingredients and instructions help every step." },
];

const About = () => (
  <main className="about-container">
    <header className="about-header">
      <div className="aboutIcon"><GiChefToque /></div>
      <p className="sectionLabel">A little about us</p>
      <h1>Good food brings people together.</h1>
      <p>Recipe App is a simple place to find fresh meal inspiration whenever you need it.</p>
    </header>
    <section className="features" aria-label="What Recipe App offers">
      {features.map(({ icon: Icon, title, text }) => (
        <article className="feature" key={title}>
          <Icon className="feature-icon" aria-hidden="true" />
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      ))}
    </section>
    <p className="about-footer">Pick a recipe, make it your own, and enjoy the process.</p>
  </main>
);

export default About;
