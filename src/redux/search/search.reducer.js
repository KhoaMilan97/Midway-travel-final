import { searchTypes } from "./search.types";

const INITAL_STATE = {
  searchResult: [],
  error: null,
};

const searchReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case searchTypes.SEARCH_SUCCESS:
      return {
        ...state,
        searchResult: action.payload,
      };
    case searchTypes.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
