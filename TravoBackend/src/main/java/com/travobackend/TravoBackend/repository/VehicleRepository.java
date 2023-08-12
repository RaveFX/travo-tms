package com.travobackend.TravoBackend.repository;

import com.travobackend.TravoBackend.modal.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {
}
