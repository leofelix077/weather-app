/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { takeLatest, put, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import produce from "immer";
import { SupportedLocale } from "../constants";
import i18next from "i18next";

// types

export const GET_WEATHER = {
  REQUEST: "GET_WEATHER.REQUEST",
  SUCCESS: "GET_WEATHER.SUCCESS",
  FAIL: "GET_WEATHER.FAIL",
};

// actions
interface RequestCurrentWeather {
  type: typeof GET_WEATHER.REQUEST;
  locale: SupportedLocale;
}

export const requestCurrentWeather = (
  locale: SupportedLocale
): RequestCurrentWeather => ({
  type: GET_WEATHER.REQUEST,
  locale,
});

interface SetCurrentWeather {
  type: typeof GET_WEATHER.SUCCESS;
  locale: SupportedLocale;
}

export const setCurrentWeather = (
  locale: SupportedLocale
): SetCurrentWeather => ({
  type: GET_WEATHER.SUCCESS,
  locale,
});

// reducer
interface WeatherInfo {
  weatherInfo: any;
}

export const initialState: WeatherInfo = {
  weatherInfo: {},
};

export function localeDetector(state = initialState, action: any): WeatherInfo {
  switch (action.type) {
    case GET_WEATHER.SUCCESS:
      return produce(state, (newState) => {
        newState.weatherInfo = action.weatherInfo;
      });
    default:
      return state;
  }
}

// saga

async function storeValue(key: string, value: string): Promise<void> {
  try {
    await localStorage.setItem(key, value.toString());
  } catch (error) {
    console.log("localStorage error during store:", error);
  }
}

function* weatherApiSaga(action: { locale: SupportedLocale }): any {
  const { locale } = action;
  yield call([i18next, i18next.changeLanguage], locale);
  yield put(setCurrentWeather(locale));
  try {
    yield call(storeValue, "locale", locale);
  } catch (error) {
    console.log(error);
  }
}

export function* weatherApi(): SagaIterator {
  yield takeLatest(GET_WEATHER.REQUEST as any, weatherApiSaga);
}
