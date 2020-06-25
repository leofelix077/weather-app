import React, { useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getCurrentWeatherRequest } from "../redux/weather";

const useStyles = makeStyles((theme) => ({
  searchField: {
    padding: theme.spacing(2),
  },
  searchFieldContainer: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "row",
    justifyContent: "space-around",
  },
  textFieldRoot: {
    padding: 0,
  },
  input: {
    color: "white",
  },
  buttonContainer: {
    height: 24,
  },
  buttonRoot: {
    height: 28,
  },
}));

export const SearchBar: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();
  const [city, setCity] = useState("München");
  const [countryCode, setCountryCode] = useState("de");
  const { t } = useTranslation("place");
  const dispatch = useDispatch();

  const handlePlaceChange = (): void => {
    dispatch(getCurrentWeatherRequest(city, countryCode));
  };

  return (
    <div className={classes.searchFieldContainer}>
      <div>
        <TextField
          className={classes.searchField}
          id="standard-search"
          label={t("place")}
          type="search"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            className: classes.input,
          }}
          classes={{
            root: classes.textFieldRoot,
          }}
          onChange={(event) => setCity(event.target.value)}
          value={city}
        />
        <TextField
          className={classes.searchField}
          id="standard-search"
          label={t("countryCode")}
          type="search"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            className: classes.input,
          }}
          classes={{
            root: classes.textFieldRoot,
          }}
          onChange={(event) => setCountryCode(event.target.value)}
          value={countryCode}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          classes={{
            root: classes.buttonRoot,
          }}
          onClick={handlePlaceChange}
        >
          {t("send")}
        </Button>
      </div>
    </div>
  );
};
