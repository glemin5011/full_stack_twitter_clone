import React from "react";
import ReactDOM from "react-dom";
import backgroundImage from "../images/twitter 2.png";

import "./home.scss";

const Home = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-light-blue bg-image-twitter">
          <h1 className="mx-auto">Hello Friends</h1>
        </div>
        <div className="col">One of two columns</div>
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement("div"))
  );
});
