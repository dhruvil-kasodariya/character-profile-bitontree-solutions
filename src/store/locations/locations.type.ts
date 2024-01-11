export enum LOCATIONS_ACTION_TYPES {
  FETCH_SINGLE_LOCATION_DATA_START = "locations/FETCH_SINGLE_LOCATION_DATA_START",
  FETCH_SINGLE_LOCATION_DATA_SUCCESS = "locations/FETCH_SINGLE_LOCATION_DATA_SUCCESS",
  FETCH_SINGLE_LOCATION_DATA_FAILED = "locations/FETCH_SINGLE_LOCATION_DATA_FAILED",
}

export type LocationDataResponse = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type LocationData = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: LocationCharacter[];
  url: string;
  created: string;
};

export type LocationCharacter = {
  id: number;
  name: string;
  image: string;
  url: string;
};
