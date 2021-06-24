import React from "react";
import { Button, Link, makeStyles, TextField } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import { withRouter } from "react-router";
import BlogCover from "./Blogcover";
import TopCover from "./topcover";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    width: "95%",
  },
  marginblogfields: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    width: "30%",
  },
  marginbutton: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(10),
    paddingLeft: theme.spacing(2),
    width: "25%",
    borderRadius: "5em",
  },
}));

const BlogWintertoSpringFashion = () => {
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div
              className="card blogimg1"
              // id="blogimg1"
              style={{
                width: "50rem",
                height: "30rem",
              }}
            >
              <div className="inner">
                <img
                  className="card-img-top "
                  src="/task_1/blog3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
            >
              5 Winter-to-Spring Fashion Trends to Try Now
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet est vel orci luctus sollicitudin. Duis eleifend vestibulum
              justo, varius semper lacus condimentum dictum. Donec pulvinar a
              magna ut malesuada. In posuere felis diam, vel sodales metus
              accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a
              eros leo. Quisque sed ligula vitae lorem efficitur faucibus.
              Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum
              libero a, malesuada nisi. Nulla in porta nibh, id vestibulum
              ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus
              id sapien condimentum feugiat.
            </p>
            <p>
              aliquet. Donec ac purus id sapien condimentum feugiat. Praesent
              vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque
              sem ex, tristique sit amet suscipit in, mattis imperdiet enim.
              Integer tempus justo nec velit fringilla, eget eleifend neque
              blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget
              tortor ultricies elementum. Phasellus vel placerat orci, a
              venenatis justo. Phasellus faucibus venenatis nisl vitae
              vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan
              felis, quis vulputate
            </p>
            <p>
              Tags{" "}
              <Button
                className="tagsblog"
                size="small"
                variant="outlined"
                style={{
                  borderRadius: "5em",
                }}
              >
                Streetstyle
              </Button>{" "}
              <Button
                className="tagsblog"
                size="small"
                variant="outlined"
                style={{
                  borderRadius: "5em",
                }}
              >
                Crafts
              </Button>
            </p>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              LEAVE A COMMENT
            </p>
            <p style={{ fontSize: "1rem", color: "grey" }}>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="contact-form">
              <TextField
                className={classes.margin}
                id="outlined-multiline-static"
                multiline
                rows={10}
                variant="outlined"
                placeholder="Comment..."
              />
              <p> </p>
              <TextField
                className={classes.marginblogfields}
                id="input-with-icon-textfield"
                placeholder="Name"
                variant="outlined"
              />
              <p> </p>
              <TextField
                className={classes.marginblogfields}
                id="input-with-icon-textfield"
                placeholder="Email"
                variant="outlined"
              />
              <p> </p>
              <TextField
                className={classes.marginblogfields}
                id="input-with-icon-textfield"
                placeholder="Website"
                variant="outlined"
              />
              <p> </p>
              <Button
                className={classes.marginbutton}
                variant="contained"
                style={{ backgroundColor: "#212121", color: "#FFFFFF" }}
              >
                POST COMMENT
              </Button>
            </form>
          </div>
          <div className="col-3">Rright</div>
        </div>
      </div>
    </>
  );
};

export default BlogWintertoSpringFashion;
