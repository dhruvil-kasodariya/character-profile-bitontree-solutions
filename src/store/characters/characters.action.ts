import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import {
  CHARACTERS_ACTION_TYPES,
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
