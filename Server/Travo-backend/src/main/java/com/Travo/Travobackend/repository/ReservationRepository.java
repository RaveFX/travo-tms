package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.dto.ReservationDTO;
import com.Travo.Travobackend.model.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    @Query("SELECT r FROM Reservation r WHERE r.user.user_id = :travelerId AND r.status = 1")
    List<ReservationDTO> findCompletedPayments(Integer travelerId);
}
