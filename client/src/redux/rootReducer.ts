import { combineReducers, Reducer } from "redux";
import {
  localeDetectorReducer as localeDetector,
  initialState as localeDetectorState,
} from "./localeDetector";
import {
  temperatureReducer as temperature,
  initialState as temperatureSelectorState,
} from "./temperatureSelector";
import {
  weatherReducer as weather,
  initialState as weatherState,
} from "./weather";
import { searchReducer as search, initialState as searchState } from "./search";
import { connectRouter } from "connected-react-router";

export const reducer = (history: any): Reducer =>
  combineReducers({
    temperature,
    localeDetector,
    weather,
    search,
    router: connectRouter(history),
  });

export const initialState = {
  localeDetector: localeDetectorState,
  temperature: temperatureSelectorState,
  weather: weatherState,
  search: searchState,
};

export type RootState = typeof initialState;
