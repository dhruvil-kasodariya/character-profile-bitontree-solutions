import { createSelector } from "reselect";
import { RootState } from "../store";
import { LocationsState } from "./locations.reducer";

export const selectLocationsReducer =(state:RootState): LocationsState => state.locations;

export const selectSingleLocationInfo = createSelector(
    [selectLocationsReducer],
    (locationsSlice) => locationsSlice.singleLocationInfo
)

export const selectIsLoading = createSelector(
    [selectLocationsReducer],
    (locationsSlice) => locationsSlice.isLoading
)

export const selectError = createSelector(
    [selectLocationsReducer],
    (locationsSlice) => locationsSlice.error
)



