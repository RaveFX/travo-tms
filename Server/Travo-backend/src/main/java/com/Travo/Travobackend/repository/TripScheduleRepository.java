package com.Travo.Travobackend.repository;


import com.Travo.Travobackend.model.entity.TripSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripScheduleRepository extends JpaRepository<TripSchedule, Integer> {
}
