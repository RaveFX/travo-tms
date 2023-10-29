package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.BoardType;
import com.Travo.Travobackend.model.entity.Room;
import com.Travo.Travobackend.model.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDTO {
    private Integer reservation_id;
    private Integer user_id;
    private Date date;
    private Date checkin_date;
    private Date checkout_date;
    private LocalTime checkin_time;
    private LocalTime checkout_time;
    private Integer payment;
    private Integer status;
    private Integer trip_id;
    private Integer room_id;
    private String boardType;
    private Integer hotel_id;


}
