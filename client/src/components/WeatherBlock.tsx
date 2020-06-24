import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { WeatherDataPoint } from "../redux/weather";
import PropTypes from "prop-types";
import { convertTemperature } from "../lib/converter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useTranslation } from "react-i18next";
import moment from "moment";
import clsx from "clsx";

interface WeatherBlockProps {
  data: WeatherDataPoint[];
  day: number;
  isSelected: boolean;
  utcOffset: number;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    width: "100%",
    margin: theme.spacing(2),
    borderRadius: 4,
    boxShadow: "2px 2px rgba(0,0,0,0.2)",
    backgroundColor: "#141414",
  },
  temperature: {
    color: "white",
    fontSize: "6vw",
  },
  additionalInfoText: {
    color: "white",
    fontSize: "2vw",
  },
  additionalInfoHeader: {
    color: "white",
    fontSize: "1vw",
  },
  additionalInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  additionalInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    display: "flex",
    padding: theme.spacing(1),
    width: "100%",
  },
  feelsLikeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  feelsLikeHeader: {
    fontSize: "1vw",
  },
  feelsLike: {
    fontSize: "2vw",
  },
  containerSelected: {
    boxShadow: "2px 2px rgba(128,128,128,0.2)",
  },
  date: {
    fontSize: "2vw",
  },
}));

const WeatherBlock: React.FC<WeatherBlockProps> = ({
  data,
  day,
  isSelected,
  utcOffset,
}): ReturnType<React.FC<WeatherBlockProps>> => {
  const classes = useStyles();

  const { t } = useTranslation("weather");

  const locale = useSelector(
    (state: RootState) => state.localeDetector.currentLocale
  );
  const preferredTemperature = useSelector(
    (state: RootState) => state.temperature.temperature
  );

  const temps = data.reduce(
    (acc, dataPoint) => {
      acc.avg += convertTemperature(dataPoint.main.temp, preferredTemperature);
      acc.humidity += dataPoint.main.humidity;
      acc.pressure += dataPoint.main.pressure;
      acc.feelsLike += convertTemperature(
        dataPoint.main.feels_like,
        preferredTemperature
      );
      return acc;
    },
    {
      avg: 0,
      humidity: 0,
      pressure: 0,
      feelsLike: 0,
    }
  );

  const finalTemperature = Math.floor(temps.avg / data.length);
  const finalHumidity = Math.floor(temps.humidity / data.length);
  const finalPressure = Math.floor(temps.pressure / data.length);
  const finalFeelsLike = Math.floor(temps.feelsLike / data.length);

  return (
    <div
      className={clsx({
        [classes.container]: true,
        [classes.containerSelected]: isSelected,
      })}
    >
      <Typography className={classes.date}>
        {moment
          .unix(day)
          .utcOffset(utcOffset / 60)
          .locale(locale)
          .format("L")}
      </Typography>
      <Typography className={classes.temperature}>
        {finalTemperature} °{preferredTemperature}
      </Typography>
      <div>
        <Typography className={classes.feelsLikeHeader}>
          {t("feelsLike")}
        </Typography>
        <Typography className={classes.feelsLike}>
          {finalFeelsLike} °{preferredTemperature}
        </Typography>
      </div>
      <div className={classes.additionalInfo}>
        <div className={classes.additionalInfoContainer}>
          <Typography className={classes.additionalInfoHeader}>
            {t("humidity")}
          </Typography>
          <Typography className={classes.additionalInfoText}>
            {finalHumidity}%
          </Typography>
        </div>
        <div className={classes.additionalInfoContainer}>
          <Typography className={classes.additionalInfoHeader}>
            {t("pressure")}
          </Typography>
          <Typography className={classes.additionalInfoText}>
            {finalPressure} hpa
          </Typography>
        </div>
      </div>
    </div>
  );
};

WeatherBlock.propTypes = {
  data: PropTypes.array.isRequired,
  day: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  utcOffset: PropTypes.number.isRequired,
};

export default WeatherBlock;
