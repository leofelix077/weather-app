import {
  SupportedTemperature,
  TEMPERATURE_KEY,
  ABSOLUTE_ZERO,
} from "../constants";
import i18next from "i18next";

export const convertTemperature = (
  degrees: number,
  temperature: SupportedTemperature
): number => {
  switch (temperature) {
    case SupportedTemperature.Celsius:
      return Math.round(degrees + ABSOLUTE_ZERO);
    case SupportedTemperature.Fahrenheit:
      return Math.round(((degrees + ABSOLUTE_ZERO) * 9) / 5 + 32);
    default:
      localStorage.removeItem(TEMPERATURE_KEY);
      throw new Error(i18next.t("errors:temperature-unsupported"));
  }
};
