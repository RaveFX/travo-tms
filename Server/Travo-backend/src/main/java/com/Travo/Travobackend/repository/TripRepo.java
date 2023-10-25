package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepo extends JpaRepository<Trip, Long> {
}
