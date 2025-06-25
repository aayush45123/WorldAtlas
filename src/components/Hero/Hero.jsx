import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.jpg";
import Card from "../Card/Card";
import Title from "../Title/Title";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>Explore the world , one country at a time </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, rerum praesentium. Nesciunt numquam obcaecati eum
            distinctio. Quia.
          </p>
          <button className="start-exploring">Start Exploring </button>
        </div>
        <div className="hero-right">
          <img src={hero} alt="Hero" />
        </div>
      </div>
      <Title
        title="Explore Countries"
        subtitle="Discover facts and details about different nations"
      />

      <Card />
    </>
  );
};

export default Hero;
