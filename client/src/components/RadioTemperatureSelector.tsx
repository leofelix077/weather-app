import React from "react";
import { SupportedTemperature } from "../constants";
import {
  makeStyles,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
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

const RadioTemperatureSelector: React.FC = (): ReturnType<React.FC> => {
  const temperature = useSelector(
    (state: RootState) => state.temperature.temperature
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSelectLanguage = async (
    event: React.ChangeEvent<{ value: unknown }>
  ): Promise<void> => {
    dispatch(
      requestTemperatureChange(event.target.value as SupportedTemperature)
    );
  };

  return (
    <div className={classes.list}>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={temperature}
          style={{ flexDirection: "row", display: "flex" }}
          onChange={handleSelectLanguage}
        >
          {Object.entries(SupportedTemperature).map(([key, value]) => (
            <FormControlLabel value={value} control={<Radio />} label={key} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioTemperatureSelector;
