package com.Travo.Travobackend.model.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttractionPollDTO {
    private Integer id;
    private String place_id;
    private String name;
    private Integer total_votes;
    private String address;
    private String img_url;
    private Integer day;
    private Integer trip_id;
    private Integer agent_id;
}
