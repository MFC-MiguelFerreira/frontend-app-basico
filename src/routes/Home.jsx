import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar title="Open Banking"></NavBar>
      <div className="container">
        <h2>O que é?</h2>
        <p>
          O Open Banking, ou sistema financeiro aberto, é a possibilidade de
          clientes de produtos e serviços financeiros permitirem o
          compartilhamento de suas informações entre diferentes instituições
          autorizadas pelo Banco Central e a movimentação de suas contas
          bancárias a partir de diferentes plataformas e não apenas pelo
          aplicativo ou site do banco, de forma segura, ágil e conveniente.
        </p>
        <h2>Como é hoje?</h2>
        <p>
          Atualmente, uma instituição não “enxerga” o relacionamento do cliente
          com outra, então tem dificuldade de competir por ele com melhores
          serviços.
        </p>
        <h2>Com Open Banking</h2>
        <p>
          Com a permissão de cada correntista, as instituições se conectam
          diretamente às plataformas de outras instituições participantes e
          acessam exatamente os dados autorizados pelos clientes. Todo esse
          processo é feito em um ambiente seguro e a permissão poderá ser
          cancelada pela pessoa sempre que ela quiser.
        </p>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Home;
