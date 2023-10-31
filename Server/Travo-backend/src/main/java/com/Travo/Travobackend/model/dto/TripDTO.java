package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripDTO {
    private Integer trip_id;
    private Date created_date;
    private String trip_name;
    private String description;
    private LocalDate start_date;
    private LocalDate end_date;
    private Integer completed;
    private String note;
    private String state;
    private Integer admin_id;
}
