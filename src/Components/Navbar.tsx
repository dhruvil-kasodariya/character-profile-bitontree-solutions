import React, { Fragment, ChangeEvent } from "react";
import SelectMenu from "./SelctedMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchString,
  selectSearchType,
} from "../store/characters/characters.selector";
import {
  searchStringAction,
  searchTypeAction,
} from "../store/characters/characters.action";
import { getCharacters } from "../Api/api";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const searchType = useSelector(selectSearchType);

  const serachTypeOption = [
    { id: 1, lable: "Name", value: "name" },
    { id: 2, lable: "Status", value: "status" },
    { id: 3, lable: "Species", value: "species" },
    { id: 4, lable: "Type", value: "type" },
    { id: 5, lable: "Gender", value: "gender" },
  ];

  const handleSearchTypeSelect = (value: string) => {
    dispatch(searchTypeAction(value));
  };

  const handleSearchString = async (e: ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value.toLocaleLowerCase();
    const filterApiUrl: string = `https://rickandmortyapi.com/api/character/?${searchType}=${stringValue}`;
    setTimeout(() => {
      dispatch(searchStringAction(stringValue));
      getCharacters(filterApiUrl, dispatch);
    }, 2000);
  };
  console.log(pathname);

  return (
    <Fragment>
      <div className="w-full">
        <div className="m-4 flex flex-row items-center justify-between">
          <div className="w-full px-2 text-xl font-bold">Rick & Morty</div>
          {(pathname === "/" || pathname === "/characters") && (
            <div className="flex px-2 md:flex-row flex-col items-center justify-between gap-5 ">
              <div className="flex items-center justify-end h-full w-full ">
                <SelectMenu
                  onSelect={handleSearchTypeSelect}
                  options={serachTypeOption}
                  selectedValue={searchType}
                />
              </div>
              <input
                type="search"
                placeholder="Search using selected type"
                onChange={handleSearchString}
                className="bg-transparent border border-black placeholder:text-black px-2 py-1 rounded-lg w-fit lg:mt-0 -mt-5 "
                disabled={!!!searchType}
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
