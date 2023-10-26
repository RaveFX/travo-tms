package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.BoardType;
import com.Travo.Travobackend.model.entity.Room;
import com.Travo.Travobackend.model.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDTO {
    private Integer reservation_id;
    private Room room;
    private User user;
    private LocalDate date;
    private LocalDate checkin_date;
    private LocalDate checkout_date;
    private LocalTime checkin_time;
    private LocalTime checkout_time;
    private Integer payment;
    private Integer status;
    private Integer trip_id;
    private BoardType boardType;
}
