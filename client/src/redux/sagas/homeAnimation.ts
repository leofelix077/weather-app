import * as types from "../types";
import { takeEvery, delay, put } from "redux-saga/effects";
import { setAnimationState } from "../actions/homeAnimation";
import { SagaIterator } from "redux-saga";

function* animationSaga(): any {
  let index = 0;
  yield delay(2000);
  while (index < 4) {
    yield put(setAnimationState(index.toString(), true));
    yield delay(1000);
    index++;
  }
}

export default function* animationRootSaga(): SagaIterator {
  yield takeEvery(types.homeAnimation.REQUEST_ANIMATION as any, animationSaga);
}
