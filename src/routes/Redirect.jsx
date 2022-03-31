import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { Route, Link, useParams } from "react-router-dom";

const Redirect = () => {
  const { url } = useParams()
  return (
    <React.Fragment>
      <NavBar title="Open Banking"></NavBar>
      <div className="container">
        <h2>Redirecionamento</h2>
          <p>{url}</p>
        {/* <a href={url}>Link de Redirecionamento</a> */}
        {/* <Link to={{ pathname: url }} target="_blank"><Link/> */}
        {/* <Link to={{pathname:url}} target="_blank">About</Link> */}
        <Route path='/compartilhamento' component={() => { 
        window.location.href = url; 
            return null;
        }}/>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Redirect;
