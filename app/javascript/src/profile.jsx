import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Twitter,
  House,
  Hash,
  Bell,
  Envelope,
  Bookmark,
  List,
  Person,
  ThreeDots,
  Gear,
  Stars,
  Image,
  Lock,
  X,
  Arrow90degLeft,
  ChevronLeft,
} from "react-bootstrap-icons";
import { safeCredentials, handleErrors } from "./utils/fetchHelper";
import Sticky from "react-stickynode";

import "./feed.scss";

const Profile = (props) => {
  const [tweets, setTweets] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tweetLoading, setTweetLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [profileName, setProfileName] = useState(
    `${window.location.pathname.replace("/feed/", "")}`
  );

  const getProfileTweets = () => {
    fetch(
      `/api/users/${profileName}/tweets`,
      safeCredentials({
        method: "GET",
      })
    )
      .then(handleErrors)
      .then((res) => {
        console.log(res.tweets);
        setTweets(res.tweets);
        setTweetLoading(false);
      });
  };

  const authenticate = () => {
    fetch(
      `/api/authenticated`,
      safeCredentials({
        method: "GET",
      })
    )
      .then(handleErrors)
      .then((res) => {
        console.log(res);
        setAuthenticated(res.authenticated);
        setUsername(res.username);
        setIsLoading(false);
      });
  };

  const logOut = (e) => {
    e.preventDefault();
    console.log("you clicked log out");
    fetch(
      `/api/sessions`,
      safeCredentials({
        method: "DELETE",
      })
    )
      .then(handleErrors)
      .then((res) => {
        console.log(res);
        window.location.replace("/signin");
      });
  };

  const deleteTweet = (id, e) => {
    e.preventDefault();
    fetch(
      `/api/tweets/${id}`,
      safeCredentials({
        method: "DELETE",
      })
    )
      .then(handleErrors)
      .then((res) => {
        console.log(res);
        getProfileTweets();
      });
  };

  //authenticate user and get tweets on component mount
  useEffect(() => {
    authenticate();
    //setProfileName(window.location.pathname.replace("/feed/", ""));
    getProfileTweets();
  }, []);

  if (isLoading === false) {
    if (authenticated === true) {
      return (
        <div className="container">
          <div className="row mt-4">
            <div className="col-2 mx-1">
              <div className="list-group mt-3">
                <a
                  href="/feed"
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <Twitter size={25} className="me-3 mb-1 twitter-logo" />
                </a>
                <a
                  href="/feed"
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <House size={25} className="me-3 mb-1" />
                  Home
                </a>
                <a href="" className="list-group-item list-group-item-action">
                  <Hash size={25} className="me-3 mb-1" />
                  Explore
                </a>
                <a href="" className="list-group-item list-group-item-action">
                  <Bell size={25} className="me-3 mb-1" />
                  Notifications
                </a>
                <a href="" className="list-group-item list-group-item-action">
                  <Envelope size={25} className="me-3 mb-1" />
                  Messages
                </a>
                <a href="" className="list-group-item list-group-item-action">
                  <Bookmark size={25} className="me-3 mb-1" />
                  Bookmarks
                </a>
                <a href="" className="list-group-item list-group-item-action">
                  <List size={25} className="me-3 mb-1" />
                  Lists
                </a>
                <a href="" className="list-group-item list-group-item-action">
                  <Person size={25} className="me-3 mb-1" />
                  Profile
                </a>
                <a
                  href=""
                  onClick={logOut}
                  className="list-group-item list-group-item-action"
                >
                  <Lock size={25} className="me-3 mb-1" />
                  Log out
                </a>
                <a href="" className="btn btn-primary btn-tweet mt-2">
                  Tweet
                </a>
              </div>
            </div>

            <div className="col-6 mx-2">
              <div className="row border-bottom border-top border-start border-end">
                <div className="col-1">
                  <a href="/feed" className="text-black">
                    <ChevronLeft size={25} className="mt-2" />
                  </a>
                </div>
                <div className="col-10">
                  <h5 className="mt-2">
                    Profile - <span className="text-muted">@{profileName}</span>
                  </h5>
                </div>
                <div className="col-1">
                  <Stars size={18} className="mt-2" />
                </div>
              </div>
              <form>
                <div className="row border-bottom border-start border-end tweet-row">
                  <div className="col-2 align-items-center">
                    <Person size={40} className="ms-4 mt-3" />
                  </div>
                  <div className="col-10">
                    <p className="pt-2">
                      <a
                        href={`/feed/${profileName}`}
                        className="text-black me-1 feed-links"
                      >
                        <b>{profileName}</b>
                      </a>
                      <a
                        href={`/feed/${profileName}`}
                        className="text-muted feed-links"
                      >
                        @{profileName}
                      </a>
                    </p>
                    <p className="text-muted">
                      This is a profile description for a new user...
                    </p>
                  </div>
                </div>
              </form>
              {tweetLoading === true ? (
                <div>Loading</div>
              ) : (
                <div>
                  {tweets.map((tweet) => (
                    <div
                      key={tweet.id}
                      className="row border-start border-end border-bottom tweet-row"
                    >
                      <div className="col-2 align-items-center">
                        <Person size={40} className="ms-4 mt-2" />
                      </div>
                      <div className="col-10">
                        <div className="pt-2">
                          <div className="row">
                            <div className="col-10">
                              <a
                                href={tweet.username}
                                className="text-black me-1 feed-links"
                              >
                                <b>{tweet.username}</b>
                              </a>
                              <a
                                href={tweet.username}
                                className="text-muted feed-links"
                              >
                                @{tweet.username}
                              </a>
                            </div>

                            <div className="col-2">
                              {tweet.username === username ? (
                                <a href="">
                                  <X
                                    size={25}
                                    id={tweet.id}
                                    className="d-inline twitter-link"
                                    onClick={(e) => deleteTweet(tweet.id, e)}
                                  />
                                </a>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <p className="pt-2">{tweet.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-3 mx-1">
              <input
                type="search"
                id="stream-search"
                className="form-control input-bg"
                placeholder="Search Twitter"
                aria-describedby="StreamSearch"
              />
              <div className="list-group mt-3 wrapper-trends">
                <div className="row">
                  <div className="col-9">
                    <h5 className="ms-3 mt-2 mb-3">Trends for you</h5>
                  </div>
                  <div className="col-3">
                    <a href="">
                      <Gear
                        size={18}
                        className="d-inline text-muted ms-3 mt-2"
                      />
                    </a>
                  </div>
                </div>

                <a
                  href=""
                  className="list-group-item list-group-item-action trends"
                  aria-current="true"
                >
                  <div className="row">
                    <div className="col-10">
                      <small className="text-muted">Politics · Trending</small>

                      <p>
                        <b>World War Z</b>
                        <br />
                        <small>35.9K Tweets</small>
                      </p>
                    </div>
                    <div className="col-2">
                      <ThreeDots size={18} className="d-inline text-muted" />
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action trends"
                  aria-current="true"
                >
                  <div className="row">
                    <div className="col-10">
                      <small className="text-muted">Politics · Trending</small>

                      <p>
                        <b>Afghanistan</b>
                        <br />
                        <small>1.61M Tweets</small>
                      </p>
                    </div>
                    <div className="col-2">
                      <ThreeDots size={18} className="d-inline text-muted" />
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action trends"
                  aria-current="true"
                >
                  <div className="row">
                    <div className="col-10">
                      <small className="text-muted">Trending in France</small>
                      <p>
                        <b>Occident</b>
                        <br />
                        <small>10.7K Tweets</small>
                      </p>
                    </div>
                    <div className="col-2">
                      <ThreeDots size={18} className="d-inline text-muted" />
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action trends"
                  aria-current="true"
                >
                  <div className="row">
                    <div className="col-10">
                      <small className="text-muted">Trending in France</small>
                      <p>
                        <b>#Auchan</b>
                        <br />
                        <small>3.99K Tweets</small>
                      </p>
                    </div>
                    <div className="col-2">
                      <ThreeDots size={18} className="d-inline text-muted" />
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="list-group-item list-group-item-action trends"
                  aria-current="true"
                >
                  <div className="row">
                    <div className="col-10">
                      <small className="text-muted">Trending in France</small>
                      <p>
                        <b>#Stains</b>
                        <br />
                        <small>8.99K Tweets</small>
                      </p>
                    </div>
                    <div className="col-2">
                      <ThreeDots size={18} className="d-inline text-muted" />
                    </div>
                  </div>
                </a>
                <div className="row">
                  <div className="col-12 ms-3 mb-2">
                    <a className="twitter-link" href="">
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return window.location.replace("/signin");
    }
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center loading-screen twitter-link">
        <div className="spinner-border" role="status">
          <span className="sr-only visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Profile />,
    document.body.appendChild(document.createElement("div"))
  );
});
