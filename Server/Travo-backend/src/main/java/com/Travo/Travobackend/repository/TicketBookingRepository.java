package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.dto.TicketBookingDTO;
import com.Travo.Travobackend.model.entity.TicketBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TicketBookingRepository extends JpaRepository<TicketBooking, Integer> {

    @Query("SELECT t FROM TicketBooking t WHERE t.user.user_id = :travelerId AND t.Status = 'COMPLETE'")
    List<TicketBookingDTO> findCompletedTicketPayments(Integer travelerId);

}
