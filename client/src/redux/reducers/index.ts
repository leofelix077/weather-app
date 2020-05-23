import { combineReducers } from "redux";
import {
  homeAnimation,
  initialState as homeAnimationState,
} from "./homeAnimation";

export const reducer = combineReducers({ homeAnimation });

export const initialState = {
  homeAnimation: homeAnimationState,
};

export type RootState = typeof initialState;
