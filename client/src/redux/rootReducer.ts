import { combineReducers, Reducer } from "redux";
import {
  localeDetector,
  initialState as localeDetectorState,
} from "./localeDetector";

import {
  temperatureSelector as temperature,
  initialState as temperatureSelectorState,
} from "./temperatureSelector";

import {
  weatherReducer as weather,
  initialState as weatherState,
} from "./weather";
import { connectRouter } from "connected-react-router";

export const reducer = (history: any): Reducer =>
  combineReducers({
    temperature,
    localeDetector,
    weather,
    router: connectRouter(history),
  });

export const initialState = {
  localeDetector: localeDetectorState,
  temperature: temperatureSelectorState,
  weather: weatherState,
};

export type RootState = typeof initialState;
