require("dotenv").config();
import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;
console.log(apiURL)

export const cartListProduct = async () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  let productArray = [];
  if (carts) {
    for (const cart of carts) {
      productArray.push(cart.id);
    }
  }
  try {
    let res = await axios.post(`https://my-mern-app-9399.onrender.com/api/product/cart-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
