import React, { useContext, useEffect, useState } from "react";
import CountryCards from "../../components/CountryCards/CountryCards";
import CountryFilterControls from "../../components/CountryFilterControls/CountryFilterControls";
import { CountryDataContext } from "../../context/countryData";
import Title from "../../components/Title/Title";

const Country = () => {
  const { countryData } = useContext(CountryDataContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [filterContinent, setFilterContinent] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filteredCountry = [...countryData];

    if (searchTerm) {
      filteredCountry = filteredCountry.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filterContinent) {
      filteredCountry = filteredCountry.filter(
        (country) => country.region === filterContinent
      );
    }
    if (sortOrder === "asc") {
      filteredCountry.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
    } else if (sortOrder === "desc") {
      filteredCountry.sort((a, b) =>
        b.name.common.localeCompare(a.name.common)
      );
    }

    setFilteredData(filteredCountry);
  }, [searchTerm, sortOrder, filterContinent, countryData]);

  return (
    <div>
      <Title
        title="World Explorer"
        subtitle="Browse countries, flags, and global insights"
      />

      <CountryFilterControls
        onSearch={setSearchTerm}
        onSort={setSortOrder}
        onFilter={setFilterContinent}
      />
      <CountryCards data={filteredData} />
    </div>
  );
};

export default Country;
