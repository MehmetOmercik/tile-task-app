import React, { useState } from "react";

export const DropdownComponent = ({ options, onSelect, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <select
        value={defaultValue ? defaultValue : selectedOption}
        onChange={(e) => handleOptionSelect(e.target.value)}
      >
        {/* <option value="">Select an option</option> */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
