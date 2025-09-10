import React from "react";
import CountryCard from "./CountryCard";

const CountryList = ({ countries }) => {
  return (
    <div className="px-4 md:px-18 mt-8 grid gap-15 sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
