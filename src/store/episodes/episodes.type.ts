export enum EPISODES_ACTION_TYPES {
  FETCH_SINGLE_EPISODE_DATA_START = "episodes/FETCH_SINGLE_EPISODE_DATA_START",
  FETCH_SINGLE_EPISODE_DATA_SUCCESS = "episodes/FETCH_SINGLE_EPISODE_DATA_SUCCESS",
  FETCH_SINGLE_EPISODE_DATA_FAILED = "episodes/FETCH_SINGLE_EPISODE_DATA_FAILED",
  IS_POPUP_OPEN = "episodes/IS_POPUP_OPEN",
}

export type EpisodeDataResponse = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type EpisodeData = {
  id: number;
  name: string;
  air_date?: string;
  episode: string;
  characters?: EpisodeCharacter[];
  url: string;
  created?: string;
};

export type EpisodeCharacter = {
  id: number;
  name: string;
  image: string;
  url: string;
};
