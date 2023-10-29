package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TripDTO {
    private String trip_name;
    private Integer trip_creator_id;
    private String state;
    private LocalDate created_date;
    private LocalDate start_date;
    private LocalDate end_date;
    private String description;
}
