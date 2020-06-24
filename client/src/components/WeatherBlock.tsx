import React from "react";
import { makeStyles } from "@material-ui/core";

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

const WeatherBlock: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();

  return <div className={classes.container}>Block</div>;
};

export default WeatherBlock;
