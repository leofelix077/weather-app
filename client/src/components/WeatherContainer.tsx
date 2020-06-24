import React, { useEffect, useState } from "react";
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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import { WeatherGraph } from "./WeatherGraph";
import { SearchBar } from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "white",
    fontSize: "6vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // margin: theme.spacing(1),
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "10vw",
    color: "#3C3C3C",
  },
  currentTime: {
    fontSize: "2vw",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(1),
  },
  weatherBlockContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  weatherBlockContainerHidden: {
    display: "none",
  },
}));

const WeatherContainer: React.FC = (): ReturnType<React.FC> => {
  const dispatch = useDispatch();
  const currentTime = useTime({ unit: 1, interval: TimeSync.MINUTES });
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2]);
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
    return (
      <div>
        <SearchBar />
        <Error error={error} />
      </div>
    );
  }
  if (processing || !weatherData) {
    return <Loading />;
  }
  if (!selectedDay) {
    setSelectedDay(
      moment
        .unix(weatherData.list[0].dt)
        .utcOffset(weatherData.city.timezone)
        .startOf("day")
        .unix()
    );
  }

  const formattedWeatherData = groupBy(
    weatherData.list,
    (dataPoint: WeatherDataPoint) =>
      moment
        .unix(dataPoint.dt)
        .utcOffset(weatherData.city.timezone)
        .startOf("day")
        .unix()
  );

  const decreaseIndexes = (): void => {
    if (!visibleIndexes[0]) {
      return;
    }
    setVisibleIndexes(visibleIndexes.map((index) => index - 1));
  };

  const increaseIndexes = (): void => {
    if (
      visibleIndexes[visibleIndexes.length - 1] ===
      Object.keys(formattedWeatherData).length
    ) {
      return;
    }
    setVisibleIndexes(visibleIndexes.map((index) => index + 1));
  };

  return (
    <div>
      <Typography className={classes.currentTime}>
        {moment.unix(currentTime).locale(locale).format("LLLL")}
      </Typography>
      <SearchBar />
      <div className={classes.container}>
        <Grid container>
          <Grid
            item
            xs={1}
            className={classes.iconContainer}
            onClick={decreaseIndexes}
          >
            {!!visibleIndexes[0] && (
              <ChevronLeftIcon className={classes.icon} />
            )}
          </Grid>
          <Grid item container xs={10}>
            {Object.entries(formattedWeatherData).map(
              ([key, entries], index) => {
                return (
                  <Grid
                    item
                    xs={4}
                    key={key}
                    className={clsx({
                      [classes.weatherBlockContainer]: true,
                      [classes.weatherBlockContainerHidden]: !visibleIndexes.includes(
                        index
                      ),
                    })}
                    onClick={() => setSelectedDay(parseInt(key, 10))}
                  >
                    <WeatherBlock
                      day={parseInt(key, 10)}
                      data={entries}
                      isSelected={key === selectedDay?.toString()}
                      utcOffset={weatherData.city.timezone}
                    />
                  </Grid>
                );
              }
            )}
          </Grid>

          <Grid
            item
            xs={1}
            className={classes.iconContainer}
            onClick={increaseIndexes}
          >
            {visibleIndexes[visibleIndexes.length - 1] <
              Object.keys(formattedWeatherData).length && (
              <ChevronRightIcon className={classes.icon} />
            )}
          </Grid>
        </Grid>
      </div>
      <Grid item xs={12}>
        <WeatherGraph
          data={formattedWeatherData[selectedDay as number]}
          utcOffset={weatherData.city.timezone}
        />
      </Grid>
    </div>
  );
};

export default WeatherContainer;
