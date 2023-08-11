package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {
}
