import { SupportedTemperature, TEMPERATURE_KEY } from "../constants";
import i18next from "i18next";

const ABZOLUTE_ZERO = -273.15;

export const convertTemperature = (
  degrees: number,
  temperature: SupportedTemperature
): number => {
  switch (temperature) {
    case SupportedTemperature.Celsius:
      return Math.round(degrees + ABZOLUTE_ZERO);
    case SupportedTemperature.Fahrenheit:
      return Math.round(((degrees + ABZOLUTE_ZERO) * 9) / 5 + 32);
    default:
      localStorage.removeItem(TEMPERATURE_KEY);
      throw new Error(i18next.t("errors:temperature-unsupported"));
  }
};
