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

export const selectPaginationInfo =createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.pagination
)

export const selectSingleCharacterInfo = createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.singleCharacterInfo
)

export const selectIsLoading = createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.isLoading
)

export const selectSearchString = createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.searchString
)

export const selectSearchType = createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.searchType
)

