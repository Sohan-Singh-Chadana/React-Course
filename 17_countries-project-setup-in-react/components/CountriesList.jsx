import React from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const array = countriesData.map((country, i) => {
    return (
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        region={country.region}
        capital={country.capital?.[0]}
      />
    );
  });

  return <div className="countries-container">{array}</div>;
};

export default CountriesList;
