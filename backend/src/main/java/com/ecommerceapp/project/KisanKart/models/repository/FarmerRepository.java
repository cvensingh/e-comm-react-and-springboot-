package com.ecommerceapp.project.KisanKart.models.repository;



import com.ecommerceapp.project.KisanKart.models.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FarmerRepository extends JpaRepository<Farmer, Integer> {
}

