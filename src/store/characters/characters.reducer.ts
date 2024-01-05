import { UnknownAction } from "redux";
import { CharacterData, ResponseInfo } from "./characters.type";
import {
  fetchCharactersDataFailed,
  fetchCharactersDataStart,
  fetchCharactersDataSuccess,
} from "./characters.action";

export type CharactersState = {
  readonly charactersInfo: CharacterData[];
  readonly responseInfo: ResponseInfo;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CharactersState = {
  charactersInfo: [],
  responseInfo: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
  isLoading: false,
  error: null,
};

export const charactersReducer = (
  state = INITIAL_STATE,
  action: UnknownAction
): CharactersState => {
  if (fetchCharactersDataStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchCharactersDataSuccess.match(action)) {
    return {
      ...state,
      charactersInfo: action.payload.results,
      responseInfo: action.payload.info,
      isLoading: false,
    };
  }
  if (fetchCharactersDataFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
