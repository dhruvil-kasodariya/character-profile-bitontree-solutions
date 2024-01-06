// api.ts

import axios, { AxiosResponse } from 'axios';
import { CharacterData, CharactersDataResponse } from '../store/characters/characters.type';
import { fetchCharactersDataFailed, fetchCharactersDataStart, fetchCharactersDataSuccess, fetchSingleCharacterDataFailed, fetchSingleCharacterDataStart, fetchSingleCharacterDataSuccess } from '../store/characters/characters.action';


// Fetch list of characters
export const getCharacters = async (apiUrl: string,dispatch:any): Promise<CharactersDataResponse |unknown> => {
 
    try {
    dispatch(fetchCharactersDataStart());
    const response: AxiosResponse< CharactersDataResponse > = await axios.get(apiUrl);
    dispatch(fetchCharactersDataSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(fetchCharactersDataFailed(error as Error))
    console.error('Error fetching characters:', error);
    return error
    // throw error;
  }
};

//get single character data
export const getSingleCharacter =async(apiUrl:string,dispatch:any): Promise<CharacterData | unknown> => {
  try {
    dispatch(fetchSingleCharacterDataStart());  
    const  response:AxiosResponse<CharacterData> =  await axios.get(apiUrl);
    dispatch(fetchSingleCharacterDataSuccess(response.data))
    return response.data
  } catch(error) {
    dispatch(fetchSingleCharacterDataFailed(error as Error))
    console.error('Error fetching characters:', error);
    return error
    // throw error;
  }
}





