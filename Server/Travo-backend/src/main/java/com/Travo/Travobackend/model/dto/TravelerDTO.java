package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class TravelerDTO {
    private String firstname;
    private String lastname;
    private String gender;
    private Integer emergency_contact;
    private Date DOB;
    private String contact_num;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private Integer postal_code;
    private String district;
    private byte[] profileImage;
}
