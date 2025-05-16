package com.ecommerceapp.project.KisanKart.models.controller;

import com.ecommerceapp.project.KisanKart.models.Consumer;
import com.ecommerceapp.project.KisanKart.models.Farmer;
import com.ecommerceapp.project.KisanKart.models.repository.ConsumerRepository;
import com.ecommerceapp.project.KisanKart.models.repository.FarmerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")

@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class UserController {

    @Autowired
    private FarmerRepository farmerRepository;

    @Autowired
    private ConsumerRepository consumerRepository;

    // ✅ Register Farmer
    @PostMapping("/register/farmer")
    public ResponseEntity<String> registerFarmer(@RequestBody Farmer farmer) {
        try {
            farmerRepository.save(farmer);
            return ResponseEntity.ok("Farmer registered successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error registering farmer: " + e.getMessage());
        }
    }

    // ✅ Register Consumer
    @PostMapping("/register/consumer")
    public ResponseEntity<String> registerConsumer(@RequestBody Consumer consumer) {
        try {
            consumerRepository.save(consumer);
            return ResponseEntity.ok("Consumer registered successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error registering consumer: " + e.getMessage());
        }
    }

    // ✅ Allow OPTIONS preflight requests for CORS
    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }
}
