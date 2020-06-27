/* eslint-disable no-param-reassign */
import produce from "immer";

// types
export const SEARCH = {
  SET_PLACE: "SEARCH.SET_PLACE",
  SET_COUNTRY_CODE: "SEARCH.SET_COUNTRY_CODE",
  SET_LAST_SEARCH: "SEARCH.SET_LAST_SEARCH",
};

// actions
interface SearchState {
  place: string;
  countryCode: string;
  lastPlace: string;
  lastCountryCode: string;
}

interface SetSearchStatePlace {
  type: typeof SEARCH.SET_PLACE;
  place: string;
}

export const setSearchStatePlace = (place: string): SetSearchStatePlace => ({
  type: SEARCH.SET_PLACE,
  place,
});

interface SetSearchStateCountryCode {
  type: typeof SEARCH.SET_COUNTRY_CODE;
  countryCode: string;
}

export const setSearchStateCountryCode = (
  countryCode: string
): SetSearchStateCountryCode => ({
  type: SEARCH.SET_COUNTRY_CODE,
  countryCode,
});

interface SetLastSearchState {
  type: typeof SEARCH.SET_LAST_SEARCH;
  countryCode: string;
  place: string;
}

export const setLastSearchState = (
  countryCode: string,
  place: string
): SetLastSearchState => ({
  type: SEARCH.SET_LAST_SEARCH,
  countryCode,
  place,
});

// reducer

export const initialState: SearchState = {
  place: "München",
  countryCode: "DE",
  lastPlace: "",
  lastCountryCode: "",
};

export function searchReducer(state = initialState, action: any): SearchState {
  switch (action.type) {
    case SEARCH.SET_PLACE:
      return produce(state, (newState) => {
        newState.place = action.place;
      });
    case SEARCH.SET_COUNTRY_CODE:
      return produce(state, (newState) => {
        newState.countryCode = action.countryCode;
      });
    case SEARCH.SET_LAST_SEARCH:
      return produce(state, (newState) => {
        newState.lastPlace = action.place;
        newState.lastCountryCode = action.countryCode;
      });
    default:
      return state;
  }
}
