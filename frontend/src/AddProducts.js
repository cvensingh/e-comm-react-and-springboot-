import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddProducts = () => {

  const navigate = useNavigate(); // Hook for navigation

  const categories = [

    {
      title: "Food Grains",
      description: "Add your wheat, rice, soyabeans, maize, etc.",
      image: "/images/FoodGrainsImage.jpg",
    },
    {
      title: "Nuts",
      description: "Add your dry fruits, almonds, cashews, etc.",
      image: "/images/nutsImage.jpg",
    },


    {
      title: "Vegetables",
      description: "Add green leafy vegetables, onions, potatoes, etc.",
      image: "/images/vegetableImage.jpg",
      
    },
    {
      title: "Fruits",
      description: "Add apples, bananas, mangoes, oranges, etc.",
      image: "/images/fruitImage.jpg",
    },
    {
      title: "Dairy Products",
      description: "Add milk, cheese, butter, yogurt, etc.",
      image: "/images/dairyImage.jpg",
    },
    {
      title: "Spices",
      description: "Add spices, exotic herbs, and leaves.",
      image: "images/spiceImage.jpg",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">KisanKart - Add Products</h1>
      <h3>Categories</h3>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card bg-light">
              <img
                src={category.image}
                className="card-img-top"
                alt={category.title}
              />
              <div className="card-body">
                <h5 className="card-title">{category.title}</h5>
                <p className="card-text">{category.description}</p>
                <button className="btn btn-success" onClick={() => navigate("/AddProduct")}>AddProduct</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProducts;
