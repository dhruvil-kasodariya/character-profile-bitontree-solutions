import React, { Fragment, useEffect } from "react";
import { getSingleCharacter } from "../Api/api";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectIsLoading,
  selectSingleCharacterInfo,
} from "../store/characters/characters.selector";
import CharacterView from "../Components/CharacterView";
import Navbar from "../Components/Navbar";

const Character: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  let apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  const characterData = useSelector(selectSingleCharacterInfo);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    getSingleCharacter(apiUrl, dispatch);
  }, [apiUrl,dispatch]);
  return (
    <Fragment>
      <Navbar />
      {!isLoading && (characterData ? (
        <CharacterView data={characterData}/>
      ) : (
        <h1 className="w-full h-screen flex items-center justify-center text-3xl font-bold">
          Data Not Found : 404
        </h1>
      ))}
    </Fragment>
  );
};

export default Character;
