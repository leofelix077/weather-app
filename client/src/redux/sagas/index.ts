import { all, fork } from "redux-saga/effects";
import homeAnimation from "./homeAnimation";

function* rootSaga(): any {
  yield all([fork(homeAnimation)]);
}

export default rootSaga;
