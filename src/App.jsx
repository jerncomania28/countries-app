import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/navigation.component";
import Home from "./components/Home/home.component";
import CardDisplay from "./Routes/card-display/card-display.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path=":countryName" element={<CardDisplay />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
