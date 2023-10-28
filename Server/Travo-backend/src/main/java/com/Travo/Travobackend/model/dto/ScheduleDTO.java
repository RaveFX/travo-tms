package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleDTO {
    private String type; //attraction or hotel or activity
    private String type_id; //place_id, hotel_id, agent_id
    private String location_name;
    private Integer day; //eg-day1, day2, day3
    private LocalDate date;
    private LocalTime start_time;
    private LocalTime end_time;
    private Integer trip_id;
}
