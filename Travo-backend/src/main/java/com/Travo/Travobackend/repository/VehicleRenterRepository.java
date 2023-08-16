package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.VehicleRenter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VehicleRenterRepository extends JpaRepository<VehicleRenter, Integer> {
    Optional<VehicleRenter> findByBrn(String brn);
}
