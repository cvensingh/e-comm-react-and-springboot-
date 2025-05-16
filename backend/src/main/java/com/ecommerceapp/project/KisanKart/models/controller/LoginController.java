package com.ecommerceapp.project.KisanKart.models.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> payload) {
        String mobileNumber = payload.get("mobileNumber");
        String password = payload.get("password");

        // Check in farmer_registration
        String farmerSql = "SELECT COUNT(*) FROM farmer_registration WHERE mobile_number = ? AND password = ?";
        Integer farmerCount = jdbcTemplate.queryForObject(farmerSql, Integer.class, mobileNumber, password);

        // Check in consumer_registration
        String consumerSql = "SELECT COUNT(*) FROM consumer_registration WHERE mobile_number = ? AND password = ?";
        Integer consumerCount = jdbcTemplate.queryForObject(consumerSql, Integer.class, mobileNumber, password);

        if ((farmerCount != null && farmerCount > 0) || (consumerCount != null && consumerCount > 0)) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}

