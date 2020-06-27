/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeatherRequest } from "../redux/weather";
import { TextField, makeStyles, Divider, Typography } from "@material-ui/core";
import { RootState } from "../redux/rootReducer";
import { useTranslation } from "react-i18next";

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
    width: "70vw",
  },
  suggestion: {
    boxShadow: "1px 1px rgba(0,0,0,0.25)",
    padding: theme.spacing(1),
    paddingBottom: 0,
    backgroundColor: "#2C2C2C",
  },
  suggestionsContainer: {
    borderRadius: 8,
    position: "absolute",
    zIndex: 100,
    top: 64,
    left: 0,
  },
  searchBoxContainer: {
    position: "relative",
  },
}));

export const SearchBar: React.FC = (): ReturnType<React.FC> => {
  const dispatch = useDispatch();

  const [address, setAddress] = useState("München, DE");

  const classes = useStyles();

  const place = useSelector((state: RootState) => state.search.place);

  const { t } = useTranslation("place");

  const handleSelect = (selectedAddress: string, placeId?: string): void => {
    geocodeByAddress(selectedAddress).then((results) => {
      const locationSelected = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
      };
      if (placeId) {
        const clickedLocation = results.find(
          (result) => result.place_id === placeId
        );
        if (clickedLocation) {
          locationSelected.lat = clickedLocation.geometry.location.lat();
          locationSelected.lng = clickedLocation.geometry.location.lng();
          setAddress(clickedLocation.formatted_address);
        }
      }

      dispatch(getCurrentWeatherRequest(locationSelected));
    });
  };

  return (
    <div className={classes.searchFieldContainer}>
      <PlacesAutocomplete
        value={address}
        onChange={(event) => setAddress(event)}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div className={classes.searchBoxContainer}>
            <TextField
              className={classes.searchField}
              id="place"
              label={t("place")}
              type="search"
              InputProps={getInputProps({ className: classes.input })}
              classes={{
                root: classes.textFieldRoot,
              }}
              value={place}
            />
            <div className={classes.suggestionsContainer}>
              {suggestions.map((suggestion) => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className: classes.suggestion,
                    })}
                  >
                    <Typography>{suggestion.description}</Typography>
                    <Divider />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
