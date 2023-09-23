package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.StoreManager;
import com.Travo.Travobackend.model.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface TripRepository extends JpaRepository<Trip, Integer> {
    @Query(value = "SELECT EXISTS(SELECT 1 FROM trip WHERE trip_id = :tripId AND unique_link = :uniqueKey)", nativeQuery = true)
     String existsByTripIdAndUniqueKey(@Param("tripId") Integer tripId, @Param("uniqueKey") String uniqueKey);



}
