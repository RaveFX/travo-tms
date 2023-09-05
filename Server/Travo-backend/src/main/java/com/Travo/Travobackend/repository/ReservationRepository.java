package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
}
