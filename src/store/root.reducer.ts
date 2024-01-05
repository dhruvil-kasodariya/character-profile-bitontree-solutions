import { combineReducers } from "redux";
import { charactersReducer } from "./characters/characters.reducer";

export const rootReducers = combineReducers({
  characters: charactersReducer,
});