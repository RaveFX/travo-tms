package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.ReservationDTO;
import com.Travo.Travobackend.model.dto.TicketBookingDTO;
import com.Travo.Travobackend.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/transaction")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @GetMapping("/reservation/{travelerId}")
    public ResponseEntity<List<ReservationDTO>> reservation(@PathVariable Integer travelerId) {
        return ResponseEntity.ok(transactionService.reservation(travelerId));
    }

//    @GetMapping("/store/{travelerId}")
//    public ResponseEntity<List<ReservationDTO>> store(@PathVariable Integer travelerId) {
//        return ResponseEntity.ok(transactionService.store(travelerId));
//    }

    @GetMapping("/ticket/{travelerId}")
    public ResponseEntity<List<TicketBookingDTO>> ticket(@PathVariable Integer travelerId) {
        return ResponseEntity.ok(transactionService.ticket(travelerId));
    }

}

