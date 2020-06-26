import { WeatherData } from "../redux/weather";
import { RootState } from "../redux/rootReducer";
import { SupportedLocale, SupportedTemperature } from "../constants";

/* eslint-disable @typescript-eslint/camelcase */
export const getMockData = (): WeatherData => ({
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1593118800,
      main: {
        temp: 290.7,
        feels_like: 291.01,
        temp_min: 287.52,
        temp_max: 290.7,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 958,
        humidity: 75,
        temp_kf: 3.18,
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
        all: 14,
      },
      wind: {
        speed: 0.92,
        deg: 132,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-25 21:00:00",
    },
    {
      dt: 1593129600,
      main: {
        temp: 287.85,
        feels_like: 287.42,
        temp_min: 286.23,
        temp_max: 287.85,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 957,
        humidity: 81,
        temp_kf: 1.62,
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
        all: 6,
      },
      wind: {
        speed: 1.27,
        deg: 119,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-26 00:00:00",
    },
    {
      dt: 1593140400,
      main: {
        temp: 285.95,
        feels_like: 285.26,
        temp_min: 285.42,
        temp_max: 285.95,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 956,
        humidity: 85,
        temp_kf: 0.53,
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
        speed: 1.19,
        deg: 143,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-26 03:00:00",
    },
    {
      dt: 1593151200,
      main: {
        temp: 289.79,
        feels_like: 289.87,
        temp_min: 289.76,
        temp_max: 289.79,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 957,
        humidity: 74,
        temp_kf: 0.03,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.77,
        deg: 140,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-26 06:00:00",
    },
    {
      dt: 1593162000,
      main: {
        temp: 296.22,
        feels_like: 297.03,
        temp_min: 296.22,
        temp_max: 296.22,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 957,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 0.56,
        deg: 194,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-26 09:00:00",
    },
    {
      dt: 1593172800,
      main: {
        temp: 299.14,
        feels_like: 298.5,
        temp_min: 299.14,
        temp_max: 299.14,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 956,
        humidity: 49,
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
        all: 2,
      },
      wind: {
        speed: 2.93,
        deg: 292,
      },
      rain: {
        "3h": 0.46,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-26 12:00:00",
    },
    {
      dt: 1593183600,
      main: {
        temp: 299.41,
        feels_like: 298.36,
        temp_min: 299.41,
        temp_max: 299.41,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 955,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 3.97,
        deg: 289,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-26 15:00:00",
    },
    {
      dt: 1593194400,
      main: {
        temp: 295.87,
        feels_like: 297.68,
        temp_min: 295.87,
        temp_max: 295.87,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 955,
        humidity: 70,
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
        all: 59,
      },
      wind: {
        speed: 0.79,
        deg: 279,
      },
      rain: {
        "3h": 0.28,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-26 18:00:00",
    },
    {
      dt: 1593205200,
      main: {
        temp: 291.65,
        feels_like: 291.83,
        temp_min: 291.65,
        temp_max: 291.65,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 956,
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
        all: 84,
      },
      wind: {
        speed: 2.04,
        deg: 210,
      },
      rain: {
        "3h": 0.27,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-26 21:00:00",
    },
    {
      dt: 1593216000,
      main: {
        temp: 290.23,
        feels_like: 289.46,
        temp_min: 290.23,
        temp_max: 290.23,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 955,
        humidity: 85,
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
        all: 92,
      },
      wind: {
        speed: 3.17,
        deg: 230,
      },
      rain: {
        "3h": 0.47,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-27 00:00:00",
    },
    {
      dt: 1593226800,
      main: {
        temp: 288.55,
        feels_like: 288.34,
        temp_min: 288.55,
        temp_max: 288.55,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 955,
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
        all: 30,
      },
      wind: {
        speed: 1.58,
        deg: 238,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-27 03:00:00",
    },
    {
      dt: 1593237600,
      main: {
        temp: 292.27,
        feels_like: 292.65,
        temp_min: 292.27,
        temp_max: 292.27,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 956,
        humidity: 78,
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
        all: 20,
      },
      wind: {
        speed: 1.86,
        deg: 197,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-27 06:00:00",
    },
    {
      dt: 1593248400,
      main: {
        temp: 298.93,
        feels_like: 299.44,
        temp_min: 298.93,
        temp_max: 298.93,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 956,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 1.51,
        deg: 307,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-27 09:00:00",
    },
    {
      dt: 1593259200,
      main: {
        temp: 301.04,
        feels_like: 300.99,
        temp_min: 301.04,
        temp_max: 301.04,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 956,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 1.95,
        deg: 355,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-27 12:00:00",
    },
    {
      dt: 1593270000,
      main: {
        temp: 298.36,
        feels_like: 298.22,
        temp_min: 298.36,
        temp_max: 298.36,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 955,
        humidity: 59,
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
        all: 67,
      },
      wind: {
        speed: 3.38,
        deg: 291,
      },
      rain: {
        "3h": 0.41,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-27 15:00:00",
    },
    {
      dt: 1593280800,
      main: {
        temp: 293.12,
        feels_like: 293.05,
        temp_min: 293.12,
        temp_max: 293.12,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 956,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 2.83,
        deg: 181,
      },
      rain: {
        "3h": 3.6,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-27 18:00:00",
    },
    {
      dt: 1593291600,
      main: {
        temp: 290.14,
        feels_like: 289.83,
        temp_min: 290.14,
        temp_max: 290.14,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 958,
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
        all: 74,
      },
      wind: {
        speed: 2.02,
        deg: 201,
      },
      rain: {
        "3h": 1.2,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-27 21:00:00",
    },
    {
      dt: 1593302400,
      main: {
        temp: 289.32,
        feels_like: 289.19,
        temp_min: 289.32,
        temp_max: 289.32,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 958,
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
        all: 45,
      },
      wind: {
        speed: 1.9,
        deg: 235,
      },
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-28 00:00:00",
    },
    {
      dt: 1593313200,
      main: {
        temp: 288.28,
        feels_like: 288.45,
        temp_min: 288.28,
        temp_max: 288.28,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 957,
        humidity: 90,
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
        all: 25,
      },
      wind: {
        speed: 1.33,
        deg: 274,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-28 03:00:00",
    },
    {
      dt: 1593324000,
      main: {
        temp: 291.35,
        feels_like: 292.55,
        temp_min: 291.35,
        temp_max: 291.35,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 958,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 0.44,
        deg: 350,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-28 06:00:00",
    },
    {
      dt: 1593334800,
      main: {
        temp: 295.5,
        feels_like: 295.83,
        temp_min: 295.5,
        temp_max: 295.5,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 958,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 1.94,
        deg: 30,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-28 09:00:00",
    },
    {
      dt: 1593345600,
      main: {
        temp: 295.58,
        feels_like: 296.74,
        temp_min: 295.58,
        temp_max: 295.58,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 957,
        humidity: 73,
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
        all: 68,
      },
      wind: {
        speed: 1.94,
        deg: 6,
      },
      rain: {
        "3h": 2.02,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-28 12:00:00",
    },
    {
      dt: 1593356400,
      main: {
        temp: 295.6,
        feels_like: 296.47,
        temp_min: 295.6,
        temp_max: 295.6,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 957,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 2.62,
        deg: 289,
      },
      rain: {
        "3h": 3.72,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-28 15:00:00",
    },
    {
      dt: 1593367200,
      main: {
        temp: 292.79,
        feels_like: 293.45,
        temp_min: 292.79,
        temp_max: 292.79,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 958,
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
        speed: 2.27,
        deg: 259,
      },
      rain: {
        "3h": 2.32,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-28 18:00:00",
    },
    {
      dt: 1593378000,
      main: {
        temp: 291,
        feels_like: 291.21,
        temp_min: 291,
        temp_max: 291,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 959,
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
        all: 100,
      },
      wind: {
        speed: 2.25,
        deg: 259,
      },
      rain: {
        "3h": 0.37,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-28 21:00:00",
    },
    {
      dt: 1593388800,
      main: {
        temp: 288.79,
        feels_like: 288.57,
        temp_min: 288.79,
        temp_max: 288.79,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 959,
        humidity: 90,
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
        speed: 2.12,
        deg: 253,
      },
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-29 00:00:00",
    },
    {
      dt: 1593399600,
      main: {
        temp: 287.71,
        feels_like: 287.26,
        temp_min: 287.71,
        temp_max: 287.71,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 958,
        humidity: 90,
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
        all: 62,
      },
      wind: {
        speed: 1.95,
        deg: 251,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-29 03:00:00",
    },
    {
      dt: 1593410400,
      main: {
        temp: 290.39,
        feels_like: 290.01,
        temp_min: 290.39,
        temp_max: 290.39,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 958,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 2.33,
        deg: 242,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-29 06:00:00",
    },
    {
      dt: 1593421200,
      main: {
        temp: 294.41,
        feels_like: 293.35,
        temp_min: 294.41,
        temp_max: 294.41,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 958,
        humidity: 64,
        temp_kf: 0,
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
        all: 54,
      },
      wind: {
        speed: 3.4,
        deg: 271,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-29 09:00:00",
    },
    {
      dt: 1593432000,
      main: {
        temp: 297.29,
        feels_like: 295.56,
        temp_min: 297.29,
        temp_max: 297.29,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 957,
        humidity: 54,
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
        all: 41,
      },
      wind: {
        speed: 4.39,
        deg: 266,
      },
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-29 12:00:00",
    },
    {
      dt: 1593442800,
      main: {
        temp: 296.73,
        feels_like: 296.01,
        temp_min: 296.73,
        temp_max: 296.73,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 956,
        humidity: 62,
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
        all: 32,
      },
      wind: {
        speed: 3.79,
        deg: 301,
      },
      rain: {
        "3h": 0.42,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-29 15:00:00",
    },
    {
      dt: 1593453600,
      main: {
        temp: 293.97,
        feels_like: 294.76,
        temp_min: 293.97,
        temp_max: 293.97,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 956,
        humidity: 76,
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
        all: 53,
      },
      wind: {
        speed: 1.94,
        deg: 312,
      },
      rain: {
        "3h": 0.2,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-29 18:00:00",
    },
    {
      dt: 1593464400,
      main: {
        temp: 291.16,
        feels_like: 291.79,
        temp_min: 291.16,
        temp_max: 291.16,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 956,
        humidity: 81,
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
        all: 85,
      },
      wind: {
        speed: 1.26,
        deg: 16,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-29 21:00:00",
    },
    {
      dt: 1593475200,
      main: {
        temp: 290.22,
        feels_like: 290.23,
        temp_min: 290.22,
        temp_max: 290.22,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 955,
        humidity: 75,
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
        all: 88,
      },
      wind: {
        speed: 1.14,
        deg: 32,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-30 00:00:00",
    },
    {
      dt: 1593486000,
      main: {
        temp: 288.79,
        feels_like: 288.45,
        temp_min: 288.79,
        temp_max: 288.79,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 954,
        humidity: 74,
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
        speed: 0.95,
        deg: 67,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-30 03:00:00",
    },
    {
      dt: 1593496800,
      main: {
        temp: 290.52,
        feels_like: 290.37,
        temp_min: 290.52,
        temp_max: 290.52,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 953,
        humidity: 74,
        temp_kf: 0,
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
        all: 68,
      },
      wind: {
        speed: 1.4,
        deg: 88,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-30 06:00:00",
    },
    {
      dt: 1593507600,
      main: {
        temp: 294.13,
        feels_like: 295.02,
        temp_min: 294.13,
        temp_max: 294.13,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 953,
        humidity: 70,
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
        all: 77,
      },
      wind: {
        speed: 1.19,
        deg: 137,
      },
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-30 09:00:00",
    },
    {
      dt: 1593518400,
      main: {
        temp: 299.58,
        feels_like: 300.53,
        temp_min: 299.58,
        temp_max: 299.58,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 951,
        humidity: 53,
        temp_kf: 0,
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
        all: 57,
      },
      wind: {
        speed: 1.51,
        deg: 300,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-30 12:00:00",
    },
    {
      dt: 1593529200,
      main: {
        temp: 299.19,
        feels_like: 300.81,
        temp_min: 299.19,
        temp_max: 299.19,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 950,
        humidity: 58,
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
        all: 68,
      },
      wind: {
        speed: 1.15,
        deg: 263,
      },
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-30 15:00:00",
    },
    {
      dt: 1593540000,
      main: {
        temp: 295.17,
        feels_like: 296.21,
        temp_min: 295.17,
        temp_max: 295.17,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 949,
        humidity: 77,
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
        all: 84,
      },
      wind: {
        speed: 2.38,
        deg: 161,
      },
      rain: {
        "3h": 2.26,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-30 18:00:00",
    },
  ],
  city: {
    id: 2867714,
    name: "Munich",
    coord: {
      lat: 48.1374,
      lon: 11.5755,
    },
    country: "DE",
    population: 1260391,
    timezone: 7200,
    sunrise: 1593054883,
    sunset: 1593112676,
  },
});

export const getRootStateMock = (
  overrides?: Partial<RootState>
): RootState => ({
  localeDetector: {
    currentLocale: SupportedLocale.English,
  },
  search: {
    countryCode: "DE",
    place: "München",
  },
  temperature: {
    temperature: SupportedTemperature.Celsius,
  },
  weather: {
    request: {
      error: null,
      processing: false,
      success: true,
    },
    weatherForecast: getMockData(),
  },
  ...overrides,
});
