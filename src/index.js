import { render } from "react-dom";
import React from "react";
import App from './App';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMoon,
  faCaretDown,
  faCaretUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider } from "./context/countries.context";

library.add(faMoon, faCaretDown, faCaretUp, faMagnifyingGlass);

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </BrowserRouter>,
  rootElement
);
