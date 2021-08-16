import React from "react";
import ReactDOM from "react-dom";
import "./signup.scss";
import { Twitter } from "react-bootstrap-icons";

const SignIn = () => {
  return (
    <div class="container-fluid text-center form-signin">
      <form>
        <a href="http://localhost:3000/">
          <Twitter className="mx-auto mb-4 twitter-logo" size={60} />
        </a>
        <h1 class="h3 mb-3 fw-normal">Please sign in.</h1>
        <p>
          Don't have an account yet?{" "}
          <a href="http://localhost:3000/signup" className="twitter-link">
            Sign up.
          </a>
        </p>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary btn-signin" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
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
