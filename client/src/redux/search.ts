/* eslint-disable no-param-reassign */
import produce from "immer";

// types
export const SEARCH = {
  SET_PLACE: "SEARCH.SET_PLACE",
  SET_COUNTRY_CODE: "SEARCH.SET_COUNTRY_CODE",
  SET_LAST_SEARCH: "SEARCH.SET_LAST_SEARCH",
};

export interface GeolocationCoordinates {
  lat: number;
  lng: number;
}

// actions
interface SearchState {
  place: GeolocationCoordinates;
  lastPlace: GeolocationCoordinates | null;
}

interface SetSearchStatePlace {
  type: typeof SEARCH.SET_PLACE;
  place: GeolocationCoordinates;
}

export const setSearchStatePlace = (
  place: GeolocationCoordinates
): SetSearchStatePlace => ({
  type: SEARCH.SET_PLACE,
  place,
});

interface SetLastSearchState {
  type: typeof SEARCH.SET_LAST_SEARCH;
  place: GeolocationCoordinates;
}

export const setLastSearchState = (
  place: GeolocationCoordinates
): SetLastSearchState => ({
  type: SEARCH.SET_LAST_SEARCH,
  place,
});

// reducer

export const initialState: SearchState = {
  place: {
    lat: 48.1351253,
    lng: 11.5819805,
  },
  lastPlace: null,
};

export function searchReducer(state = initialState, action: any): SearchState {
  switch (action.type) {
    case SEARCH.SET_PLACE:
      return produce(state, (newState) => {
        newState.place = action.place;
      });

    case SEARCH.SET_LAST_SEARCH:
      return produce(state, (newState) => {
        newState.lastPlace = action.place;
      });
    default:
      return state;
  }
}
