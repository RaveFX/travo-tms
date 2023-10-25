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
//import java.sql.Timestamp;

//@AllArgsConstructor
//@NoArgsConstructor
//@Data
//public class TripDTO {
//    private String trip_name;
//    private int Trip_creatorID;
//    private String State;
//    private Timestamp Created_date;
//    private Timestamp start_date;
//    private Timestamp end_date;
//    private String description;
//}
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
