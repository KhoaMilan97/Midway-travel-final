import { createSelector } from "reselect";

export const selectSearchTours = (state) => state.search;

export const selectSearchResult = createSelector(
  [selectSearchTours],
  (search) => search.searchResult
);
