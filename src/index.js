import { render } from "react-dom";
import React from "react";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


library.add( faMoon)

const rootElement = document.getElementById("root");

render(<App />, rootElement);
