import React from "react";

import { Button } from "react-bootstrap";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sucesso = () => {

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

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://192.168.0.118:5001/teste", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json,",
            },
            body: JSON.stringify(data),
        }).then(function (response) {
            console.log(response);
        })
    };  
  
  return (
    <React.Fragment>
      <NavBar title="Open Banking"></NavBar>
      <div className="container">
        <h2>Sucesso</h2>
        <p>{loc.href}</p>
        <p>{loc.hash}</p>
        <Button variant="primary" type="submit" size="lg" onClick={handleSubmit}>
            Compartilhar
        </Button>
      <Footer></Footer>
      </div>
      
    </React.Fragment>
  );
};

export default Sucesso;
