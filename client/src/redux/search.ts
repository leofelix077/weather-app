/* eslint-disable no-param-reassign */
import produce from "immer";

// types
export const SEARCH = {
  SET_PLACE: "SEARCH.SET_PLACE",
  SET_COUNTRY_CODE: "SEARCH.SET_COUNTRY_CODE",
};

// actions
interface SearchState {
  place: string;
  countryCode: string;
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

// reducer

export const initialState: SearchState = {
  place: "München",
  countryCode: "DE",
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
    default:
      return state;
  }
}
