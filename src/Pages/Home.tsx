import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters } from "../Api/api";
import {
  selectCharactersInfo,
  selectIsLoading,
  selectPaginationInfo,
  selectResponseInfo,
} from "../store/characters/characters.selector";
import CharacterCard, { CharacterDataProp } from "../Components/CharacterCard";
import Navbar from "../Components/Navbar";
import PaginationMain from "../Components/PaginationMain";

const Home = () => {
  const dispatch = useDispatch();
  const charactesData = useSelector(selectCharactersInfo);
  const responseInfo = useSelector(selectResponseInfo);
  const isLoading = useSelector(selectIsLoading);
  const { pageNumber, subPageNumber, subPagePerCount } =
    useSelector(selectPaginationInfo);
  
    const apiUrl ="https://rickandmortyapi.com/api/character"
  let totalSubPages: number = 1;

  if (charactesData)
    totalSubPages = Math.floor(charactesData.length / subPagePerCount);

  let charactesSliceData;
  if (charactesData)
    charactesSliceData = charactesData.slice(
      subPageNumber * subPagePerCount - subPagePerCount,
      subPagePerCount * subPageNumber
    );

  useEffect(() => {
    getCharacters(apiUrl, dispatch);
  }, [apiUrl,dispatch]);
  return (
    <Fragment>
      <Navbar />
      {!isLoading && charactesData ? (
        <div className="w-full">
          <div className="m-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-2">
              {charactesSliceData &&
                charactesSliceData.map((data, index) => (
                  <Link
                    key={index}
                    to={`/characters/view-character/${data.id}`}
                  >
                    <CharacterCard characterData={data as CharacterDataProp} />
                  </Link>
                ))}
            </div>
          </div>
          <PaginationMain
            responseInfo={responseInfo}
            pageNumber={pageNumber}
            subPageNumber={subPageNumber}
            subPagePerCount={subPagePerCount}
            totalSubPages={totalSubPages}
          />
        </div>
      ) : (
        <h1 className="w-full h-screen flex items-center justify-center text-3xl font-bold">
          Data Not Found : 404
        </h1>
      )}
    </Fragment>
  );
};

export default Home;
