package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HotelReservationDTO {
    private Integer reservation_id;
    private Integer user_id;
    private Date date;
    private Date checkin_date;
    private Date checkout_date;
    private Time checkin_time;
    private LocalTime checkout_time;
    private Integer payment;
    private Integer status;
    private Integer trip_id;
    private Integer room_id;

    //reservation details
    private String room_name;
    private String fname;
    private String lname;
    private String contact_num;
}
