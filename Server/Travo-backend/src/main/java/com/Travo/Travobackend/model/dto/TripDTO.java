package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripDTO {
    private Integer trip_id;
    private Date created_date;
    private String trip_name;
    private String description;
    private Date start_date;
    private Date end_date;
    private Integer completed;
}
