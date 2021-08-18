import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./signup.scss";
import { Twitter } from "react-bootstrap-icons";
import { safeCredentials, handleErrors } from "./utils/fetchHelper";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //Login and authentication
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
          console.log("Oh no Authenticate Call Error!");
        }
      });
  };

  const logInUser = () => {
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
        } else {
          console.log("Oh no, Log in call error!");
        }
      });
  };

  //Create a new user
  const createUser = (e) => {
    e.preventDefault();
    fetch(
      `api/users`,
      safeCredentials({
        method: "POST",
        body: JSON.stringify({
          user: {
            username: username,
            email: email,
            password: password,
          },
        }),
      })
    )
      .then(handleErrors)
      .then((res) => {
        console.log(res);
        if (res.success !== false) {
          logInUser();
        } else {
          console.log("Oh no we have a sign up error!");
        }
      });
  };

  return (
    <div className="container-fluid text-center form-signin">
      <form onSubmit={createUser}>
        <a href="/">
          <Twitter className="mx-auto mb-4 twitter-logo" size={60} />
        </a>
        <h1 className="h3 mb-3 fw-normal">Welcome to Twitter!</h1>
        <p>
          Already have an account?{" "}
          <a href="/signin" className="twitter-link">
            Sign in.
          </a>
        </p>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingUser"
            placeholder="jack"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <label htmlFor="floatingUser">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <label htmlFor="floatingEmail">Email address</label>
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

        <button
          className="w-100 btn btn-lg btn-primary btn-signin"
          type="submit"
        >
          Sign up
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <SignUp />,
    document.body.appendChild(document.createElement("div"))
  );
});
