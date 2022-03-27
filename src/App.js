import React from "react";
import "./App.css";
import {
  BrowserRouter,
  // Switch,
  Route,
  // Redirect,
  Routes,
} from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import FormCompartilhamento from "./components/FormCompartilhamentoFuncional";
// import FormCompartilhamento from "./components/FormCompartilhamento copy";
import Home from "./routes/Home";
import Compartilhamento from "./routes/Compartilhamento";
import NotFound from "./routes/NotFound";

function App() {
  return (
    // const data = await fetch('/test')
    // const newUrl = data.json().url
    // window.location = newUrl
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route
          exact
          path="/compartilhamento"
          element={<Compartilhamento />}
        ></Route>
        <Route exact path="*" element={<NotFound />}></Route>
        {/* <Redirect to="/NotFound" /> */}
      </Routes>
    </BrowserRouter>
    // <React.Fragment>
    //   <NavBar></NavBar>
    //   <FormCompartilhamento></FormCompartilhamento>
    //   <Footer></Footer>
    // </React.Fragment>
  );
}

export default App;
