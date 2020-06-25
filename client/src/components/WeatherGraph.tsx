import React from "react";
import { WeatherDataPoint } from "../redux/weather";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { convertTemperature } from "../lib/converter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

interface WeatherGraphProps {
  data: WeatherDataPoint[];
  utcOffset: number;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    width: "60vw",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    height: "30vh",
  },
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const WeatherGraph: React.FC<WeatherGraphProps> = ({
  data,
  utcOffset,
}): ReturnType<React.FC<WeatherGraphProps>> => {
  const classes = useStyles();

  const { t } = useTranslation("weather");

  const preferredTemperature = useSelector(
    (state: RootState) => state.temperature.temperature
  );

  if (!data) {
    return null;
  }

  const labels = data.map((dataPoint) =>
    moment
      .unix(dataPoint.dt)
      .utcOffset(utcOffset / 60)
      .format("HH:mm")
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: t("graphLabel"),
                backgroundColor: "rgba(0,99,0,0.2)",
                borderColor: "rgba(0,99,0,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(0,99,0,0.4)",
                hoverBorderColor: "rgba(0,99,0,1)",
                data: data.map((dataPoint) =>
                  convertTemperature(dataPoint.main.temp, preferredTemperature)
                ),
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

WeatherGraph.propTypes = {
  data: PropTypes.array.isRequired,
  utcOffset: PropTypes.number.isRequired,
};
