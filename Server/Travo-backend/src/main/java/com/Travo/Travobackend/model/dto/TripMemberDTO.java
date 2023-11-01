package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.TripRole;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripMemberDTO {
    private Integer member_id;
    private Integer trip_id;
    private Integer user_id;
    private String fname;
    private Integer traveler_id;
    private String profile_image;
    private String lname;
    private String tripRole;
    

}
