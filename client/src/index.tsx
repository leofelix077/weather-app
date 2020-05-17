import "moment/locale/de";

import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import { unregister } from "./serviceWorker";
import { Provider as ReduxStoreProvider } from "react-redux";
import { applyMiddleware } from "redux";
import { reducer, initialState } from "./redux/reducers";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { I18nextProvider } from "react-i18next";
import i18next from "./lib/i18next";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
import createSagaMiddleware from "redux-saga";
import moment from "moment";
import store from "./store";
import rootSaga from "./redux/sagas";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5dee48",
      main: "#00fa02",
      dark: "#008800",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6434",
      main: "#660000",
      dark: "#00ff02",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif;",
    allVariants: {
      color: "#8D8D8D",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#1a1a1a",
      },
    },
  },
});

const sagaMiddleware = createSagaMiddleware();

const reduxMiddleware = [sagaMiddleware];

store.set(reducer, initialState, applyMiddleware(...reduxMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <MuiThemeProvider theme={theme}>
      <ReduxStoreProvider store={store.get()}>
        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
          <App />
        </MuiPickersUtilsProvider>
      </ReduxStoreProvider>
    </MuiThemeProvider>
  </I18nextProvider>,
  document.getElementById("root")
);

unregister();
