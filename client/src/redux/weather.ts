/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call, delay, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import produce from "immer";
import { transport } from "../lib/transport";
import { createWeatherApiCall } from "../lib/api";
import { RootState } from "./rootReducer";
import { setLastSearchState } from "./search";

// types
export const GET_WEATHER = {
  REQUEST: "GET_WEATHER.REQUEST",
  SUCCESS: "GET_WEATHER.SUCCESS",
  ERROR: "GET_WEATHER.ERROR",
  CANCEL: "GET_WEATHER.CANCEL",
};

interface WeatherLocation {
  place: string;
  isoCountryCode: string;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherDataPoint {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: WeatherDescription[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  rain?: {
    [key: string]: number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface WeatherPlaceInformation {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDataPoint[];
  city: WeatherPlaceInformation;
}

// actions
interface GetCurrentWeatherRequest extends WeatherLocation {
  type: typeof GET_WEATHER.REQUEST;
}

export const getCurrentWeatherRequest = (
  place: string,
  isoCountryCode: string
): GetCurrentWeatherRequest => ({
  type: GET_WEATHER.REQUEST,
  place,
  isoCountryCode,
});

interface GetCurrentWeatherSuccess {
  type: typeof GET_WEATHER.SUCCESS;
  weatherForecast: WeatherData;
}

export const getCurrentWeatherSuccess = (
  weatherForecast: WeatherData
): GetCurrentWeatherSuccess => ({
  type: GET_WEATHER.SUCCESS,
  weatherForecast,
});

interface GetCurrentWeatherError {
  type: typeof GET_WEATHER.ERROR;
  error: string;
}

export const getCurrentWeatherError = (
  error: string
): GetCurrentWeatherError => ({
  type: GET_WEATHER.ERROR,
  error,
});
interface GetCurrentWeatherCancel {
  type: typeof GET_WEATHER.CANCEL;
}

export const getCurrentWeatherCancel = (): GetCurrentWeatherCancel => ({
  type: GET_WEATHER.CANCEL,
});

// reducer
interface WeatherForecast {
  weatherForecast: WeatherData | null;
  request: {
    processing: boolean;
    success: boolean;
    error: string | null;
  };
}

export const initialState: WeatherForecast = {
  weatherForecast: null,
  request: {
    processing: false,
    success: false,
    error: null,
  },
};

export function weatherReducer(
  state = initialState,
  action: any
): WeatherForecast {
  switch (action.type) {
    case GET_WEATHER.REQUEST:
      return produce(state, (newState) => {
        newState.request.processing = true;
      });
    case GET_WEATHER.SUCCESS:
      return produce(state, (newState) => {
        newState.weatherForecast = action.weatherForecast;
        newState.request.success = true;
        newState.request.processing = false;
        newState.request.error = null;
      });
    case GET_WEATHER.ERROR:
      return produce(state, (newState) => {
        newState.weatherForecast = null;
        newState.request.error = action.error;
        newState.request.success = false;
        newState.request.processing = false;
      });
    case GET_WEATHER.CANCEL:
      return produce(state, (newState) => {
        newState.request.processing = false;
      });
    default:
      return state;
  }
}

// saga

function* weatherApiSaga(action: WeatherLocation): any {
  const { place, isoCountryCode } = action;

  const lastPlace = yield select((state: RootState) => state.search.lastPlace);
  const lastCountryCode = yield select(
    (state: RootState) => state.search.lastCountryCode
  );

  if (place !== lastPlace || isoCountryCode !== lastCountryCode) {
    try {
      const response: WeatherData = yield call(transport, {
        url: createWeatherApiCall(place, isoCountryCode),
      });
      yield delay(500); // simulate longer request
      yield put(getCurrentWeatherSuccess(response));
    } catch (error) {
      yield put(getCurrentWeatherError(error.message));
    } finally {
      yield put(setLastSearchState(isoCountryCode, place));
    }
  } else {
    yield put(getCurrentWeatherCancel());
  }
}

export function* weatherApi(): SagaIterator {
  yield takeEvery(GET_WEATHER.REQUEST as any, weatherApiSaga);
}
