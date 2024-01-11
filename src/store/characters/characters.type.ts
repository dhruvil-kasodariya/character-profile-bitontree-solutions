import { EpisodeData } from "../episodes/episodes.type";

export enum CHARACTERS_ACTION_TYPES {
  FETCH_CHARACTERS_DATA_START = "characters/FETCH_CHARACTERS_DATA_START",
  FETCH_CHARACTERS_DATA_SUCCESS = "characters/FETCH_CHARACTERS_DATA_SUCCESS",
  FETCH_CHARACTERS_DATA_FAILED = "characters/FETCH_CHARACTERS_DATA_FAILED",
  CHANGE_PAGE_NUMBER ="characters/CHANGE_PAGE_NUMBER",
  CHANGE_SUB_PAGE_NUMBER ="characters/CHANGE_SUB_PAGE_NUMBER",
  CHANGE_SUB_PAGE_PER_COUNT ="characters/CHANGE_SUB_PAGE_PER_COUNT",
  FETCH_SINGLE_CHARACTER_DATA_START = "characters/FETCH_SINGLE_CHARACTER_DATA_START",
  FETCH_SINGLE_CHARACTER_DATA_SUCCESS = "characters/FETCH_SINGLE_CHARACTER_DATA_SUCCESS",
  FETCH_SINGLE_CHARACTER_DATA_FAILED = "characters/FETCH_SINGLE_CHARACTER_DATA_FAILED",
  SEARCH_STRING ="characters/SEARCH_STRING",
  SEARCH_TYPE ="characters/SEARCH_TYPE",
}

export type CharacterOrigin = {
  name: string;
  url: string;
};

export type CharacterLocation = {
  name: string;
  url: string;
};

export type Episode =string[];
export type CharacterData = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: EpisodeData[];
  url: string;
  created: string;
};

export type ResponseInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharactersDataResponse = {
  info: ResponseInfo;
  results: CharacterData[];
};

export type PaginationInfo ={
   pageNumber:number;
   subPageNumber:number;
   subPagePerCount:number;
}
