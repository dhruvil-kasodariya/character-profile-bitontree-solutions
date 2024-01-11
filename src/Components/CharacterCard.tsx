import React, { Fragment } from "react";
import { Episode } from "../store/characters/characters.type";
import { EpisodeData } from "../store/episodes/episodes.type";

export type CharacterDataProp = {
  image: string;
  name: string;
  type: string;
  location: {
    name: string;
  };
  episode: EpisodeData[];
};

export type CharacterCardProps = {
  characterData: CharacterDataProp;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ characterData }) => {
  const totalEpisodes = characterData.episode.length;

  return (
    <Fragment>
    <div className="group relative overflow-hidden rounded-lg border border-black/50">
      <img src={characterData.image} alt={characterData.name} className="rounded-lg object-cover group-hover:blur border w-full"/>
      <div className="absolute bg-white/30 md:-bottom-60 group-hover:bottom-0 bottom-0 w-full transition-all px-2 " >
        <h1 className="w-full text-xl font-bold text-center py-1">
          {characterData.name}
        </h1>
        {characterData.type && (
          <div className="flex flex-row items-center justify-start py-1">
            <h2 className="font-semibold text-lg w-[7rem]">Type </h2>
            <span>{characterData.type}</span>
          </div>
        )}
        <div className="flex flex-row items-center justify-start py-1">
          <h2 className="font-semibold text-lg w-[7rem]">Location </h2>
          <span className="text-base">{characterData.location.name}</span>
        </div>
        <div className="flex flex-row items-center justify-start py-1">
          <h2 className="font-semibold text-lg w-[7rem]">Total Episodes </h2>
          <span className="text-base">{totalEpisodes}</span>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default CharacterCard;
