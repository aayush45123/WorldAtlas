import React from "react";
import { Link, useParams } from "react-router-dom";
import { CountryDataContext } from "../../context/countryData";
import styles from "./CountryDetail.module.css";

const CountryDetail = () => {
  const { cca3 } = useParams();
  const { countryData } = React.useContext(CountryDataContext);

  const country = countryData.find((c) => c.cca3 === cca3);

  if (!country) {
    return (
      <div className={styles.detailContainer}>Loading or not found...</div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailCard}>
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className={styles.flagImage}
        />

        <div className={styles.detailsRight}>
          <h2 className={styles.countryName}>{country.name.common}</h2>
          <div className={styles.detailInfo}>
            <p>
              <span>Capital:</span> {country.capital?.[0]}
            </p>
            <p>
              <span>Population:</span>{" "}
              {new Intl.NumberFormat().format(country.population)}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Subregion:</span> {country.subregion || "N/A"}
            </p>
            <p>
              <span>Currencies:</span>{" "}
              {Object.values(country.currencies || {})
                .map((c) => c.name)
                .join(", ")}
            </p>
            <p>
              <span>Area:</span> {country.area} km²
            </p>
            <p>
              <span>Borders:</span>{" "}
              {country.borders?.join(", ") || "No borders"}
            </p>
          </div>
          <Link to="/country" className={styles.backButtonWrapper}>
            <button className={styles.backButton}>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
