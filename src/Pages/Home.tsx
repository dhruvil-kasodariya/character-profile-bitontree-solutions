import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../Api/api";
import {
  selectCharactersInfo,
  selectResponseInfo,
} from "../store/characters/characters.selector";
import CharacterCard, { CharacterDataProp } from "../Components/CharacterCard";



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

  useEffect(() => {
    getCharacters("https://rickandmortyapi.com/api/character", dispatch);
  }, []);
  return (
    <div className="w-full">
      <div className="m-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-2">
        {charactesData.map((data, index) => (
              <CharacterCard
                key={index}
                characterData={data as CharacterDataProp}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mx-48">
        {/* <button
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
        </button> */}

      </div>
    </div>
  );
};

export default Home;
