package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HotelPollDTO {
    private Integer id;
    private Integer hotel_id;
    private Integer trip_id;
    private Integer day;
    private Integer total_votes;
    private String hotel_name;

    private String description;
    private String hotel_img;
    private Double total_reviews;

}
