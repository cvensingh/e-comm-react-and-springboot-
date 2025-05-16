package com.ecommerceapp.project.KisanKart.models;

import jakarta.persistence.*;

@Entity
@Table(name = "addProduct")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public String getProductName() {
        return ProductName;
    }

    public void setProductName(String productName) {
        ProductName = productName;
    }

    public String getFarmerName() {
        return FarmerName;
    }

    public void setFarmerName(String farmerName) {
        FarmerName = farmerName;
    }

    public int getId() {
        return id;
    }

    public void setId(Integer id) {
        id = id;
    }

    public String getProductDescription() {
        return ProductDescription;
    }

    public void setProductDescription(String productDescription) {
        ProductDescription = productDescription;
    }

    public String getProductCategory() {
        return ProductCategory;
    }

    public void setProductCategory(String productCategory) {
        ProductCategory = productCategory;
    }

    public String getProductPrice() {
        return ProductPrice;
    }

    public void setProductPrice(String productPrice) {
        ProductPrice = productPrice;
    }

    public String getProductQuantity() {
        return ProductQuantity;
    }

    public void setProductQuantity(String productQuantity) {
        ProductQuantity = productQuantity;
    }

    public String getProductWeight() {
        return ProductWeight;
    }

    public void setProductWeight(String productWeight) {
        ProductWeight = productWeight;
    }

    private String ProductName;
    private String FarmerName;
    private String ProductDescription;
    private String ProductCategory;
    private String ProductPrice;
    private String  ProductQuantity;
    private String  ProductWeight;



    public Product() {}

    public Product(String ProductName, String FarmerName, String ProductDescription, String ProductCategory,
                   String ProductPrice, String  ProductQuantity, String  ProductWeight) {
        this.ProductName = ProductName;
        this.FarmerName = FarmerName;
        this.ProductDescription = ProductDescription;
        this.ProductCategory = ProductCategory;
        this.ProductPrice = ProductPrice;
        this.ProductQuantity = ProductQuantity;
        this.ProductWeight = ProductWeight;


    }

    // Getters and Setters
}
