package com.ecommerceapp.project.KisanKart.models.controller;

import com.ecommerceapp.project.KisanKart.models.Product;
import com.ecommerceapp.project.KisanKart.models.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/add")
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/all")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

//    // ✅ Get all products
//    @GetMapping
//    public List<Product> getAllProducts() {
//        return productRepository.findAll();
//    }
//
//    // ✅ Get product by ID
//    @GetMapping("/{id}")
//    public Product getProductById(@PathVariable Integer id) {
//        return productRepository.findById(id).orElse(null);
//    }
//
//    // ✅ Add new product
//    @PostMapping
//    public Product addProduct(@RequestBody Product product) {
//        return productRepository.save(product);
//    }
//
//    // ✅ Update existing product
//    @PutMapping("/{id}")
//    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
//        product.setId(id);
//        return productRepository.save(product);
//    }
//
//    // ✅ Delete product
//    @DeleteMapping("/{id}")
//    public String deleteProduct(@PathVariable Integer id) {
//        productRepository.deleteById(id);
//        return "Product deleted successfully!";
//    }
}
