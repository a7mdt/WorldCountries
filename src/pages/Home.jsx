import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/Options/SearchBar";
import FilterSelect from "../components/Options/FilterSelect";
import CountryList from "../components/countryComponents/CountryList";
import { useCountries } from "../context/CountriesContext";

const Home = () => {
  const { countries, regions } = useCountries();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const region = searchParams.get("region") || "";

  const handleSearch = (e) => { 
    setSearchParams({ search: e.target.value, region });
  };

  const handleFilter = (e) => {
    setSearchParams({ search, region: e.target.value });
  };

  const filteredCountries = countries.filter((country) => {
    const matchName = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchRegion = region ? country.region === region : true;
    return matchName && matchRegion;
  });

  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:justify-between px-4 md:px-16 mt-8">
        <SearchBar value={search} onChange={handleSearch} />
        <FilterSelect
          value={region}
          onChange={handleFilter}
          regions={regions}
        />
      </div>
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default Home;
