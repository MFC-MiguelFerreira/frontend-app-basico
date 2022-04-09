import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Gestao = () => {

  var loc = document.location;
  let hash = loc.hash.slice(1, -1);

  return (
    <React.Fragment>
      <NavBar title="Open Banking"></NavBar>
      <div className="container">
        <h1>Gestão dos Consentimentos</h1>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Gestao;
