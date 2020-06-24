import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentWeatherRequest,
  WeatherData,
  WeatherDataPoint,
} from "../redux/weather";
import { RootState } from "../redux/rootReducer";
import { Loading } from "./Loading";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { Error } from "./Error";
import WeatherBlock from "./WeatherBlock";
import moment from "moment-timezone";
import groupBy from "lodash/groupBy";
import { useTime } from "react-time-sync";
import TimeSync from "time-sync";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "white",
    fontSize: "6vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
}));

const WeatherContainer: React.FC = (): ReturnType<React.FC> => {
  const dispatch = useDispatch();

  const currentTime = useTime({ unit: 1, interval: TimeSync.MINUTES });

  const classes = useStyles();

  useEffect(() => {
    dispatch(getCurrentWeatherRequest("Munich", "de"));
  }, []);

  const weatherData = useSelector(
    (state: RootState) => state.weather.weatherForecast as WeatherData
  );

  const locale = useSelector(
    (state: RootState) => state.localeDetector.currentLocale
  );
  const { error, processing } = useSelector(
    (state: RootState) => state.weather.request
  );

  if (error) {
    return <Error error={error} />;
  }

  if (processing || !weatherData) {
    return <Loading />;
  }

  const formattedWeatherData = groupBy(
    weatherData.list,
    (dataPoint: WeatherDataPoint) =>
      moment
        .unix(dataPoint.dt)
        .startOf("day")
        .add(weatherData.city.timezone, "seconds")
        .unix()
  );

  console.log(formattedWeatherData);

  return (
    <div>
      <Typography style={{ fontSize: "1vw", padding: 32 }}>
        {moment.unix(currentTime).locale(locale).format("LLLL")}
      </Typography>
      <div className={classes.container}>
        <Grid container>
          {weatherData.list.map((dataPoint) => {
            console.log(dataPoint);
            return (
              <Grid item xs={4}>
                <WeatherBlock />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default WeatherContainer;
