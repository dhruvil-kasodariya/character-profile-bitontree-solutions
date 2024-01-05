export enum CHARACTERS_ACTION_TYPES {
  FETCH_CHARACTERS_DATA_START = "characters/FETCH_CHARACTERS_DATA_START",
  FETCH_CHARACTERS_DATA_SUCCESS = "characters/FETCH_CHARACTERS_DATA_SUCCESS",
  FETCH_CHARACTERS_DATA_FAILED = "characters/FETCH_CHARACTERS_DATA_FAILED",
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
  episode: Episode[];
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
