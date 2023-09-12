package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.TripState;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TripDTO {
    @JsonProperty("trip_name")
    private String Trip_name;
    @JsonProperty("trip_creator_id")
    private int Trip_creatorID;
    @JsonProperty("state")
    private String State;
    @JsonProperty("created_date")
    private LocalDate Created_date;
    @JsonProperty("start_date")
    private LocalDate Start_Date;
    @JsonProperty("end_date")
    private LocalDate End_Date;
    @JsonProperty("description")
    private String Description;
}
