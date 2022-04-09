import React, { useState, useEffect } from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Sucesso = () => {

    const [sucesso, setSucesso] = useState(false);
  
    // Url
    var loc = document.location;

    let hash = loc.hash.slice(1, -1);
    console.log(hash);

    let token_type = hash.split('&')[0].split('=')[1];
    let token = hash.split('&')[1].split('=')[1];
    console.log(token_type);
    console.log(token);
    
    const data = {
        token_type,
        token
    };
    console.log(data);

    useEffect(() => {
      fetch("http://192.168.0.118:5001/teste", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json,",
            },
            body: JSON.stringify(data),
        }).then(function (response) {
            console.log(response);
            if(response.status === 200){
              setSucesso(true);
            }
        })
    }, [] );  
  
  return (
    <React.Fragment>
      <NavBar title="Open Banking"></NavBar>
      <div className="container" hidden={ !sucesso }>
        <h2>Sucesso</h2>
        <p>Conta adicionada com sucesso</p>
      </div>
      <div className="container" hidden={ sucesso }>
        <h2>Carregando</h2>
      </div>
      <Footer></Footer>
      
    </React.Fragment>
  );
};

export default Sucesso;
