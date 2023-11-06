package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDTO {
    private Integer review_id;
    private Integer service_id;
    private String fname;
    private String lname;
    private LocalDate review_date;
    private Integer stars;
    private String review;
}
