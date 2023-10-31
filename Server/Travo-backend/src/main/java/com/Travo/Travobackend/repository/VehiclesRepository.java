package com.Travo.Travobackend.repository;
import com.Travo.Travobackend.model.entity.Vehicles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiclesRepository extends JpaRepository<Vehicles, Integer> {
}
