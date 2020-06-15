import * as types from "../types";

interface SetAnimationState {
  type: typeof types.homeAnimation.SET_ANIMATION_STATE;
  index: string;
  state: boolean;
}
export const setAnimationState = (
  index: string,
  state: boolean
): SetAnimationState => ({
  type: types.homeAnimation.SET_ANIMATION_STATE,
  index,
  state,
});

interface RequestAnimation {
  type: typeof types.homeAnimation.REQUEST_ANIMATION;
}
export const requestAnimation = (): RequestAnimation => ({
  type: types.homeAnimation.REQUEST_ANIMATION,
});
