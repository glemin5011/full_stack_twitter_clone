import React from "react";
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
} from "react-bootstrap-icons";

import "./feed.scss";

const Feed = (props) => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-2 mx-1">
          <div className="list-group mt-3">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <Twitter size={25} className="me-3 mb-1 twitter-logo" />
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <House size={25} className="me-3 mb-1" />
              Home
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <Hash size={25} className="me-3 mb-1" />
              Explore
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <Bell size={25} className="me-3 mb-1" />
              Notifications
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <Envelope size={25} className="me-3 mb-1" />
              Messages
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <Bookmark size={25} className="me-3 mb-1" />
              Bookmarks
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <List size={25} className="me-3 mb-1" />
              Lists
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <Person size={25} className="me-3 mb-1" />
              Profile
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <Lock size={25} className="me-3 mb-1" />
              Log out
            </a>
            <a href="#" className="btn btn-primary btn-tweet mt-2">
              Tweet
            </a>
          </div>
        </div>

        <div className="col-6 mx-2">
          <div className="row border-bottom border-top border-start border-end">
            <div className="col-11">
              <h5 className="mt-2">Home</h5>
            </div>
            <div className="col-1">
              <Stars size={18} className="mt-2" />
            </div>
          </div>
          <div className="row border-bottom border-start border-end tweet-row">
            <div className="col-2 align-items-center">
              <Person size={40} className="ms-4 mt-2" />
            </div>
            <div className="col-10">
              <p className="pt-2">
                <a href="#" className="text-black me-1 feed-links">
                  <b>Matej Palenik</b>
                </a>
                <a href="#" className="text-muted feed-links">
                  @matejp
                </a>
              </p>
              <input
                type="text"
                className="tweet-input"
                placeholder="What's happening?"
              />
              <hr />
              <div className="row">
                <div className="col-10">
                  <a href="#" className="twitter-link">
                    <Image size={25} className="ms-2 my-3" />
                  </a>
                </div>
                <div className="col-2">
                  <a
                    href="#"
                    className="btn btn-primary btn-tweet
                  my-2 me-1"
                  >
                    Tweet
                  </a>
                </div>
              </div>
            </div>
          </div>
          /* This is a comment*/
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
                <a href="#">
                  <Gear size={18} className="d-inline text-muted ms-3 mt-2" />
                </a>
              </div>
            </div>

            <a
              href="#"
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
              href="#"
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
              href="#"
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
              href="#"
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
              href="#"
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
                <a className="twitter-link" href="#">
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement("div"))
  );
});
