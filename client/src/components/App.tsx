import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { requestLocaleChange } from "../redux/localeDetector";
import { SupportedLocale } from "../constants";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    width: "100vw",
  },
  rootShadowOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: -1,
  },
  backgroundImage: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -2,
    height: "100vh",
    width: "100vw",
    objectFit: "cover",
    opacity: 0.75,
  },
}));

const App: React.FC = (): ReturnType<React.FC> => {
  const preferredLocale = localStorage.getItem("locale");
  const dispatch = useDispatch();
  if (preferredLocale) {
    dispatch(requestLocaleChange(preferredLocale as SupportedLocale));
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src="https://static.bunchofnothing.com/home-bg.jpg"
        alt="bg"
        className={classes.backgroundImage}
      />
      <div className={classes.rootShadowOverlay} />
      <Header />
    </div>
  );
};

export default App;
