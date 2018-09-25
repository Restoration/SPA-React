import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
        <div>
          <h1>Single Page Application</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
          </div>
        </div>
    );
  }
}

export default Main;
