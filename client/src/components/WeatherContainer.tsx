import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeatherRequest, WeatherData } from "../redux/weather";
import { RootState } from "../redux/rootReducer";
import { Loading } from "./Loading";
import { makeStyles, Grid } from "@material-ui/core";
import { Error } from "./Error";
import WeatherBlock from "./WeatherBlock";

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

  const classes = useStyles();

  const weatherData = useSelector(
    (state: RootState) => state.weather.weatherForecast as WeatherData
  );
  const { error, processing } = useSelector(
    (state: RootState) => state.weather.request
  );

  useEffect(() => {
    dispatch(getCurrentWeatherRequest("Munich", "de"));
  }, []);

  if (processing) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className={classes.container}>
      <Grid container>
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <Grid item xs={4}>
              <WeatherBlock />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default WeatherContainer;
