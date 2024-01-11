import { combineReducers } from "redux";
import { charactersReducer } from "./characters/characters.reducer";
import { episodesReducer } from "./episodes/episodes.reducer";
import { locationsReducer } from "./locations/locations.reducer";

export const rootReducers = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  locations: locationsReducer
});