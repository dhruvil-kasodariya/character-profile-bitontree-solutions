// api.ts

import axios, { AxiosResponse } from 'axios';
import { CharactersDataResponse } from '../store/characters/characters.type';
import { fetchCharactersDataFailed, fetchCharactersDataStart, fetchCharactersDataSuccess } from '../store/characters/characters.action';


// Fetch list of characters
export const getCharacters = async (apiUrl: string,dispatch:any): Promise<CharactersDataResponse> => {
 
    try {
    dispatch(fetchCharactersDataStart());
    const response: AxiosResponse< CharactersDataResponse > = await axios.get(apiUrl);
    dispatch(fetchCharactersDataSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(fetchCharactersDataFailed(error as Error))
    console.error('Error fetching characters:', error);
    throw error;
  }
};





