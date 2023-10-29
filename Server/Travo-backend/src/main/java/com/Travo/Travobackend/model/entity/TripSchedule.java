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
@Table(name = "trip_schedule")
public class TripSchedule {
    @Id
    @GeneratedValue
    private Integer id;
    private String type; //attraction or hotel or activity
    private String type_id; //place_id, hotel_id, agent_id
    private String location_name;
    private Integer day; //eg-day1, day2, day3
    private LocalDate date;
    private LocalTime start_time;
    private LocalTime end_time;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;


}
