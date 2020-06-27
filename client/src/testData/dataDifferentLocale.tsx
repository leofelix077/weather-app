import { WeatherData } from "../redux/weather";
import { RootState } from "../redux/rootReducer";
import { SupportedLocale, SupportedTemperature } from "../constants";

/* eslint-disable @typescript-eslint/camelcase */
export const getMockDataDifferentLocale = (): WeatherData => ({
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1593259200,
      main: {
        temp: 282.86,
        feels_like: 280.48,
        temp_min: 282.86,
        temp_max: 284.4,
        pressure: 1022,
        sea_level: 1023,
        grnd_level: 1019,
        humidity: 82,
        temp_kf: -1.54,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.34,
        deg: 159,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-27 12:00:00",
    },
    {
      dt: 1593270000,
      main: {
        temp: 286.24,
        feels_like: 283.2,
        temp_min: 286.24,
        temp_max: 287.58,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1018,
        humidity: 63,
        temp_kf: -1.34,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 3.1,
        deg: 114,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-27 15:00:00",
    },
    {
      dt: 1593280800,
      main: {
        temp: 288.05,
        feels_like: 284.61,
        temp_min: 288.05,
        temp_max: 288.51,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 55,
        temp_kf: -0.46,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 3.59,
        deg: 154,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-27 18:00:00",
    },
    {
      dt: 1593291600,
      main: {
        temp: 286.35,
        feels_like: 282.86,
        temp_min: 286.35,
        temp_max: 286.39,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 59,
        temp_kf: -0.04,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 3.49,
        deg: 163,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-27 21:00:00",
    },
    {
      dt: 1593302400,
      main: {
        temp: 285.41,
        feels_like: 282.33,
        temp_min: 285.41,
        temp_max: 285.41,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1020,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 52,
      },
      wind: {
        speed: 2.98,
        deg: 155,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-28 00:00:00",
    },
    {
      dt: 1593313200,
      main: {
        temp: 284.45,
        feels_like: 281.66,
        temp_min: 284.45,
        temp_max: 284.45,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1020,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 2.56,
        deg: 156,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-28 03:00:00",
    },
    {
      dt: 1593324000,
      main: {
        temp: 283.34,
        feels_like: 281.23,
        temp_min: 283.34,
        temp_max: 283.34,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1020,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 1.57,
        deg: 195,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-28 06:00:00",
    },
    {
      dt: 1593334800,
      main: {
        temp: 282.82,
        feels_like: 280.74,
        temp_min: 282.82,
        temp_max: 282.82,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1020,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 86,
      },
      wind: {
        speed: 1.61,
        deg: 190,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-28 09:00:00",
    },
    {
      dt: 1593345600,
      main: {
        temp: 284.47,
        feels_like: 282.87,
        temp_min: 284.47,
        temp_max: 284.47,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1022,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.12,
        deg: 147,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-28 12:00:00",
    },
    {
      dt: 1593356400,
      main: {
        temp: 288.08,
        feels_like: 285.32,
        temp_min: 288.08,
        temp_max: 288.08,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1021,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 2.62,
        deg: 140,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-28 15:00:00",
    },
    {
      dt: 1593367200,
      main: {
        temp: 288.92,
        feels_like: 285.14,
        temp_min: 288.92,
        temp_max: 288.92,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 21,
      },
      wind: {
        speed: 3.98,
        deg: 139,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-28 18:00:00",
    },
    {
      dt: 1593378000,
      main: {
        temp: 286.68,
        feels_like: 283.05,
        temp_min: 286.68,
        temp_max: 286.68,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1020,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.85,
        deg: 129,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-28 21:00:00",
    },
    {
      dt: 1593388800,
      main: {
        temp: 285.78,
        feels_like: 281.76,
        temp_min: 285.78,
        temp_max: 285.78,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1021,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.29,
        deg: 110,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-29 00:00:00",
    },
    {
      dt: 1593399600,
      main: {
        temp: 285.28,
        feels_like: 281.6,
        temp_min: 285.28,
        temp_max: 285.28,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1020,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 4,
        deg: 100,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-29 03:00:00",
    },
    {
      dt: 1593410400,
      main: {
        temp: 284.69,
        feels_like: 281.53,
        temp_min: 284.69,
        temp_max: 284.69,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1019,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 3.35,
        deg: 87,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-29 06:00:00",
    },
    {
      dt: 1593421200,
      main: {
        temp: 284.31,
        feels_like: 281.55,
        temp_min: 284.31,
        temp_max: 284.31,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1019,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 2.78,
        deg: 91,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-29 09:00:00",
    },
    {
      dt: 1593432000,
      main: {
        temp: 285.43,
        feels_like: 282.2,
        temp_min: 285.43,
        temp_max: 285.43,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1018,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 3.54,
        deg: 93,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-29 12:00:00",
    },
    {
      dt: 1593442800,
      main: {
        temp: 288.99,
        feels_like: 286.08,
        temp_min: 288.99,
        temp_max: 288.99,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.61,
        deg: 91,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-29 15:00:00",
    },
    {
      dt: 1593453600,
      main: {
        temp: 290.1,
        feels_like: 287.29,
        temp_min: 290.1,
        temp_max: 290.1,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.02,
        deg: 88,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-29 18:00:00",
    },
    {
      dt: 1593464400,
      main: {
        temp: 287.59,
        feels_like: 284.04,
        temp_min: 287.59,
        temp_max: 287.59,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.63,
        deg: 88,
      },
      rain: {
        "3h": 1.73,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-29 21:00:00",
    },
    {
      dt: 1593475200,
      main: {
        temp: 287.33,
        feels_like: 284.15,
        temp_min: 287.33,
        temp_max: 287.33,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.45,
        deg: 95,
      },
      rain: {
        "3h": 2.64,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-30 00:00:00",
    },
    {
      dt: 1593486000,
      main: {
        temp: 288.18,
        feels_like: 285.42,
        temp_min: 288.18,
        temp_max: 288.18,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.46,
        deg: 82,
      },
      rain: {
        "3h": 7.01,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-30 03:00:00",
    },
    {
      dt: 1593496800,
      main: {
        temp: 288.38,
        feels_like: 286.32,
        temp_min: 288.38,
        temp_max: 288.38,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.64,
        deg: 63,
      },
      rain: {
        "3h": 9.42,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-30 06:00:00",
    },
    {
      dt: 1593507600,
      main: {
        temp: 288.07,
        feels_like: 287.58,
        temp_min: 288.07,
        temp_max: 288.07,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.01,
        deg: 108,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-30 09:00:00",
    },
    {
      dt: 1593518400,
      main: {
        temp: 288.57,
        feels_like: 288.64,
        temp_min: 288.57,
        temp_max: 288.57,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1004,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.44,
        deg: 76,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-30 12:00:00",
    },
    {
      dt: 1593529200,
      main: {
        temp: 289.3,
        feels_like: 289.29,
        temp_min: 289.3,
        temp_max: 289.3,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1003,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.98,
        deg: 57,
      },
      rain: {
        "3h": 1.68,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-30 15:00:00",
    },
    {
      dt: 1593540000,
      main: {
        temp: 290.16,
        feels_like: 288.65,
        temp_min: 290.16,
        temp_max: 290.16,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1002,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.2,
        deg: 319,
      },
      rain: {
        "3h": 2.37,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-30 18:00:00",
    },
    {
      dt: 1593550800,
      main: {
        temp: 288.79,
        feels_like: 287.48,
        temp_min: 288.79,
        temp_max: 288.79,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1002,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 3.09,
        deg: 326,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-30 21:00:00",
    },
    {
      dt: 1593561600,
      main: {
        temp: 288.47,
        feels_like: 285.76,
        temp_min: 288.47,
        temp_max: 288.47,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1001,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 5.36,
        deg: 297,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-01 00:00:00",
    },
    {
      dt: 1593572400,
      main: {
        temp: 287.85,
        feels_like: 283.76,
        temp_min: 287.85,
        temp_max: 287.85,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1001,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 6.89,
        deg: 289,
      },
      rain: {
        "3h": 0.98,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-01 03:00:00",
    },
    {
      dt: 1593583200,
      main: {
        temp: 286.09,
        feels_like: 280.87,
        temp_min: 286.09,
        temp_max: 286.09,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1000,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 7.36,
        deg: 292,
      },
      rain: {
        "3h": 0.51,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-01 06:00:00",
    },
    {
      dt: 1593594000,
      main: {
        temp: 285.46,
        feels_like: 278.5,
        temp_min: 285.46,
        temp_max: 285.46,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 999,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 9.22,
        deg: 299,
      },
      rain: {
        "3h": 0.18,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-01 09:00:00",
    },
    {
      dt: 1593604800,
      main: {
        temp: 286.07,
        feels_like: 280.15,
        temp_min: 286.07,
        temp_max: 286.07,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1003,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 8.56,
        deg: 264,
      },
      rain: {
        "3h": 0.94,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-07-01 12:00:00",
    },
    {
      dt: 1593615600,
      main: {
        temp: 286.46,
        feels_like: 282.27,
        temp_min: 286.46,
        temp_max: 286.46,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.59,
        deg: 246,
      },
      rain: {
        "3h": 0.45,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-07-01 15:00:00",
    },
    {
      dt: 1593626400,
      main: {
        temp: 287.76,
        feels_like: 283.03,
        temp_min: 287.76,
        temp_max: 287.76,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 6.05,
        deg: 239,
      },
      rain: {
        "3h": 0.49,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-07-01 18:00:00",
    },
    {
      dt: 1593637200,
      main: {
        temp: 286.25,
        feels_like: 282.74,
        temp_min: 286.25,
        temp_max: 286.25,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 46,
      },
      wind: {
        speed: 4.33,
        deg: 250,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-01 21:00:00",
    },
    {
      dt: 1593648000,
      main: {
        temp: 284.67,
        feels_like: 281.02,
        temp_min: 284.67,
        temp_max: 284.67,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 30,
      },
      wind: {
        speed: 4.42,
        deg: 251,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-02 00:00:00",
    },
    {
      dt: 1593658800,
      main: {
        temp: 283.44,
        feels_like: 280.59,
        temp_min: 283.44,
        temp_max: 283.44,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1014,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 3.13,
        deg: 265,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-02 03:00:00",
    },
    {
      dt: 1593669600,
      main: {
        temp: 282.71,
        feels_like: 280.1,
        temp_min: 282.71,
        temp_max: 282.71,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 2.79,
        deg: 280,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-02 06:00:00",
    },
    {
      dt: 1593680400,
      main: {
        temp: 282.5,
        feels_like: 279.72,
        temp_min: 282.5,
        temp_max: 282.5,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1014,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.02,
        deg: 282,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-07-02 09:00:00",
    },
  ],
  city: {
    id: 3452925,
    name: "Porto Alegre",
    coord: {
      lat: -30.0331,
      lon: -51.23,
    },
    country: "BR",
    population: 1372741,
    timezone: -10800,
    sunrise: 1593253280,
    sunset: 1593290076,
  },
});

export const getRootStateMockDifferentLocale = (
  overrides?: Partial<RootState>
): RootState => ({
  localeDetector: {
    currentLocale: SupportedLocale.Portuguese,
  },
  search: {
    place: { lat: -29.7510572, lng: -51.2131742 },
    lastPlace: null,
  },
  temperature: {
    temperature: SupportedTemperature.Fahrenheit,
  },
  weather: {
    request: {
      error: null,
      processing: false,
      success: true,
    },
    weatherForecast: getMockDataDifferentLocale(),
  },
  ...overrides,
});
