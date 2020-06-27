import { OPENWEATHER_API_ENDPOINT, OPENWEATHER_API_KEY } from "../constants";

export function createWeatherApiCall(
  lat: number,
  lng: number,
  count = 40
): string {
  return `${OPENWEATHER_API_ENDPOINT}?lat=${lat}&lon=${lng}&APPID=${OPENWEATHER_API_KEY}&cnt=${count}`;
}
