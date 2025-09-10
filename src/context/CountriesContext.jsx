import { createContext, useContext, useEffect, useState } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=flags,name,capital,currencies,region,subregion,languages,population,borders"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        const uniqueRegions = [
          ...new Set(data.map((c) => c.region).filter(Boolean)),
        ];
        setRegions(uniqueRegions);
      });
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, regions }}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
