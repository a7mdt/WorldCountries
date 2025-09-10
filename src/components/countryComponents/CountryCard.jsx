import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer hover:scale-105 transition">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-68 object-cover"
        />

        <div className="p-6">
          <h2 className="font-extrabold text-lg mb-4">{country.name.common}</h2>
          <p className="text-sm mb-1">
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
