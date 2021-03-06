import React from "react";
import { SupportedTemperature } from "../constants";
import { Select, MenuItem, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useTranslation } from "react-i18next";
import { requestTemperatureChange } from "../redux/temperatureSelector";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  selectRoot: {
    backgroundColor: "#333333",
    borderRadius: "3px",
    borderColor: theme.palette.primary.dark,
  },
  selectMenu: {
    color: "#8D8D8D",
    backgroundColor: "3E3E3E",
    padding: theme.spacing(1),
  },
  temperatureText: {
    fontSize: 8,
    color: "white",
  },
}));

const TemperatureSelector: React.FC = (): ReturnType<React.FC> => {
  const temperature = useSelector(
    (state: RootState) => state.temperature.temperature
  );

  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation("temperature");

  const handleSelectTemperature = async (
    event: React.ChangeEvent<{ value: unknown }>
  ): Promise<void> => {
    dispatch(
      requestTemperatureChange(event.target.value as SupportedTemperature)
    );
  };

  return (
    <div className={classes.list}>
      <Typography className={classes.temperatureText}>{t("header")}</Typography>
      <Select
        labelId="temperature-selector"
        id="temperature-selector"
        value={temperature}
        onChange={handleSelectTemperature}
        style={{ width: "100%" }}
        classes={{
          select: classes.selectRoot,
          selectMenu: classes.selectMenu,
        }}
      >
        {Object.entries(SupportedTemperature).map(([key, value]) => (
          <MenuItem key={key} value={value as string}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default TemperatureSelector;
