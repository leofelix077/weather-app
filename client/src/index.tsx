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
      light: "#6d6d6d",
      main: "#424242",
      dark: "#1b1b1b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#67daff",
      main: "#03a9f4",
      dark: "#007ac1",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Open Sans",
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
