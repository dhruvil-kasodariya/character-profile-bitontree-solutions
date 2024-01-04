import { createSelector } from "reselect";
import { RootState } from "../store";
import { CharactersState } from "./characters.reducer";

export const selectCharactersReducer =(state:RootState): CharactersState => state.characters;

export const selectCharactersInfo = createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.charactersInfo
)

export const selectResponseInfo = createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.responseInfo
)