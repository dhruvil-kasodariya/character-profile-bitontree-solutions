import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { LOCATIONS_ACTION_TYPES, LocationData } from "./locations.type";

export type FetchSingleLocationDataStart =
  Action<LOCATIONS_ACTION_TYPES.FETCH_SINGLE_LOCATION_DATA_START>;

export type FetchSingleLocationDataSuccess = ActionWithPayload<
  LOCATIONS_ACTION_TYPES.FETCH_SINGLE_LOCATION_DATA_SUCCESS,
  LocationData
>;

export type FetchSingleLocationDataFailed =
  Action<LOCATIONS_ACTION_TYPES.FETCH_SINGLE_LOCATION_DATA_FAILED>;

export const fetchSingleLocationDataStart = withMatcher(
  (): FetchSingleLocationDataStart =>
    createAction(LOCATIONS_ACTION_TYPES.FETCH_SINGLE_LOCATION_DATA_START)
);

export const fetchSingleLocationDataSuccess = withMatcher(
  (locationData: LocationData): FetchSingleLocationDataSuccess =>
    createAction(
      LOCATIONS_ACTION_TYPES.FETCH_SINGLE_LOCATION_DATA_SUCCESS,
      locationData
    )
);

export const fetchSingleLocationDataFailed = withMatcher(
  (): FetchSingleLocationDataFailed =>
    createAction(LOCATIONS_ACTION_TYPES.FETCH_SINGLE_LOCATION_DATA_FAILED)
);
