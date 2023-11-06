package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GuideInfoDTO {
    private Integer user_id;
    private String fname;
    private String lname;
    private String gender;
    private Integer emergency_contact;
    private Date DOB;
    private String contact_num;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private Integer postal_code;
    private String district;
    private String email;
    private String password;
    private LocalDate registration_date;
    private String profileImage = "profileImage.jpg";


}
