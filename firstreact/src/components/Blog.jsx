import { Link, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import BlogCover from "./Blogcover";
const Blog = (props) => {
  const [state, setState] = React.useState("");
  const handleSearchChange = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <div>
        <BlogCover />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div
              className="card blogimg1"
              // id=""
              style={{
                width: "50rem",
                height: "30rem",
              }}
            >
              <div className="inner">
                <img
                  className="card-img-top "
                  src="./task_1/blog1.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
            <Link
              href="/blog/BlogInspiringWays"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <p className="bloglink">
                8 Inspiring Ways to Wear Dresses in the Winter
              </p>
            </Link>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
              dictum vitae sapien eu varius
            </p>
            <p>
              By Admin | StreetStyle, Fashion, Couple | 8 Comments{" "}
              <Link
                href="/blog/BlogInspiringWays"
                style={{
                  fontSize: "1rem",
                  // fontWeight: "bold",
                  textDecoration: "none",
                  float: "right",
                  // color: "black",
                }}
              >
                <p className="bloglink">
                  Continue Reading <ArrowForwardIcon />
                </p>{" "}
              </Link>{" "}
            </p>
            <br />
            <br />
            <div
              className="card blogimg1"
              // id=""
              style={{
                width: "50rem",
                height: "30rem",
              }}
            >
              <div className="inner">
                <img
                  className="card-img-top "
                  src="./task_1/blog2.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
            <Link
              href="/blog/BlogGreatBigList"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <p className="bloglink">
                The Great Big List of Men’s Gifts for the Holidays
              </p>
            </Link>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
              dictum vitae sapien eu varius
            </p>
            <p>
              By Admin | StreetStyle, Fashion, Couple | 8 Comments{" "}
              <Link
                href="/blog/BlogGreatBigList"
                style={{
                  fontSize: "1rem",
                  // fontWeight: "bold",
                  textDecoration: "none",
                  float: "right",
                  // color: "black",
                }}
              >
                <p className="bloglink">
                  Continue Reading <ArrowForwardIcon />
                </p>{" "}
              </Link>{" "}
            </p>
            <br />
            <br />
            <div
              className="card blogimg1"
              // id=""
              style={{
                width: "50rem",
                height: "30rem",
              }}
            >
              <div className="inner">
                <img
                  className="card-img-top "
                  src="./task_1/blog3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
            <Link
              href="/blog/BlogWinter-to-SpringFashion"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <p className="bloglink">
                5 Winter-to-Spring Fashion Trends to Try Now
              </p>
            </Link>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
              dictum vitae sapien eu varius
            </p>
            <p>
              By Admin | StreetStyle, Fashion, Couple | 8 Comments{" "}
              <Link
                href="/blog/BlogWinter-to-SpringFashion"
                style={{
                  fontSize: "1rem",
                  // fontWeight: "bold",
                  textDecoration: "none",
                  float: "right",
                  // color: "black",
                }}
              >
                <p className="bloglink">
                  Continue Reading <ArrowForwardIcon />
                </p>{" "}
              </Link>{" "}
            </p>
          </div>
          <div className="col-3">
            <SearchBar
              style={{
                borderRadius: "5em",
              }}
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
              onChange={handleSearchChange}
            />
            <br />
            <br></br>
            <p
              style={{
                fontSize: "1.5rem",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Categories
            </p>
            <hr></hr>
            <Link
              href="/blog/BlogWinter-to-SpringFashion"
              style={{
                textDecoration: "none",
              }}
            >
              <p className="bloglink">All Products</p>{" "}
            </Link>{" "}
            <hr></hr>
            <Link
              href="/blog/BlogWinter-to-SpringFashion"
              style={{
                textDecoration: "none",
              }}
            >
              <p className="bloglink">Women</p>{" "}
            </Link>{" "}
            <hr></hr>
            <Link
              href="/blog/BlogWinter-to-SpringFashion"
              style={{
                textDecoration: "none",
              }}
            >
              <p className="bloglink">Men</p>{" "}
            </Link>{" "}
            <hr></hr>
            <Link
              href="/blog/BlogWinter-to-SpringFashion"
              style={{
                textDecoration: "none",
              }}
            >
              <p className="bloglink">Shoes</p>{" "}
            </Link>{" "}
            <hr></hr>
            <Link
              href="/blog/BlogWinter-to-SpringFashion"
              style={{
                textDecoration: "none",
              }}
            >
              <p className="bloglink">Bag</p>{" "}
            </Link>{" "}
            <hr></hr>
            <Link
              href="/blog/BlogWinter-to-SpringFashion"
              style={{
                textDecoration: "none",
              }}
            >
              <p className="bloglink">Watches</p>{" "}
            </Link>{" "}
            <hr></hr>
            <br></br>
            <br></br>
            <p
              style={{
                fontSize: "1.5rem",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Feature Products
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
