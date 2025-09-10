import { useParams, Link } from "react-router-dom";
import { useCountries } from "../context/CountriesContext";

const CountryDetails = () => {
  const { name } = useParams();
  const { countries } = useCountries();

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === name.toLowerCase()
  );

  // FirstOption to solve :

  // if (!country) return <p className="px-16 mt-10">Loading...</p>;
  //   const {
  //   flags,
  //   name: countryName,
  //   population,
  //   region,
  //   subregion,
  //   capital,
  //   currencies,
  //   languages,
  //   borders,
  // } = country;

  // Second Option => Put Or and Null Obj and Check each value when u use it (flags?.) like line 51 src={flags?.svg}
  const {
    flags,
    name: countryName,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    borders,
  } = country || {};

  return (
    <div className="px-4 md:px-16 mt-8 flex flex-col items-center">
      <Link
        to="/"
        className="inline-block mb-8 px-6 py-2 bg-white shadow rounded-md self-start"
      >
        ← Back
      </Link>
      <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
        <img
          src={flags?.svg}
          alt={countryName?.common}
          className="w-full md:w-1/2 h-auto rounded-xl shadow"
        />
        <div className="flex flex-col justify-center gap-6 text-left">
          <h1 className="font-extrabold text-5xl">{countryName?.common}</h1>
          <div className="grid md:grid-cols-2 gap-4 text-lg">
            <p>
              <b>Native Name:</b>{" "}
              {Object.values(countryName?.nativeName || {})[0]?.common || "--"}
            </p>
            <p>
              <b>Official Name:</b> {countryName?.official}
            </p>
            <p>
              <b>Population:</b> {population}
            </p>
            <p>
              <b>Currencies:</b>{" "}
              {currencies
                ? Object.values(currencies)
                    .map((c) => c.name)
                    .join(", ")
                : "--"}
            </p>
            <p>
              <b>Region:</b> {region}
            </p>
            <p>
              <b>Languages:</b>{" "}
              {languages ? Object.values(languages).join(", ") : "--"}
            </p>
            <p>
              <b>Sub Region:</b> {subregion || "--"}
            </p>
            <p>
              <b>Capital:</b> {capital?.join(", ") || "--"}
            </p>
          </div>

          {borders?.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold mb-3 text-xl">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {borders.map((border) => (
                  <span
                    key={border}
                    className="px-4 py-2 shadow-md border-t bg-white rounded-md text-base"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
