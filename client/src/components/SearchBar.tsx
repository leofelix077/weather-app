import React, { FormEvent } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeatherRequest } from "../redux/weather";
import { RootState } from "../redux/rootReducer";
import {
  setSearchStatePlace,
  setSearchStateCountryCode,
} from "../redux/search";

const useStyles = makeStyles((theme) => ({
  searchField: {
    padding: theme.spacing(2),
  },
  searchFieldContainer: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
  },
  textFieldRoot: {
    padding: 0,
  },
  input: {
    color: "white",
  },
  buttonContainer: {
    alignItems: "center",
    display: "flex",
  },
  buttonRoot: {
    height: 28,
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const SearchBar: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();

  const countryCode = useSelector(
    (state: RootState) => state.search.countryCode
  );
  const place = useSelector((state: RootState) => state.search.place);

  const { t } = useTranslation("place");
  const dispatch = useDispatch();

  const handlePlaceChange = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(getCurrentWeatherRequest(place, countryCode));
  };

  return (
    <div className={classes.searchFieldContainer}>
      <form onSubmit={handlePlaceChange} className={classes.form}>
        <TextField
          className={classes.searchField}
          id="place"
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
          onChange={(event) =>
            dispatch(setSearchStatePlace(event.target.value))
          }
          value={place}
        />
        <TextField
          className={classes.searchField}
          id="country"
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
          onChange={(event) =>
            dispatch(setSearchStateCountryCode(event.target.value))
          }
          value={countryCode}
        />
        <div className={classes.buttonContainer}>
          <Button
            variant="outlined"
            type="submit"
            color="secondary"
            classes={{
              root: classes.buttonRoot,
            }}
          >
            {t("send")}
          </Button>
        </div>
      </form>
    </div>
  );
};
