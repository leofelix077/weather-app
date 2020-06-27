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

const mockStore = configureMockStore();

describe("Should render each weather block with correct temperature", () => {
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
    expect((element as any).data.labels.slice(1)).not.toContain("00:00");
    expect((element as any).data.labels).toMatchSnapshot();
  });
});
