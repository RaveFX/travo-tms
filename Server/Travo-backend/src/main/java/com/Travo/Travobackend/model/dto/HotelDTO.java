package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HotelDTO {
    private Integer hotel_id;
    private String hotel_name;
    private String description;
    private String hotel_img;
    private Double total_reviews;
}
