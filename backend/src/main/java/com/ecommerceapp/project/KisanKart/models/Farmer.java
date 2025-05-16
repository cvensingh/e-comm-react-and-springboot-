package com.ecommerceapp.project.KisanKart.models;

import jakarta.persistence.*;

@Entity
@Table(name = "farmer_registration")

public class Farmer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobile_number;
    }

    public void setMobileNumber(String mobile_number) {
        this.mobile_number = mobile_number;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFarmingName() {
        return farming_name;
    }

    public void setFarmingName(String farming_name) {
        this.farming_name = farming_name;
    }

    public String getFarmingAddress() {
        return farming_address;
    }

    public void setFarmingAddress(String farmingAddress) {
        this.farming_address = farmingAddress;
    }

    private String name;
    private String dob;
    private String email;
    private String mobile_number;
    private String address;
    private String password;
    private String farming_name;
    private String farming_address;

    public Farmer(String name, String dob, String email, String mobile_number, String address, String password,
                  String farming_name, String farming_address){

        this.name = name;
        this.dob = dob;
        this.email = email;
        this.mobile_number = mobile_number;
        this.address = address;
        this.password = password;
        this.farming_name = farming_name;
        this.farming_address = farming_address;


    }
}
