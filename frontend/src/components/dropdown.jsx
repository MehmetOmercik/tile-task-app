import React, { useState } from "react";

export const DropdownComponent = ({ options, onSelect, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(undefined);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="">
      <select
        value={defaultValue ? defaultValue : selectedOption}
        onChange={(e) => handleOptionSelect(e.target.value)}
        className="p-1 rounded-md mb-4"
      >
        <option className="" value="">
          Select an option
        </option>
        {options?.map((option, index) => (
          <option className="" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
