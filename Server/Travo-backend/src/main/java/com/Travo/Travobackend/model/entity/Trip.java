package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.TripState;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Data
@Table(name = "Trip")
public class Trip {
    @Id
    @GeneratedValue
    private Integer trip_id;
    private String trip_name;

    @Enumerated(EnumType.STRING)
    private TripState State;

    private int Trip_creatorID;
    private LocalDate created_date;
    private LocalDate start_date;
    private LocalDate end_date;
    private String description;
}
