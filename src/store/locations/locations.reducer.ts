import { UnknownAction } from "redux";
import {
  fetchSingleLocationDataFailed,
  fetchSingleLocationDataStart,
  fetchSingleLocationDataSuccess,
} from "./locations.action";
import { LocationData } from "./locations.type";

export type LocationsState = {
  isLoading: boolean;
  error: Error | null | string;
  singleLocationInfo: LocationData | null;
};

const INITIAL_STATE: LocationsState = {
  isLoading: false,
  error: null,
  singleLocationInfo: null,
};

export const locationsReducer = (
  state = INITIAL_STATE,
  action: UnknownAction
): LocationsState => {
  if (fetchSingleLocationDataStart.match(action)) {
    return {
      ...state,
      isLoading: true,
      singleLocationInfo: null,
    };
  }

  if (fetchSingleLocationDataSuccess.match(action)) {
    return {
      ...state,
      singleLocationInfo: action.payload,
      isLoading: false,
    };
  }
  if (fetchSingleLocationDataFailed.match(action)) {
    return {
      ...state,
      error: "Data not Found",
      isLoading: false,
      singleLocationInfo: null,
    };
  }
  return state;
};
