import React, { useState } from "react";
import { CharacterData } from "../store/characters/characters.type";
import PopupMain from "./EpisodePopup";
import { useDispatch } from "react-redux";
import { fetchSingleEpisodeData, fetchSingleLocationData } from "../Api/api";
import LocationPopup from "./LocationPopup";
import { isPopupOpenAction } from "../store/episodes/episodes.action";

type CharacterViewProps = {
  data: CharacterData;
};

const CharacterView: React.FC<CharacterViewProps> = ({ data }) => {
  const [episodeOpen, setEpisodeOpen] = useState<boolean>(false);
  const [locationOpen, setLocationOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <div>
      {episodeOpen && <PopupMain setOpen={setEpisodeOpen}/>}
      {locationOpen && <LocationPopup setOpen ={setLocationOpen}/>}
      <div className="w-full h-screen p-5 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full h-screen flex items-center justify-center">
          <img src={data?.image} className="rounded-xl" alt={data?.name} />
        </div>
        <div className="w-full h-screen flex flex-col items-center md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-gray-300 md:scrollbar-track-gray-100 md:mt-24 mt-5">
          <div className="w-full flex flex-row text-center py-4 px-2 mb-2">
            <h1 className="w-full font-bold text-3xl">{data?.name}</h1>
          </div>
          <div className="w-full flex flex-row justify-between gap-4">
            <div className="w-full flex flex-row items-center justify-between py-4 px-2 mb-2 gap-4">
              <h1 className="w-full font-bold text-xl">Species </h1>
              <span className="w-full text-lg text-start">{data?.species}</span>
            </div>
            <div className="w-full py-4 px-2 mb-2 flex flex-row gap-4">
              <h1 className="w-full font-bold text-xl">Gender</h1>
              <span className="w-full text-start text-lg">{data?.gender}</span>
            </div>
          </div>
          <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
            <h1 className="w-full font-bold text-xl flex-1">Status</h1>
            <span className="w-full text-lg text-start">{data?.status}</span>
          </div>
          <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
            <h1 className="w-full font-bold text-xl flex-1">Origin</h1>
            <span
              className="w-full text-lg text-start"
              onClick={() => {
                fetchSingleLocationData(data?.origin.url,dispatch)
                dispatch(isPopupOpenAction())
                setLocationOpen(true)
              }}
            >
              {data?.origin.name}
            </span>
            {/* <a className="w-full text-lg text-start" href={data?.origin.url}>
              {data?.origin.name}
            </a> */}
          </div>
          {data?.type && (
            <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
              <h1 className="w-full font-bold text-xl flex-1">Type</h1>
              <span className="w-full text-lg text-start">{data?.type}</span>
            </div>
          )}
          <div className="w-full py-4 px-2 mb-2">
            <h1 className="font-bold text-xl">
              Feacher Episodes list of Character
            </h1>
            <div className="grid grid-cols-5">
              {data?.episode.map((epiInfo, index: number) => (
                <div key={index} className=" pl-10 my-4 ">
                  <span
                    title={epiInfo.name}
                    onClick={() => {
                      fetchSingleEpisodeData(epiInfo.url, dispatch);
                      setEpisodeOpen(true);
                    }}
                    className="text-lg border border-black p-2 rounded-full hover:bg-[gray]"
                  >
                    {epiInfo.episode}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterView;
