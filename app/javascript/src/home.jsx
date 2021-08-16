import React from "react";
import ReactDOM from "react-dom";
import { Chat, People, Search, Twitter } from "react-bootstrap-icons";

import "./home.scss";

const Home = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col my-auto d-none d-lg-block bg-light-blue bg-image-twitter"></div>
        <div className="col-12 col-lg-6 my-auto">
          <div className="col-10 mx-auto">
            <div className="row col-10 mx-auto">
              <Twitter className="me-lg-5 mx-auto twitter-logo" size={30} />
              <h3 className="my-2">
                See what's happening in the world right now
              </h3>
              <p className="fs-6 my-2 pb-2">Join Twitter today.</p>

              <button type="button" className="btn btn-primary btn-signup">
                Sign up
              </button>
            </div>
            <div className="row col-10 mx-auto my-2">
              <button type="button" class="btn btn-outline-primary btn-login">
                Log in
              </button>
            </div>
          </div>
        </div>
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
