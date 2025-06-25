import React from "react";
import "./Card.css";
import countryData from "../../api/countryData.json";

const Card = () => {
  return (
    <>
      <div className="cards">
        {countryData.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div className="card-container" key={id}>
              <h3> {countryName}</h3>
              <p>
                <span>Capital:</span> {capital}
              </p>
              <p>
                <span>Population:</span> {population}
              </p>
              <p>
                <span>Description:</span> {interestingFact}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
