import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./signup.scss";
import { Twitter } from "react-bootstrap-icons";
import { safeCredentials, handleErrors } from "./utils/fetchHelper";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Check if new user is in db

  const authenticate = () => {
    fetch(
      `api/authenticated`,
      safeCredentials({
        method: "GET",
      })
    )
      .then(handleErrors)
      .then((res) => {
        console.log(res);
        if (res.authenticated === true) {
          window.location.replace("/feed");
        } else {
          console.log("oh no, something went wrong!");
        }
      });
  };

  const logInUser = (e) => {
    e.preventDefault();
    fetch(
      `api/sessions`,
      safeCredentials({
        method: "POST",
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      })
    )
      .then(handleErrors)
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          authenticate();
        }
      });
  };

  return (
    <div className="container-fluid text-center form-signin">
      <form onSubmit={logInUser}>
        <a href="/">
          <Twitter className="mx-auto mb-4 twitter-logo" size={60} />
        </a>
        <h1 className="h3 mb-3 fw-normal">Please sign in.</h1>
        <p>
          Don't have an account yet?{" "}
          <a href="/signup" className="twitter-link">
            Sign up.
          </a>
        </p>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="jack"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary btn-signin"
          type="submit"
        >
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <SignIn />,
    document.body.appendChild(document.createElement("div"))
  );
});
