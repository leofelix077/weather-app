import React from "react";
import { mount } from "enzyme";
import { describe, expect, it } from "@jest/globals";
import WeatherBlock from "../components/WeatherBlock";
import { getRootStateMock } from "../testData/data";
import { getRootStateMockDifferentLocale } from "../testData/dataDifferentLocale";
import { WeatherData } from "../redux/weather";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "jsdom-global/register";
import mockdate from "mockdate";
import { WeatherGraph } from "../components/WeatherGraph";
import { formatWeatherData, formatSelectedDay } from "../lib/formatWeatherData";
import moment from "moment";
import { convertTemperature } from "../lib/converter";
import { SupportedTemperature, ABSOLUTE_ZERO } from "../constants";

const mockStore = configureMockStore();

describe("Forecast for locale, day and utc offset", () => {
  it("renders WeatherBlock correctly", () => {
    mockdate.set(1593118700000);
    const store = getRootStateMock();

    const weatherData = store.weather.weatherForecast as WeatherData;

    const formattedWeatherData = formatWeatherData(weatherData);

    const selectedDay = formatSelectedDay(
      weatherData.list[0].dt,
      weatherData.city.timezone
    );

    const storeProvider = mockStore(store);

    const wrapper = mount(
      <Provider store={storeProvider}>
        <WeatherBlock
          data={formattedWeatherData[selectedDay]}
          day={selectedDay}
          isSelected
          utcOffset={weatherData.city.timezone}
        />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    const element = wrapper.find("p#temperature-text");
    expect(element.length).toBe(1);
    expect(element.children).toBeDefined();
    expect((element as any).props().children.join("")).toBe("18 °C");
  });

  it("renders WeatherGraph correctly for differentLocale", () => {
    mockdate.set(1593118700000);
    const store = getRootStateMockDifferentLocale();

    const weatherData = store.weather.weatherForecast as WeatherData;

    const formattedWeatherData = formatWeatherData(weatherData);

    const selectedDay = formatSelectedDay(
      weatherData.list[0].dt,
      weatherData.city.timezone
    );

    const storeProvider = mockStore(store);

    const wrapper = mount(
      <Provider store={storeProvider}>
        <WeatherGraph
          data={formattedWeatherData[selectedDay]}
          utcOffset={weatherData.city.timezone}
        />
      </Provider>
    );
    expect(wrapper.props()).toMatchSnapshot();
    const element = wrapper.find("Bar").props();
    const elementData: string[] = (element as any).data.labels;
    expect(elementData.slice(1)).not.toContain("00:00");
    expect(elementData).toMatchSnapshot();
    wrapper.unmount();

    const wrapper2 = mount(
      <Provider store={storeProvider}>
        <WeatherGraph
          data={
            formattedWeatherData[moment.unix(selectedDay).add(1, "day").unix()]
          }
          utcOffset={weatherData.city.timezone}
        />
      </Provider>
    );
    expect(wrapper2.props()).toMatchSnapshot();
    const element2 = wrapper2.find("Bar").props();
    const element2Data: string[] = (element2 as any).data.labels;

    expect(element2Data.slice(1)).not.toContain("00:00");
    expect(element2Data[0]).toBe("00:00");
    expect(element2Data[element2Data.length - 1]).toBe("21:00");
    expect(element2Data).toMatchSnapshot();
    wrapper2.unmount();
  });

  it("should convert temperature correctly", () => {
    const fahrenheitZeroTemperature = convertTemperature(
      ABSOLUTE_ZERO * -1,
      SupportedTemperature.Fahrenheit
    );
    const celsiusZeroTemperature = convertTemperature(
      ABSOLUTE_ZERO * -1,
      SupportedTemperature.Celsius
    );

    expect(fahrenheitZeroTemperature).toEqual(32);
    expect(celsiusZeroTemperature).toEqual(0);

    const fahrenheitBoilWaterTemperature = convertTemperature(
      ABSOLUTE_ZERO * -1 + 100,
      SupportedTemperature.Fahrenheit
    );
    const celsiusBoilWaterTemperature = convertTemperature(
      ABSOLUTE_ZERO * -1 + 100,
      SupportedTemperature.Celsius
    );

    expect(fahrenheitBoilWaterTemperature).toEqual(212);
    expect(celsiusBoilWaterTemperature).toEqual(100);
  });
});
