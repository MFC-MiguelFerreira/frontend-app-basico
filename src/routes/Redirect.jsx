import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { Route, Link, useParams } from "react-router-dom";
// import { useParams } from "react-router";

const Redirect = () => {
  const { url_from_backend } = useParams();
  console.log("URL IN REDIRECT PAGE");
  console.log(url_from_backend);
  console.log(typeof(url_from_backend));
  
  // return (
  //   <React.Fragment>
  //     <h2>Redirecionamento</h2>
  //     <div className="container">
  //       <Link to={{ pathname: url_from_backend }} target="_blank"> AQUI </Link>
  //     </div>
  //   </React.Fragment>
  // );

  // global.window && (global.window.location.href = 'https://google.com');
  // global.window && (global.window.location.href = url_from_backend.toString());
  // return null;
  
  // return <a target="_blank" rel="noopener noreferrer" href={`${url_from_backend}`}>Link de Redirecionamento</a>

  // const { params } = useParams();
  // console.log("URL IN REDIRECT PAGE");
  // console.log(params.url_from_backend);
  // return <a target="_blank" rel="noopener noreferrer" href={`${params.url_from_backend}`}>Link de Redirecionamento</a>
  // return <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">Link de Redirecionamento</a>

  // console.log("URL IN REDIRECT PAGE");
  // console.log(url_from_backend);
  // window.location.href = url_from_backend;
  // return null
  
  // return (
  //   <React.Fragment>
  //     <NavBar title="Open Banking"></NavBar>
  //     <div className="container">
  //       <h2>Redirecionamento</h2>
  //       <p>{url_from_backend}</p>
  //       <a href={url_from_backend}>Link de Redirecionamento</a>
  //       {/* <Link to={{ pathname: url_from_backend }} target="_blank"><Link/> */}
  //       {/* <Link to={{pathname:url_from_backend}} target="_blank">About</Link> */}
  //       {/* <Route path='/compartilhamento' component={() => { 
  //       window.location.href = url_from_backend; 
  //           return null;
  //       }}/> */}
  //     </div>
  //     <Footer></Footer>
  //   </React.Fragment>
  // );
};

export default Redirect;
