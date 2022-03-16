import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const NotFound = () => {
  return (
    <React.Fragment>
      <NavBar title="Open Banking"></NavBar>
      <div className="container">
        <h2>Page Not Found</h2>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default NotFound;
