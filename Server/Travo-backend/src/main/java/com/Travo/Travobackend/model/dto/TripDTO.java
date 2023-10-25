package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.TripState;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


// import java.util.Date;

// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class TripDTO {
//     private Integer trip_id;
//     private Date created_date;
//     private String trip_name;
//     private String description;
//     private Date start_date;
//     private Date end_date;
//     private Integer completed;
import java.sql.Timestamp;
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
    private Timestamp Created_date;
    @JsonProperty("start_date")
    private Timestamp Start_Date;
    @JsonProperty("end_date")
    private Timestamp End_Date;
    @JsonProperty("description")
    private String Description;
}
