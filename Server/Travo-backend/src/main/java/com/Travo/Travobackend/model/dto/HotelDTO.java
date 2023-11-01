package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HotelDTO {
    private Integer user_id;
    private String hotel_description;
    private Integer adult_count;
    private Integer child_count;
    private Integer price;
    private Integer discount;
    private String view;
    private Boolean ac;
    private Boolean wifi;
    private Boolean breakfast;
    private Boolean lunch;
    private Boolean Dinner;
    private String hotel_name;
    private Integer hotel_id;
    private String room_name;
    private Integer room_id;
    private String room_description;
    private String brn;
    private Status status;
    private String Acc_name;


   //for the schedule
    private String description;
    private String hotel_img;
    private Double total_reviews;
    private Integer trip_id;
    private Integer day;
    private Integer row_id;
}
