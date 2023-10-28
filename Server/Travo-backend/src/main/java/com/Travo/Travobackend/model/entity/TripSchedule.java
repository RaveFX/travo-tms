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
    private Integer type_id; //id in the trip_activity, trip_hotel, trip_attraction table
    private String location_name;
    private Integer day; //eg-day1, day2, day3
    private LocalDate date;
    private LocalTime start_time;
    private LocalTime end_time;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;


}
