import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((error) => {
      console.log("Error", error);
    });

    dispatch(selectedProduct(response.data));
    
  }
  return (
    <div className="ui grid container">
     <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
