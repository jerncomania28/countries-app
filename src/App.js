import React from "react";
// import NavBar from "./components/Common/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown,
  faCaretUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// import "./style/App.css"

library.add(faCaretDown, faCaretUp, faMagnifyingGlass);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries-app" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
