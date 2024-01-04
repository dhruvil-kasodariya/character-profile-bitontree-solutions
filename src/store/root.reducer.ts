import { combineReducers } from "redux";
import { charactersReducer } from "./characters/characters.reducer.ts";

export const rootReducers = combineReducers({
  characters: charactersReducer,
});