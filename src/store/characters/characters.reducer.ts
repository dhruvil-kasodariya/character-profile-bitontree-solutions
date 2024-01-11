import { UnknownAction } from "redux";
import { CharacterData, PaginationInfo, ResponseInfo } from "./characters.type";
import {
  changePageNumber,
  changeSubPagePerCount,
  changeSubPageNumber,
  fetchCharactersDataFailed,
  fetchCharactersDataStart,
  fetchCharactersDataSuccess,
  fetchSingleCharacterDataSuccess,
  fetchSingleCharacterDataStart,
  fetchSingleCharacterDataFailed,
  searchStringAction,
  searchTypeAction,
} from "./characters.action";

export type CharactersState = {
  charactersInfo?: CharacterData[]|null;
  responseInfo: ResponseInfo;
  isLoading: boolean;
  error: Error | null;
  pagination: PaginationInfo;
  singleCharacterInfo:CharacterData | null;
  searchString:string;
  searchType:string;
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
  pagination: {
    pageNumber: 1,
    subPageNumber: 1,
    subPagePerCount: 10,
  },
  singleCharacterInfo:null,
  searchString:"",
  searchType:"",
};

export const charactersReducer = (
  state = INITIAL_STATE,
  action: UnknownAction
): CharactersState => {
  if (fetchCharactersDataStart.match(action) || fetchSingleCharacterDataStart.match(action)) {
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
    return { ...state, error: action.payload, isLoading: false ,charactersInfo:null};
  }
  if (changePageNumber.match(action)) {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        pageNumber: action.payload,
      },
    };
  }
  if (changeSubPageNumber.match(action)) {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        subPageNumber: action.payload,
      },
    };
  }
  if (changeSubPagePerCount.match(action)) {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        subPagePerCount: action.payload,
      },
    };
  }
  if(fetchSingleCharacterDataSuccess.match(action)) {
    return {
      ...state,singleCharacterInfo:action.payload,isLoading:false
    }
  }
  if ( fetchSingleCharacterDataFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false ,singleCharacterInfo:null};
  }
  if(searchStringAction.match(action)){
    return {
      ...state,searchString:action.payload
    }
  }
  if(searchTypeAction.match(action)){
    return {
      ...state,searchType:action.payload
    }
  }
  return state;
};
