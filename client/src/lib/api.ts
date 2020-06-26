import { OPENWEATHER_API_ENDPOINT, OPENWEATHER_API_KEY } from "../constants";

export function createWeatherApiCall(
  place: string,
  isoCountryCode: string,
  count = 40
): string {
  return `${OPENWEATHER_API_ENDPOINT}?q=${place},${isoCountryCode}&APPID=${OPENWEATHER_API_KEY}&cnt=${count}`;
}
