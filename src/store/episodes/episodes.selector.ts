import { createSelector } from "reselect";
import { RootState } from "../store";
import { EpisodesState } from "./episodes.reducer";

export const selectEpisodesReducer =(state:RootState): EpisodesState => state.episodes;

export const selectSingleEpisodeInfo = createSelector(
    [selectEpisodesReducer],
    (episodesSlice) => episodesSlice.singleEpisodeInfo
)

export const selectIsLoading = createSelector(
    [selectEpisodesReducer],
    (episodesSlice) => episodesSlice.isLoading
)

export const selectIsPopupOpen = createSelector(
    [selectEpisodesReducer],
    (episodesSlice) => episodesSlice.isPopupOpen
)

