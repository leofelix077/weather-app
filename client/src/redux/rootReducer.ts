import { combineReducers, Reducer } from "redux";
import {
  localeDetector,
  initialState as localeDetectorState,
} from "./localeDetector";
import { connectRouter } from "connected-react-router";

export const reducer = (history: any): Reducer =>
  combineReducers({
    localeDetector,
    router: connectRouter(history),
  });

export const initialState = {
  localeDetector: localeDetectorState,
};

export type RootState = typeof initialState;
