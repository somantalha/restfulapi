import { Button, Grid, Link } from "@material-ui/core";
import React from "react";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";

const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log("in sigle product");
  // console.log(props.value);
  const [cookies, setCookie, removeCookie] = useCookies(["Cart"]);

  // function handleCookie() {
  // setCookie("user", "gowtham", {
  //   path: "/",
  // });
  // }
  React.useEffect(() => {
    if (!cookies.Cart) {
      setCookie("Cart", JSON.stringify([]));
    }
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
    let newCart = [...cookies.Cart];
    newCart.push(product);
    setCookie("Cart", JSON.stringify(newCart));
    toast.success(product.name + "is added to Cart");
  };
  return (
    <Grid item xs={4}>
      {/* {product?.category === value && ( */}
      <div className="card" style={{ width: "15rem", height: "40rem" }}>
        <p>
          <img
            src={"http://localhost:4000/" + product.productImage}
            width="100%"
            style={{ height: "20rem" }}
          />
        </p>
        <div className="card-body">
          <h5 className="card-title">
            <p>
              <strong>Name:</strong> {product.name}
            </p>
          </h5>
          <p>
            <strong>Price: </strong>
            {product.price}{" "}
          </p>
          <p>
            <strong>Product Category: </strong>
            {product.category}
          </p>
          {userService.isAdmin() && (
            <>
              <p>
                <strong>Quantity: </strong>
                {product.quantity}{" "}
              </p>{" "}
              <hr />
              <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  productService
                    .deleteProduct(product._id)
                    .then((data) => {
                      console.log(data);
                      onDelete();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Delete
              </Button>{" "}
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  history.push("/update/" + product._id);
                }}
              >
                Edit
              </Button>
            </>
          )}
          {userService.isLoggedIn() && (
            <>
              <Button
                size="small"
                variant="contained"
                style={{
                  background: "black",
                  color: "white",
                  marginTop: "5px",
                }}
                onClick={(e) => {
                  handleAddToCart(product);
                }}
              >
                Add To Cart
              </Button>
            </>
          )}
        </div>
      </div>
      {/* )} */}
    </Grid>
  );
};

export default withRouter(SingleProduct);
