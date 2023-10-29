package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GuideDTO {
    private Integer guide_id;
    private String fname;
    private String lname;
    private String nic;
    private String gender;
    private String bank;
    private String branch;
    private String acc_name;
    private Integer acc_num;
    private String qualifications;
    private String description;
    private String contact_num;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private Integer postal_code;
    private String district;
}
