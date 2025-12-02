import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productImage: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product form submitted!");
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h3>Add Products to Marketplace</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price (₹/kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="productPrice"
                    value={formData.productPrice}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select className="form-select" name="productCategory" value={formData.productCategory} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Grains">Grains</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Product Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="productImage"
                    value={formData.productImage}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/")}>Back</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
