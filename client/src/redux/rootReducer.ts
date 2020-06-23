import { combineReducers, Reducer } from "redux";
import {
  localeDetector,
  initialState as localeDetectorState,
} from "./localeDetector";
import {
  temperatureSelector as temperature,
  initialState as temperatureSelectorState,
} from "./temperatureSelector";
import { connectRouter } from "connected-react-router";

export const reducer = (history: any): Reducer =>
  combineReducers({
    temperature,
    localeDetector,
    router: connectRouter(history),
  });

export const initialState = {
  localeDetector: localeDetectorState,
  temperature: temperatureSelectorState,
};

export type RootState = typeof initialState;
