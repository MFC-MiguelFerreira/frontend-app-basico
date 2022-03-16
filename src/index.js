import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

// import {
//   BrowserRouter,
//   // Switch,
//   Route,
//   // Redirect,
//   Routes,
// } from "react-router-dom";
// import Home from "./routes/Home";
// import Compartilhamento from "./routes/Compartilhamento";

ReactDOM.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route exact path="/home" element={<Home />}></Route>
  //     <Route
  //       exact
  //       path="/compartilhamento"
  //       element={<Compartilhamento />}
  //     ></Route>
  //     {/* <Redirect to='/404'></Redirect> */}
  //   </Routes>
  // </BrowserRouter>

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
