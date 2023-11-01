package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.model.entity.Event;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketBookingDTO {

    private Integer booking_id;
    private LocalDate date;
    private Integer price_per_ticket;
    private Integer quantity;
    private String Status;
    private User user;
    private Event event;
    private Trip trip;

}
