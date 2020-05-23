import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Home from "./Home";
import { CSSProperties } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
  },
}));

const App: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();
  const imageStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    height: "100vh",
    width: "100vw",
    objectFit: "cover",
  };
  return (
    <div className={classes.root}>
      <img
        src="https://static.bunchofnothing.com/home-bg.jpg"
        alt="bg"
        style={imageStyle}
      />
      <Header />
      <Home />
    </div>
  );
};

export default App;
