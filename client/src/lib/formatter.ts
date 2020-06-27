import groupBy from "lodash/groupBy";
import { Dictionary } from "lodash";
import { WeatherDataPoint, WeatherData } from "../redux/weather";
import moment from "moment";

export const formatSelectedDay = (
  selectedDay: number,
  timezoneOffset: number
): number => {
  return moment
    .unix(selectedDay)
    .utcOffset(timezoneOffset / 60)
    .startOf("day")
    .unix();
};

export const formatWeatherData = (
  weatherData: WeatherData
): Dictionary<WeatherDataPoint[]> => {
  const formattedWeatherData = groupBy(
    weatherData.list,
    (dataPoint: WeatherDataPoint) =>
      formatSelectedDay(dataPoint.dt, weatherData.city.timezone)
  );

  return formattedWeatherData;
};
