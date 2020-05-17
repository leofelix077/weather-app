import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
};

export default App;
