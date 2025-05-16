package com.ecommerceapp.project.KisanKart.models.repository;

import com.ecommerceapp.project.KisanKart.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
