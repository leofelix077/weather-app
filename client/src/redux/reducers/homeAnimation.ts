/* eslint-disable no-param-reassign */
import * as types from "../types";
import produce from "immer";

interface AnimationState {
  [key: string]: boolean;
}

export const initialState: AnimationState = {
  "0": false,
  "1": false,
};

export function homeAnimation(
  state = initialState,
  action: any
): AnimationState {
  switch (action.type) {
    case types.homeAnimation.SET_ANIMATION_STATE:
      return produce(state, (newState) => {
        newState[action.index] = action.state;
      });
    default:
      return state;
  }
}
