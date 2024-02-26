import React from "react";

const DropdownMenu = ({ cities, onSelectCity }) => {
  return (
    <select onChange={(e) => onSelectCity(e.target.value)}>
      {cities.map((city, index) => (
        <option className="city-name" key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
    
  );
};

export default DropdownMenu;
