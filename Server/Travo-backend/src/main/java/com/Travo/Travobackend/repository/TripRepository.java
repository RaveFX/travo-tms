package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TripRepository extends JpaRepository<Trip, Integer> {
    @Query(value = "SELECT EXISTS(SELECT 1 FROM trip WHERE trip_id = :tripId AND unique_link = :uniqueKey)", nativeQuery = true)
     boolean existsByTripIdAndUniqueKey(@Param("tripId") String tripId, @Param("uniqueKey") String uniqueKey);



}
