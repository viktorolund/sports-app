import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "./styles/app.scss";
import "./images/page_logo.ico";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import configureStore from "./store/configureStore";
import App from "./components/App";
import { loadCareer } from "./actions/careerActions";

const store = configureStore();

store.dispatch(loadCareer());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("career-app")
);
