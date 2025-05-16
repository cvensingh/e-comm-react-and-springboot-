package com.ecommerceapp.project.KisanKart.models.repository;

import com.ecommerceapp.project.KisanKart.models.Consumer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsumerRepository extends JpaRepository<Consumer, Integer> {
}
