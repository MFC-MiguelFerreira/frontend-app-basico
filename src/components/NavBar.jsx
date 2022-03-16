import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4"><h1>{this.props.title}</h1></span>
          </a>
        </header>
      </div>
    );
  }
}

export default NavBar;
