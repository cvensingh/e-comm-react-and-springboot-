package com.ecommerceapp.project.KisanKart.models.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")  // Allow access from React frontend
public class AdminController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/stats")
    public Map<String, Object> getAdminStats() {

        Map<String, Object> stats = new HashMap<>();

        //Integer totalOrders = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM orders", Integer.class);
        Integer totalFarmers = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM farmer_registration", Integer.class);
        Integer totalConsumers = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM consumer_registration", Integer.class);
        //Long totalRevenue = jdbcTemplate.queryForObject("SELECT COALESCE(SUM(total), 0) FROM orders", Long.class);

        //stats.put("orders", totalOrders);
        stats.put("farmers", totalFarmers);
        stats.put("consumers", totalConsumers);
        //stats.put("revenue", totalRevenue);

        return stats;
    }
}
