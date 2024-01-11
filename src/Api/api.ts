// api.ts

import axios, { AxiosResponse } from "axios";
import {
  CharacterData,
  CharactersDataResponse,
} from "../store/characters/characters.type";
import {
  fetchCharactersDataFailed,
  fetchCharactersDataStart,
  fetchCharactersDataSuccess,
  fetchSingleCharacterDataFailed,
  fetchSingleCharacterDataStart,
  fetchSingleCharacterDataSuccess,
} from "../store/characters/characters.action";
import {
  EpisodeCharacter,
  EpisodeData,
  EpisodeDataResponse,
} from "../store/episodes/episodes.type";
import {
  fetchSingleEpisodeDataFailed,
  fetchSingleEpisodeDataStart,
  fetchSingleEpisodeDataSuccess,
} from "../store/episodes/episodes.action";
import { fetchSingleLocationDataFailed, fetchSingleLocationDataStart, fetchSingleLocationDataSuccess } from "../store/locations/locations.action";
import { LocationCharacter, LocationDataResponse } from "../store/locations/locations.type";

// Fetch list of characters
export const getCharacters = async (
  apiUrl: string,
  dispatch: any
): Promise<CharactersDataResponse | unknown> => {
  try {
    dispatch(fetchCharactersDataStart());
    const response: AxiosResponse<CharactersDataResponse> = await axios.get(
      apiUrl
    );
    dispatch(fetchCharactersDataSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(fetchCharactersDataFailed(error as Error));
    console.error("Error fetching characters:", error);
    return error;
    // throw error;
  }
};

//get single character data
export const getSingleCharacter = async (
  apiUrl: string,
  dispatch: any
): Promise<CharacterData | unknown> => {
  try {
    dispatch(fetchSingleCharacterDataStart());
    const response: CharacterData = await axios
      .get(apiUrl)
      .then((res) => res.data);

    // Fetch additional episode information
    const episodesDetails: EpisodeData[] = await Promise.all(
      response.episode.map(async (epi) => {
        const episodeResponse: EpisodeData = await axios
          .get(epi.toString())
          .then((res) => res.data);

        return {
          id: episodeResponse.id,
          name: episodeResponse.name,
          episode: episodeResponse.episode,
          url: episodeResponse.url,
        };
      })
    );

    const responseData = {
      ...response,
      episode:episodesDetails
    };
    console.log(responseData)
    dispatch(fetchSingleCharacterDataSuccess(responseData));
    return response;
  } catch (error) {
    dispatch(fetchSingleCharacterDataFailed(error as Error));
    console.error("Error fetching characters:", error);
    return error;
    // throw error;
  }
};

export const fetchSingleEpisodeData = async (url: string, dispatch: any) => {
  try {
    dispatch(fetchSingleEpisodeDataStart());
    // Fetch main episode data
    const episodeResponse: EpisodeDataResponse = await axios
      .get(url)
      .then((res) => res.data);

    // Fetch additional character information
    const characterDetails: EpisodeCharacter[] = await Promise.all(
      episodeResponse.characters.map(async (character) => {
        const characterResponse: EpisodeCharacter = await axios
          .get(character)
          .then((res) => res.data);

        return {
          id: characterResponse.id,
          name: characterResponse.name,
          image: characterResponse.image,
          url: characterResponse.url,
        };
      })
    );
    const responseData = {
      ...episodeResponse,
      characters: characterDetails,
    };

    dispatch(fetchSingleEpisodeDataSuccess(responseData));
    return responseData;
  } catch (error) {
    dispatch(fetchSingleEpisodeDataFailed());
    console.error("Error fetching data:", error);
  }
};

//get single location data

export const fetchSingleLocationData = async (url: string, dispatch: any) => {
  try {
    dispatch(fetchSingleLocationDataStart());
    // Fetch main location data
    const locationResponse: LocationDataResponse = await axios
      .get(url)
      .then((res) => res.data);

      console.table(locationResponse)

    // Fetch additional character information
    const characterDetails: LocationCharacter[] = await Promise.all(
      locationResponse.residents.map(async (character) => {
        const characterResponse: LocationCharacter = await axios
          .get(character)
          .then((res) => res.data);

        return {
          id: characterResponse.id,
          name: characterResponse.name,
          image: characterResponse.image,
          url: characterResponse.url,
        };
      })
    );
    const responseData = {
      ...locationResponse,
      residents: characterDetails,
    };

    dispatch(fetchSingleLocationDataSuccess(responseData));
    return responseData;
  } catch (error) {
    dispatch(fetchSingleLocationDataFailed());
    console.error("Error fetching data:", error);
  }
};
