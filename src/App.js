import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from "./routes/Home";
import Compartilhamento from "./routes/Compartilhamento";
import NotFound from "./routes/NotFound";
import Sucesso from "./routes/Sucesso";
import Gestao from "./routes/Gestao";
import Deletado from "./routes/Deletado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/openbanking-front/" element={<Home />}></Route>
        <Route exact path="/openbanking-front/home" element={<Home />}></Route>
        <Route
          exact
          path="/openbanking-front/compartilhamento"
          element={<Compartilhamento />}
        ></Route>
        <Route exact path="/openbanking-front/sucesso/" element={<Sucesso />}></Route>
        <Route exact path="/openbanking-front/gestao/" element={<Gestao />}></Route>
        <Route exact path="/openbanking-front/deletado/" element={<Deletado />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
