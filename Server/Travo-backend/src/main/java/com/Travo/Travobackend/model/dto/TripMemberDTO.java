package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripMemberDTO {
    private Integer member_id;
    private String profile_image;
    private String fname;
    private String lname;
    private String tripRole;

}
