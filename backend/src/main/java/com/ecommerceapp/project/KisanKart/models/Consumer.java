package com.ecommerceapp.project.KisanKart.models;

import jakarta.persistence.*;
//import lombok.*;

@Entity
@Table(name = "consumer_registration")
//@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Consumer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public void setMobileNumber(String mobileNumber) {
        this.mobile_number = mobile_number;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private String name;
    private String dob;
    private String email;
    private String mobile_number;
    private String address;
    private String password;

    public Consumer (String name, String dob, String email, String mobile_number, String address, String password){
        this.name = name;
        this.dob = dob;
        this.email = email;
        this.mobile_number = mobile_number;
        this.address = address;
        this.password = password;


    }
}
