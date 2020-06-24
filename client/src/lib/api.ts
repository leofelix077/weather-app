import { OPENWEATHER_API_ENDPOINT, OPENWEATHER_API_KEY } from "../constants";

export function createWeatherApiCall(
  city: string,
  isoCountryCode: string,
  count = 40
): string {
  return `${OPENWEATHER_API_ENDPOINT}?q=${city},${isoCountryCode}&APPID=${OPENWEATHER_API_KEY}&cnt=${count}`;
}
