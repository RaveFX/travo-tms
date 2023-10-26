package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttractionDTO {
    private String place_id;
    private String name;
    private String address;
    private String img_url;
    private Integer trip_id;

}
