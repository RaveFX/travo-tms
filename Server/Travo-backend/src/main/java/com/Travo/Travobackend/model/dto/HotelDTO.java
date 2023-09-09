package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HotelDTO {
    private String description;
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

}
