import React, { useState } from "react";
import axios from "axios";
import "../../styles/AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    farmerName: "",
    productDescription: "",
    productCategory: "",
    productPrice: "",
    productQuantity: "",
    productWeight: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://192.168.31.211:8080/api/products/add", product);
      alert("Product added successfully!");
      setProduct({
        productName: "",
        farmerName: "",
        productDescription: "",
        productCategory: "",
        productPrice: "",
        productQuantity: "",
        productWeight: ""
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>📦 Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label>PRODUCT NAME</label>
          <input type="text" name="productName" value={product.productName} onChange={handleChange} required />

          <label>FARMER NAME</label>
          <input type="text" name="farmerName" value={product.farmerName} onChange={handleChange} required />

          <label>PRODUCT DESCRIPTION</label>
          <textarea name="productDescription" value={product.productDescription} onChange={handleChange} required />

          <label>PRODUCT CATEGORY</label>
          <select name="productCategory" value={product.productCategory} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Food Grains">Food Grains</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Nuts">Nuts</option>
            <option value="Dairy Products">Dairy Products</option>
            <option value="Spices">Spices</option>
          </select>

          <label>PRODUCT PRICE (₹/kg)</label>
          <input type="number" name="productPrice" value={product.productPrice} onChange={handleChange} required />

          <label>PRODUCT QUANTITY</label>
          <input type="number" name="productQuantity" value={product.productQuantity} onChange={handleChange} required />

          <label>PRODUCT WEIGHT (in kg)</label>
          <input type="number" name="productWeight" value={product.productWeight} onChange={handleChange} required />

          <button type="submit" className="btn btn-success">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
