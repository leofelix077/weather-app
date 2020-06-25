import React from "react";
import { mount } from "enzyme";
import { describe, expect, it } from "@jest/globals";
import WeatherBlock from "../components/WeatherBlock";
import groupBy from "lodash/groupBy";
import { getMockData } from "../testData/data";
import { WeatherDataPoint } from "../redux/weather";
import moment from "moment";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { RootState } from "../redux/rootReducer";
import { SupportedLocale, SupportedTemperature } from "../constants";
import "jsdom-global/register";
import mockdate from "mockdate";

const mockStore = configureMockStore();

describe("Should render each weather block with correct temperature", () => {
  it("renders WeatherBlock correctly", () => {
    mockdate.set(1593118700000);
    const weatherData = getMockData();
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

    const store: RootState = {
      localeDetector: {
        currentLocale: SupportedLocale.English,
      },
      search: {
        countryCode: "DE",
        place: "München",
      },
      temperature: {
        temperature: SupportedTemperature.Celsius,
      },
      weather: {
        request: {
          error: null,
          processing: false,
          success: true,
        },
        weatherForecast: weatherData,
      },
    };

    const storeProvider = mockStore(store);

    const wrapper = mount(
      <Provider store={storeProvider}>
        <WeatherBlock
          data={formattedWeatherData[selectedDay]}
          day={0}
          isSelected
          utcOffset={0}
        />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
