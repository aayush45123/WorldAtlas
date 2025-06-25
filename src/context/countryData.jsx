import { createContext, useEffect, useState } from "react";

export const CountryDataContext = createContext();

export const CountryDataProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,cca3,currencies,area,borders"
      );
      const data = await response.json();
      setCountryData(data);
    };

    fetchCountryData();
  }, []);

  return (
    <CountryDataContext.Provider value={{ countryData, setCountryData }}>
      {children}
    </CountryDataContext.Provider>
  );
};
