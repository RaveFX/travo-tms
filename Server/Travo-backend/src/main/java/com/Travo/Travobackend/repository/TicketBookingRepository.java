package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Reservation;
import com.Travo.Travobackend.model.entity.TicketBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketBookingRepository extends JpaRepository<TicketBooking, Integer> {
}
