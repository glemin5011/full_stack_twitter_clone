import React from "react";
import ReactDOM from "react-dom";
import "./signup.scss";
import { Twitter } from "react-bootstrap-icons";
import { safeCredentials, handleErrors } from "./utils/fetchHelper";

const SignUp = () => {
  const createUser = fetch(
    `api/users`,
    safeCredentials({
      method: "POST",
      body: JSON.stringify({
        users: {
          email: "hello@world.com",
          password: "abc123",
        },
      }),
    })
  )
    .then(handleErrors)
    .then((res) => {
      console.log(res);
    });

  return (
    <div class="container-fluid text-center form-signin">
      <form>
        <a href="http://localhost:3000/">
          <Twitter className="mx-auto mb-4 twitter-logo" size={60} />
        </a>
        <h1 class="h3 mb-3 fw-normal">Welcome to Twitter!</h1>
        <p>
          Already have an account?{" "}
          <a href="http://localhost:3000/signin" className="twitter-link">
            Sign in.
          </a>
        </p>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Username</label>
        </div>
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

        <button
          class="w-100 btn btn-lg btn-primary btn-signin"
          type="submit"
          onClick={createUser}
        >
          Sign up
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
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
