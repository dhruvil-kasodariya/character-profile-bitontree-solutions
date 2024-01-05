// SelectMenu.tsx
import React, { useState } from 'react';
type Option ={
    id:number,
    lable:number |string,
    value:number |string
}

type SelectMenuProps ={
  onSelect: (value: number) => void;
  options:Option[]
}

const SelectMenu: React.FC<SelectMenuProps> = ({ onSelect ,options}) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div className="mt-4">
      <select
        id="selectMenu"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        onChange={handleSelectChange}
        value={selectedValue || ''}
      >
        {options.map((option:Option)=>{
            return(
                <option key={option.id} value={option.value}>{option.lable}</option>
            )
        })}
      </select>
    </div>
  );
};

export default SelectMenu;
