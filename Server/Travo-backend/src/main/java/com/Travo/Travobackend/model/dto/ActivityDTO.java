package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActivityDTO {
    private Integer agent_id;
    private String company_name;
    private String description;
    private String activity_img;
    private Double total_reviews;
    private String category;
    private Integer trip_id;
    private Integer day;
}
