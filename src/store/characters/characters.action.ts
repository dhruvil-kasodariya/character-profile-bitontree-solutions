import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import {
  CHARACTERS_ACTION_TYPES,
  CharacterData,
  CharactersDataResponse,
} from "./characters.type";

export type FetchCharactersDataStart =
  Action<CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_DATA_START>;

export type FetchCharactersDataSuccess = ActionWithPayload<
  CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_DATA_SUCCESS,
  CharactersDataResponse
>;

export type FetchCharactersDataFailed = ActionWithPayload<
  CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_DATA_FAILED,
  Error
>;

export type ChangePageNumber = ActionWithPayload<
  CHARACTERS_ACTION_TYPES.CHANGE_PAGE_NUMBER,
  number
>;

export type ChangeSubPageNumber = ActionWithPayload<
  CHARACTERS_ACTION_TYPES.CHANGE_SUB_PAGE_NUMBER,
  number
>;

export type ChangeSubPagePerCount = ActionWithPayload<
  CHARACTERS_ACTION_TYPES.CHANGE_SUB_PAGE_PER_COUNT,
  number
>;

export type FetchSingleCharacterDataStart =
  Action<CHARACTERS_ACTION_TYPES.FETCH_SINGLE_CHARACTER_DATA_START>;

export type FetchSingleCharacterDataSuccess = ActionWithPayload<
  CHARACTERS_ACTION_TYPES.FETCH_SINGLE_CHARACTER_DATA_SUCCESS,
  CharacterData
>;

export type FetchSingleCharacterDataFailed = ActionWithPayload<
  CHARACTERS_ACTION_TYPES.FETCH_SINGLE_CHARACTER_DATA_FAILED,
  Error
>;

export type SearchString =ActionWithPayload<
  CHARACTERS_ACTION_TYPES.SEARCH_STRING,
  string
>

export type SearchType =ActionWithPayload<
  CHARACTERS_ACTION_TYPES.SEARCH_TYPE,
  string
>

export const fetchCharactersDataStart = withMatcher(
  (): FetchCharactersDataStart =>
    createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_DATA_START)
);

export const fetchCharactersDataSuccess = withMatcher(
  (charactersData: CharactersDataResponse): FetchCharactersDataSuccess =>
    createAction(
      CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_DATA_SUCCESS,
      charactersData
    )
);

export const fetchCharactersDataFailed = withMatcher(
  (error: Error): FetchCharactersDataFailed =>
    createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_DATA_FAILED, error)
);

export const changePageNumber= withMatcher(
  (count: number): ChangePageNumber =>
    createAction(CHARACTERS_ACTION_TYPES.CHANGE_PAGE_NUMBER, count)
);

export const changeSubPageNumber= withMatcher(
  (count: number): ChangeSubPageNumber =>
    createAction(CHARACTERS_ACTION_TYPES.CHANGE_SUB_PAGE_NUMBER, count)
);

export const changeSubPagePerCount= withMatcher(
  (count: number): ChangeSubPagePerCount =>
    createAction(CHARACTERS_ACTION_TYPES.CHANGE_SUB_PAGE_PER_COUNT, count)
);

export const fetchSingleCharacterDataStart = withMatcher(
  (): FetchSingleCharacterDataStart =>
    createAction(CHARACTERS_ACTION_TYPES.FETCH_SINGLE_CHARACTER_DATA_START)
);

export const fetchSingleCharacterDataSuccess = withMatcher(
  (characterData: CharacterData): FetchSingleCharacterDataSuccess =>
    createAction(
      CHARACTERS_ACTION_TYPES.FETCH_SINGLE_CHARACTER_DATA_SUCCESS,
      characterData
    )
);

export const fetchSingleCharacterDataFailed = withMatcher(
  (error: Error): FetchSingleCharacterDataFailed =>
    createAction(CHARACTERS_ACTION_TYPES.FETCH_SINGLE_CHARACTER_DATA_FAILED, error)
);

export const searchStringAction =withMatcher(
  (value:string):SearchString =>
    createAction(CHARACTERS_ACTION_TYPES.SEARCH_STRING,value)
    
)

export const searchTypeAction =withMatcher(
  (value:string):SearchType =>
    createAction(CHARACTERS_ACTION_TYPES.SEARCH_TYPE,value) 
)
;