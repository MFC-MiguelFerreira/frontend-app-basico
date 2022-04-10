import React, { useState, useEffect } from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Gestao = () => {

  const [sucesso, setSucesso] = useState(false);
  const [consentimento, setConsentimento] = useState(
    {
      "consentId": "",
      "creationDateTime": "",
      "status": "",
      "statusUpdateDateTime": "",
      "permissions": [],
      "expirationDateTime": ""
    }
  );

  var loc = document.location;
  let query = loc.search;
  let cpf = query.split('&')[0].split('=')[1];
  let token = query.split('&')[1].split('=')[1];

  const data = {
    cpf,
    token
  };

  useEffect(() => {
    fetch("http://localhost:5001/get_consent", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json,",
          },
          body: JSON.stringify(data),
      }).then(function (response) {
          if(response.status === 200){
            return response.json();
          }
      }).then(function (json) {
        console.log(json.data);
        console.log(json.data.expirationDateTime);
        console.log(json.data.status);
        setConsentimento(json.data);
        setSucesso(true);
      })
  }, [] );

  const navigate = useNavigate();

  const handleDelete = (event) => {
    event.preventDefault();
    console.log("Botão Clicado")
    fetch("http://localhost:5001/delete_consent", {
        method: "POST", // Verificar método
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json,",
        },
        body: JSON.stringify(data),
    }).then(function (response) {
      navigate('/deletado',  { replace: true });
    })
    
  };

  return (
    <React.Fragment>
      <NavBar title="Open Banking"></NavBar>
      <div className="container" hidden={ !sucesso }>
        <h2>Gestão dos Consentimentos</h2>
        
        <h4>Mango Bank</h4>
        <ul>
          <li>{consentimento.expirationDateTime}</li>
          <li>{consentimento.status}</li>
        </ul>
        <Button variant="warning" onClick={ handleDelete }>Delete</Button>
      </div>
      <div className="container" hidden={ sucesso }>
        <h2>Carregando...</h2>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Gestao;
