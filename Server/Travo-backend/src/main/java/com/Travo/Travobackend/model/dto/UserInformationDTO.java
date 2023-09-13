package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.Role;
import com.Travo.Travobackend.enumeration.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInformationDTO {
    private Integer user_id;
    private String email;
    private String password;
    private String contact_num;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private Integer postal_code;
    private String district;
    private LocalDate registration_date;
    private String profileImage;
    private Role role;
    private Status status;

}
