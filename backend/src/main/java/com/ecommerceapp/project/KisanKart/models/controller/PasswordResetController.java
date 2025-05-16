package com.ecommerceapp.project.KisanKart.models.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class PasswordResetController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Endpoint 1: Verify registered email and mobile number
    @PostMapping("/verify-user")
    public ResponseEntity<String> verifyUser(@RequestBody Map<String, String> data) {
        String email = data.get("email").trim().toLowerCase();
        String mobile = data.get("mobile").trim();

        // First check in farmer_registration
        String sqlFarmer = "SELECT COUNT(*) FROM farmer_registration WHERE email = ? AND mobile_number = ?";
        int farmerCount = jdbcTemplate.queryForObject(sqlFarmer, Integer.class, email, mobile);

        // If not found in farmer, check in consumer_registration
        String sqlConsumer = "SELECT COUNT(*) FROM consumer_registration WHERE email = ? AND mobile_number = ?";
        int consumerCount = jdbcTemplate.queryForObject(sqlConsumer, Integer.class, email, mobile);

        if (farmerCount > 0 || consumerCount > 0) {
            return ResponseEntity.ok("User verified");
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    // Endpoint 2: Reset password
    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> data) {
        String email = data.get("email");
        String mobile = data.get("mobile");
        String newPassword = data.get("newPassword");

        // First try updating farmer_registration
        String sqlFarmer = "UPDATE farmer_registration SET password = ? WHERE email = ? AND mobile_number = ?";
        int rowsAffectedFarmer = jdbcTemplate.update(sqlFarmer, newPassword, email, mobile);

        // If not found in farmer, try updating consumer_registration
        String sqlConsumer = "UPDATE consumer_registration SET password = ? WHERE email = ? AND mobile_number = ?";
        int rowsAffectedConsumer = jdbcTemplate.update(sqlConsumer, newPassword, email, mobile);

        if (rowsAffectedFarmer > 0 || rowsAffectedConsumer > 0) {
            return ResponseEntity.ok("Password updated successfully");
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }
}
