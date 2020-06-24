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
  languageText: {
    fontSize: 8,
    color: "white",
  },
}));

const LocaleSelector: React.FC = (): ReturnType<React.FC> => {
  const temperature = useSelector(
    (state: RootState) => state.temperature.temperature
  );

  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation("temperature");

  const handleSelectLanguage = async (
    event: React.ChangeEvent<{ value: unknown }>
  ): Promise<void> => {
    dispatch(
      requestTemperatureChange(event.target.value as SupportedTemperature)
    );
  };

  return (
    <div className={classes.list}>
      <Typography className={classes.languageText}>{t("header")}</Typography>
      <Select
        labelId="language-selector"
        id="language-selector"
        value={temperature}
        onChange={handleSelectLanguage}
        style={{ width: "100%" }}
        classes={{
          select: classes.selectRoot,
          selectMenu: classes.selectMenu,
        }}
      >
        {Object.entries(SupportedTemperature).map(([key, value]) => (
          <MenuItem value={value as string}>{key}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default LocaleSelector;
