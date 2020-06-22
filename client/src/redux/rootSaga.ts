import { all, fork } from "redux-saga/effects";
import { localeDetectorSaga } from "./localeDetector";
import { weatherApi } from "./weatherApi";

function* rootSaga(): any {
  yield all([fork(localeDetectorSaga), fork(weatherApi)]);
}

export default rootSaga;
