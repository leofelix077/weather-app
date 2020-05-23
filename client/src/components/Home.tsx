import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { requestAnimation } from "../redux/actions/homeAnimation";

const useStyles = makeStyles((theme) => ({
  headerAnimation: {
    animation: `$nothingAnimation 3000ms ${theme.transitions.easing.easeInOut}`,
    fontSize: 64,
    color: "white",
  },
  subHeader: {
    opacity: 0,
    transform: "translateX(0)",
    fontSize: 32,
    color: "white",
    paddingTop: 32,
    padding: 4,
  },
  subHeaderAnimation: {
    animation: `$subHeaderAnimation 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    opacity: 1,
    transform: "translateX(0) scale(1)",
  },
  "@keyframes nothingAnimation": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes subHeaderAnimation": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "85%": {
      opacity: 0.1,
      transform: "scale(1)",
    },
    "95%": {
      transform: "scale(1.95)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
}));

const SUB_HEADER_WORDS = ["Or", "Maybe", "There", "IS"];
const HEADER_WORDS = ["Nothing", "To See", "Here"];

const Home: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const animationState = useSelector((state: RootState) => state.homeAnimation);

  useEffect(() => {
    dispatch(requestAnimation());
  }, []);

  return (
    <div
      style={{
        margin: 32,
      }}
    >
      {HEADER_WORDS.map((word) => (
        <Typography className={classes.headerAnimation} key={word}>
          {word}
        </Typography>
      ))}
      <div style={{ flexDirection: "row", display: "flex" }}>
        {SUB_HEADER_WORDS.map((word, index) => {
          return (
            <Typography
              key={word}
              className={clsx(classes.subHeader, {
                [classes.subHeaderAnimation]: animationState[index.toString()],
              })}
            >
              {word}
            </Typography>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
