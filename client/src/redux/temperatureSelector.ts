/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { takeLatest, put, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import produce from "immer";
import { SupportedTemperature, TEMPERATURE_KEY } from "../constants";
import { storeValue } from "../lib/storeLocal";

// types

export const TEMPERATURE_CHANGE = {
  REQUEST: "TEMPERATURE_CHANGE.REQUEST",
  SET: "TEMPERATURE_CHANGE.SET",
};

// actions
interface RequestTemperatureChange {
  type: typeof TEMPERATURE_CHANGE.REQUEST;
  temperature: SupportedTemperature;
}

export const requestTemperatureChange = (
  temperature: SupportedTemperature
): RequestTemperatureChange => ({
  type: TEMPERATURE_CHANGE.REQUEST,
  temperature,
});

interface SetTemperatureChange {
  type: typeof TEMPERATURE_CHANGE.SET;
  temperature: SupportedTemperature;
}

export const setTemperatureChange = (
  temperature: SupportedTemperature
): SetTemperatureChange => ({
  type: TEMPERATURE_CHANGE.SET,
  temperature,
});

// reducer
interface SupportedTemperatureState {
  temperature: SupportedTemperature;
}

export const initialState: SupportedTemperatureState = {
  temperature: SupportedTemperature.Fahrenheit,
};

export function temperatureReducer(
  state = initialState,
  action: any
): SupportedTemperatureState {
  switch (action.type) {
    case TEMPERATURE_CHANGE.SET:
      return produce(state, (newState) => {
        newState.temperature = action.temperature;
      });
    default:
      return state;
  }
}

// saga

function* temperatureChange(action: {
  temperature: SupportedTemperature;
}): any {
  const { temperature } = action;
  yield put(setTemperatureChange(temperature));
  yield call(storeValue, TEMPERATURE_KEY, temperature);
}

export function* temperatureSelectorSaga(): SagaIterator {
  yield takeLatest(TEMPERATURE_CHANGE.REQUEST as any, temperatureChange);
}
