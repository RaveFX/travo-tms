package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripDTO {
    private Integer tripId;
    private String trip_admin;
    private String tripName;
}
