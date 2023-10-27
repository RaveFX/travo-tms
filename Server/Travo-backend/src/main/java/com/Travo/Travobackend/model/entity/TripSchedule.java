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
    private String type;
    private Integer type_id;//id in the trip_activity, trip_hotel, trip_attraction table
    private Integer day;
    private LocalDate date;
    private LocalTime start_time;
    private LocalTime end_time;
    private Integer rank; //position in the shedule

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;


}
