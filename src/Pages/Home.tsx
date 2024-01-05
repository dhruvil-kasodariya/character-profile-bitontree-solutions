import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../Api/api";
import {
  selectCharactersInfo,
  selectPaginationInfo,
  selectResponseInfo,
} from "../store/characters/characters.selector";
import CharacterCard, { CharacterDataProp } from "../Components/CharacterCard";
import Pagination from "../Components/Pagination";
import { changeSubPageNumber, changeSubPagePerCount } from "../store/characters/characters.action";
import SelectMenu from "../Components/SelctedMenu";

const Home = () => {
  const dispatch = useDispatch();
  const charactesData = useSelector(selectCharactersInfo);
  const responseInfo = useSelector(selectResponseInfo);

  const getNextCharactesData = () => {
    responseInfo.next && getCharacters(responseInfo.next, dispatch);
  };

  const getPrevCharactesData = () => {
    responseInfo.prev && getCharacters(responseInfo.prev, dispatch);
  };

  const { pageNumber, subPageNumber, subPagePerCount } =
    useSelector(selectPaginationInfo);

  const totalSubPages: number = charactesData.length / subPagePerCount;

  const handlePageChange = (pageNumber: number) => {
    dispatch(changeSubPageNumber(pageNumber));
  };

  const charactesSliceData = charactesData.slice(
    subPageNumber * subPagePerCount - subPagePerCount,
    subPagePerCount * subPageNumber
  );

  const subPagePerCountOption =[
    {id:1,lable:4,value:4},
    {id:2,lable:5,value:5},
    {id:3,lable:10,value:10},
    {id:4,lable:20,value:20},
  ]

  const handleSelect = (value: number) => {
    dispatch(changeSubPagePerCount(value));
  };

  useEffect(() => {
    getCharacters("https://rickandmortyapi.com/api/character", dispatch);
  }, []);
  return (
    <div className="w-full">
      <div className="m-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-2">
          {charactesSliceData.map((data, index) => (
            <CharacterCard
              key={index}
              characterData={data as CharacterDataProp}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-around items-center ">
        <div >
          <SelectMenu onSelect={handleSelect} options ={subPagePerCountOption}/>
        </div>
        <div>
        <Pagination
          currentPage={subPageNumber}
          totalPages={totalSubPages}
          onPageChange={handlePageChange}
        />
        </div>
        <div>
          {subPageNumber} of {totalSubPages}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mx-48">
        <button
          onClick={getPrevCharactesData}
          className="border border-blue-700 px-8 py-2 rounded-xl text-[gray]"
        >
          Prev
        </button>
        <div>
           
        </div>
        <button
          onClick={getNextCharactesData}
          className="border border-blue-700 px-8 py-2 rounded-xl text-[gray]"
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default Home;
