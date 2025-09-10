import React from "react";

const FilterSelect = ({ value, onChange, regions }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-white shadow-xl rounded-md px-4 py-3 text-sm md:w-48 cursor-pointer"
    >
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
