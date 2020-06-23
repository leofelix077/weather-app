import { all, fork } from "redux-saga/effects";
import { localeDetectorSaga } from "./localeDetector";
import { weatherApi } from "./weatherApi";
import { temperatureSelectorSaga } from "./temperatureSelector";

function* rootSaga(): any {
  yield all([
    fork(localeDetectorSaga),
    fork(weatherApi),
    fork(temperatureSelectorSaga),
  ]);
}

export default rootSaga;
