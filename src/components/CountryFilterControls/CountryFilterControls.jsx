import React, { useState, useEffect } from "react";
import styles from "../CountryFilterControls/CountryFilterControls.module.css";

const CountryFilterControls = ({ onSearch, onSort, onFilter }) => {
  const CONTINENTS = [
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  useEffect(() => {
    onSort(sortOrder);
  }, [sortOrder, onSort]);

  useEffect(() => {
    onFilter(selectedContinent);
  }, [selectedContinent, onFilter]);

  return (
    <div className={styles.controlsContainer}>
      <input
        type="text"
        placeholder="Search countries..."
        className={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className={styles.sortButtons}>
        <button onClick={() => setSortOrder("asc")}>Ascending</button>
        <button onClick={() => setSortOrder("desc")}>Descending</button>
      </div>

      <select
        className={styles.dropdown}
        value={selectedContinent}
        onChange={(e) => setSelectedContinent(e.target.value)}
      >
        <option value="">All Continents</option>
        {CONTINENTS.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryFilterControls;
