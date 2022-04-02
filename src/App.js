import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./routes/Home";
import Compartilhamento from "./routes/Compartilhamento";
import NotFound from "./routes/NotFound";
import Redirect from "./routes/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/redirect/:url_from_backend" element={<Redirect />}></Route>
        <Route
          exact
          path="/compartilhamento"
          element={<Compartilhamento />}
        ></Route>
        <Route exact path="*" element={<NotFound />}></Route>
        {/* <Redirect to="/NotFound" /> */}
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
