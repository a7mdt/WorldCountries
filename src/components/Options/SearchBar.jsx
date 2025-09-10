import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="bg-white shadow-xl rounded-md flex items-center px-4 py-3 w-full md:w-1/3">
      <FaSearch className="text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full text-sm bg-transparent"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
