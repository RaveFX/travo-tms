package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.ReservationDTO;
import com.Travo.Travobackend.model.dto.TicketBookingDTO;
import com.Travo.Travobackend.model.entity.TicketBooking;
import com.Travo.Travobackend.repository.ReservationRepository;
import com.Travo.Travobackend.repository.TicketBookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final ReservationRepository reservationRepository;
    private final TicketBookingRepository ticketBookingRepository;

    public List<ReservationDTO> reservation(Integer travelerId) {
        return reservationRepository.findCompletedPayments(travelerId);
    }

    public List<TicketBookingDTO> ticket(Integer travelerId) {
        return ticketBookingRepository.findCompletedTicketPayments(travelerId);
    }
}
