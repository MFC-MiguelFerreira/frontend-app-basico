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
import Sucesso from "./routes/Sucesso";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route
          exact
          path="/compartilhamento"
          element={<Compartilhamento />}
        ></Route>
        <Route exact path="/sucesso/" element={<Sucesso />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
