import React from "react";
import {
  makeStyles,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  button: {
    borderRadius: "5rem",

    width: "10.5rem",
    "&:hover": {
      backgroundColor: "#1769aa",
      color: "#FFFFFF",
    },
  },
  buttonblack: {
    borderRadius: "5rem",
    color: "white",
    background: "black",
    marginBottom: "2rem",
    padding: "0.8rem",
    width: "18rem",
    "&:hover": {
      backgroundColor: "#1769aa",
      color: "#FFFFFF",
    },
  },
  margin: {
    width: "95%",
  },
}));
const Basket = (props) => {
  console.log(props);
  const [qnty, setQnty] = React.useState(1);

  const handleIncrement = () => {
    setQnty(1 + qnty);
  };
  const handleDecrement = () => {
    {
      qnty > 0 ? setQnty(qnty - 1) : setQnty(0);
    }
  };
  const classes = useStyles();
  const [cartItems, setCartItems] = React.useState([]);
  return (
    <div
      className="container"
      style={{
        marginTop: "10em",
      }}
    >
      <div className="row">
        {cartItems.length === 0 ? (
          <>
            <div
              className="col-7"
              style={{
                marginRight: "2em",
              }}
            >
              {/* Table code started */}
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  aria-label="simple table"
                  style={{
                    border: "2px solid lightgrey",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>PRODUCT</TableCell>
                      <TableCell>PRICE</TableCell>
                      <TableCell>QUANTITY</TableCell>
                      <TableCell>TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key="{row.name}">
                      <TableCell component="th" scope="row">
                        Empty
                      </TableCell>
                      <TableCell>Empty</TableCell>
                      <TableCell>
                        <div className="row">
                          <Button
                            variant="contained"
                            size="small"
                            style={{ fontSize: "1rem" }}
                            onClick={handleDecrement}
                          >
                            -
                          </Button>{" "}
                          <p
                            style={{
                              fontSize: "1rem",
                              background: "lightgrey",
                              padding: "1rem",
                              // paddingRight: "1rem",
                              // paddingBottom: "1rem",
                              margin: "1px",
                            }}
                          >
                            {qnty}
                          </p>{" "}
                          <Button
                            size="small"
                            variant="contained"
                            style={{ fontSize: "1rem" }}
                            onClick={handleIncrement}
                          >
                            +
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>Empty</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell scope="row">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Coupon code"
                            style={{
                              width: "15rem",
                              marginTop: "1rem",
                              borderRadius: "4rem",
                            }}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button className={classes.button} variant="contained">
                          APPLY COUPON
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button className={classes.button} variant="contained">
                          UPDATE CART
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              {/* Table code ending */}{" "}
            </div>{" "}
          </>
        ) : (
          <>
            {" "}
            <div>
              <div
                className="col-7"
                style={{
                  marginRight: "2em",
                }}
              >
                {/* Table code started */}
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow key="{row.name}">
                        <TableCell component="th" scope="row">
                          empty
                        </TableCell>
                        <TableCell align="right">row.calories</TableCell>
                        <TableCell align="right">row.fat</TableCell>
                        <TableCell align="right">row.carbs</TableCell>
                        <TableCell align="right">row.protein</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell scope="row">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Coupon code"
                              style={{
                                width: "15rem",
                                marginTop: "1rem",
                                borderRadius: "4rem",
                              }}
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            className={classes.button}
                            variant="contained"
                          >
                            APPLY COUPON
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            className={classes.button}
                            variant="contained"
                          >
                            UPDATE CART
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* Table code ending */}{" "}
              </div>
            </div>{" "}
          </>
        )}
        <div
          className="col-4"
          style={{
            border: "2px solid lightgrey",
            marginLeft: "1em",
            marginBottom: "1em",
          }}
        >
          <div style={{ marginLeft: "2rem" }}>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              CART TOTALS
            </p>

            <p className="row" style={{ marginLeft: "0.5rem" }}>
              <p className="col-3">Subtotals:</p>{" "}
              <p className="col-9" style={{ paddingLeft: "2rem" }}>
                $79.65
              </p>
            </p>
            <hr
              style={{
                height: 1,
                borderTop: "1px dashed grey",
              }}
            />
            <p className="row" style={{ marginLeft: "0.5rem" }}>
              <p className="col-3">Shipping:</p>
              <p
                className="col-9"
                style={{ paddingLeft: "2rem", color: "grey" }}
              >
                There are no shipping methods available. Please double check
                your address, or contact us if you need any help.
              </p>
            </p>
            <p style={{ paddingLeft: "7.5rem", fontSize: "small" }}>
              CALCULATE SHIPPING
            </p>
            <div style={{ paddingLeft: "7.5rem", paddingBottom: "1rem" }}>
              <select
                className="form-select form-select-sm"
                ariaLabel=".form-select-sm example"
                style={{
                  border: "1px solid grey",
                  paddingLeft: "9px",
                  borderRadius: "1em",
                  width: "10rem",
                }}
              >
                <option
                  selected
                  style={{
                    color: "grey",
                  }}
                >
                  Select a country
                </option>
                <option
                  style={{
                    color: "grey",
                  }}
                  value="None"
                >
                  None
                </option>
                <option
                  style={{
                    color: "grey",
                  }}
                  value="UK"
                >
                  UK
                </option>
                <option
                  style={{
                    color: "grey",
                  }}
                  value="USA"
                >
                  USA
                </option>
              </select>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="State / counter"
                  style={{ width: "10rem", marginTop: "1rem" }}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Postcode / Zip"
                  style={{ width: "10rem", marginTop: "1rem" }}
                />
              </div>
              <Button className={classes.button} variant="contained">
                UPDATE TOTALS
              </Button>
            </div>
            <hr
              style={{
                height: 1,
                borderTop: "1px dashed grey",
              }}
            />
            <p className="row" style={{ marginLeft: "0.5rem" }}>
              <p className="col-3" style={{ fontWeight: "bolder" }}>
                TOTAL:
              </p>{" "}
              <p className="col-9" style={{ paddingLeft: "2rem" }}>
                $79.65
              </p>
            </p>
            <Button className={classes.buttonblack} variant="contained">
              PROCEED TO CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Basket);
