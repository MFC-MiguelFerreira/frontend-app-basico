import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FormCompartilhamento from "../components/FormCompartilhamentoFuncional";

const Compartilhamento = () => {
  return (
    <React.Fragment>
      <NavBar title="Compartilhamento de Dados"></NavBar>
      <FormCompartilhamento></FormCompartilhamento>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Compartilhamento;
