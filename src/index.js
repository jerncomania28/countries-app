import { render } from "react-dom";
import React from "react";
import App from './App';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMoon,
  faCaretDown,
  faCaretUp,
  faMagnifyingGlass,
  faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider } from "./context/countries.context";

//styles

import "./index.styles.scss";

library.add(faMoon, faCaretDown, faCaretUp, faMagnifyingGlass , faArrowLeftLong);

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </BrowserRouter>,
  rootElement
);
