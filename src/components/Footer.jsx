import React, { Component } from "react";

import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">
            &copy; 2022 Open Banking Brasil, Inc
          </p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            Mango Banking
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item px-2">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/home">About</Link>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
