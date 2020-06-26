import React from "react";
import { mount } from "enzyme";
import { describe, expect, it } from "@jest/globals";
import WeatherBlock from "../components/WeatherBlock";
import groupBy from "lodash/groupBy";
import { getRootStateMock } from "../testData/data";
import { WeatherDataPoint, WeatherData } from "../redux/weather";
import moment from "moment";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "jsdom-global/register";
import mockdate from "mockdate";

const mockStore = configureMockStore();

describe("Should render each weather block with correct temperature", () => {
  it("renders WeatherBlock correctly", () => {
    mockdate.set(1593118700000);
    const store = getRootStateMock();

    const weatherData = store.weather.weatherForecast as WeatherData;

    const formattedWeatherData = groupBy(
      weatherData.list,
      (dataPoint: WeatherDataPoint) =>
        moment
          .unix(dataPoint.dt)
          .utcOffset(weatherData.city.timezone)
          .startOf("day")
          .unix()
    );
    const selectedDay = moment
      .unix(weatherData.list[0].dt)
      .utcOffset(weatherData.city.timezone)
      .startOf("day")
      .unix();

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
});
