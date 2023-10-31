package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.util.Date;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ticket_booking")
public class TicketBooking {
    @Id
    @GeneratedValue
    private Integer booking_id;
    private LocalDate date;
    private Integer price_per_ticket;
    private Integer quantity;
    private String Status;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id" )
    private User user;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "event_id" )
    private Event event;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;


}
