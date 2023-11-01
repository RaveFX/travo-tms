package com.Travo.Travobackend.model.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActivityPollDTO {
    private Integer id;
    private Integer day;

    private Integer total_votes;
    private Integer activity_id;
    private Integer trip_id;
    private Integer agent_id;


}
