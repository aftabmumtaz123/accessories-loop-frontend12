import axios from "axios";
const apiURL = "https://my-mern-app-9399.onrender.com";

export const wishListProducts = async () => {
  let productArray = JSON.parse(localStorage.getItem("wishList"));
  try {
    let res = await axios.post(`${apiURL}/api/product/wish-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
