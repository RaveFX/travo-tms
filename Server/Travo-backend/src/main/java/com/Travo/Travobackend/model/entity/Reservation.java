package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reservation")
public class Reservation {
    @Id
    @GeneratedValue
    private Integer reservation_id;

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "room_id" )
    private Room room;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id" )
    private User user;

    private LocalDate checkin_date;
    private LocalDate checkout_date;
    private LocalTime checkin_time;
    private LocalTime checkout_time;
    private Integer payment;
    private Integer status;
    private Integer trip_id;

}