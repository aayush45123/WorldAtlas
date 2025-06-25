import React from "react";
import styles from "./CountryCards.module.css";
import { Link } from "react-router-dom";

const CountryCards = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className={styles.loadingMessage}>
        <p>No countries found.</p>
      </div>
    );
  }

  return (
    <div className={styles.countryCardsContainer}>
      {data.map((country) => (
        <div className={styles.countryCard} key={country.cca3}>
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className={styles.flagImage}
          />
          <h3 className={styles.countryName}>{country.name.common}</h3>
          <div className={styles.countryInfo}>
            <p>
              <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
            </p>
            <p>
              <strong>Population:</strong>{" "}
              {new Intl.NumberFormat().format(country.population)}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Subregion:</strong> {country.subregion || "N/A"}
            </p>
          </div>
          <Link to={`/countrydetail/${country.cca3}`} className={styles.link}>
            <button className={styles.readMoreBtn}>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountryCards;
