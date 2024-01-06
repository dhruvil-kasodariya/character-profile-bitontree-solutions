// SelectMenu.tsx
import React from 'react';
type Option ={
    id:number,
    lable:number | string,
    value:number | string
}

type SelectMenuProps ={
  onSelect: (value: string) => void;
  options:Option[];
  selectedValue:string |number | null
}

const SelectMenu: React.FC<SelectMenuProps> = ({ onSelect ,options,selectedValue}) => {
  return (
    <div className="">
      <select
        id="selectMenu"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e)=>onSelect(e.target.value)}
        value={selectedValue || ''}
      >
        <option disabled={true} defaultChecked>Select Option</option>
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
