import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ cities }) => {
  return (
    <div>
      {cities.map((city, index) => (
        <div key={index}>
          <Link to={`/forecast/${city}`}>{city}</Link>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
