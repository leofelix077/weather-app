import { SupportedTemperature } from "../constants";
import i18next from "i18next";

const ABZOLUTE_ZERO = -273.15;

export const convertTemperature = (
  degrees: number,
  temperature: SupportedTemperature
): number => {
  switch (temperature) {
    case SupportedTemperature.Celsius:
      return degrees + ABZOLUTE_ZERO;
    case SupportedTemperature.Fahrenheit:
      return ((degrees + ABZOLUTE_ZERO) * 9) / 5 + 32;
    default:
      throw new Error(i18next.t("errors:temperature-unsupported"));
  }
};
