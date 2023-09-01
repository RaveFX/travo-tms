package com.Travo.Travobackend.repository;


import com.Travo.Travobackend.model.entity.StoreManager;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StoreManagerRepository extends JpaRepository<StoreManager, Integer> {
    Optional<StoreManager> findByBrn(String brn);
}