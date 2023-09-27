package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.TripState;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Data
@Table(name = "Trip")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Trip_id;
    private String Trip_name;

    @Enumerated(EnumType.STRING)
    private TripState State;

    private int Trip_creatorID;
    private Timestamp Created_date;
    private Timestamp Start_Date;
    private Timestamp End_Date;
    private String Description;
}
