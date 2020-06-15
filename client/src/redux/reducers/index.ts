import { combineReducers, Reducer } from "redux";
import {
  homeAnimation,
  initialState as homeAnimationState,
} from "./homeAnimation";
import { connectRouter } from "connected-react-router";

export const reducer = (history: any): Reducer =>
  combineReducers({
    homeAnimation,
    router: connectRouter(history),
  });

export const initialState = {
  homeAnimation: homeAnimationState,
};

export type RootState = typeof initialState;
