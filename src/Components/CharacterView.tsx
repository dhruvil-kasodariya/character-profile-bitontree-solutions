import React from "react";
import { CharacterData } from "../store/characters/characters.type";

type CharacterViewProps  ={
    data: CharacterData;
  }
  
  const CharacterView: React.FC<CharacterViewProps> = ({ data }) => {

  
  return (
    <div>
      <div className="w-full h-screen p-5 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full h-screen flex items-center justify-center">
          <img
            src={data?.image}
            className="rounded-xl"
            alt={data?.name}
          />
        </div>
        <div className="w-full h-screen flex flex-col items-center md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-gray-300 md:scrollbar-track-gray-100 md:mt-24 mt-5">
          <div className="w-full flex flex-row text-center py-4 px-2 mb-2">
            <h1 className="w-full font-bold text-3xl">{data?.name}</h1>
          </div>
          <div className="w-full flex flex-row justify-between gap-4">
            <div className="w-full flex flex-row items-center justify-between py-4 px-2 mb-2 gap-4">
              <h1 className="w-full font-bold text-xl">Species </h1>
              <span className="w-full text-lg text-start">
                {data?.species}
              </span>
            </div>
            <div className="w-full py-4 px-2 mb-2 flex flex-row gap-4">
              <h1 className="w-full font-bold text-xl">Gender</h1>
              <span className="w-full text-start text-lg">
                {data?.gender}
              </span>
            </div>
          </div>
          <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
            <h1 className="w-full font-bold text-xl flex-1">Status</h1>
            <span className="w-full text-lg text-start">
              {data?.status}
            </span>
          </div>
          <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
            <h1 className="w-full font-bold text-xl flex-1">Origin</h1>
            <a
              className="w-full text-lg text-start"
              href={data?.origin.url}
            >
              {data?.origin.name}
            </a>
          </div>
          {data?.type && (
            <div className="w-full py-4 px-2 mb-2 flex flex-row gap-8">
              <h1 className="w-full font-bold text-xl flex-1">Type</h1>
              <span className="w-full text-lg text-start">
                {data?.type}
              </span>
            </div>
          )}
          <div className="w-full py-4 px-2 mb-2">
            <h1 className="font-bold text-xl">
              Feacher Episodes list of Character
            </h1>
            <div className="grid grid-cols-5">
            {data?.episode.map((url, index:number) => {
              let epiNumer =url.toString().split("/");
              let num =epiNumer[epiNumer.length-1]
              return (
                
                <div key={index} className=" pl-10 my-4 ">
                  <a href={url.toString()} className="underline text-lg border border-black p-2 rounded-full hover:bg-[gray]">{num}</a>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterView;

