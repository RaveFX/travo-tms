package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.enumeration.Role;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.entity.User;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicleRenterDTO {
    private Integer renter_id;
    private String company_name;
    private String brn;
    private String description;
    private String contact_num;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private Integer postal_code;
    private String district;
    private Status status;
    private Membership membership;
    private Integer user_id;
    private String fname;
    private String lname;
    private String email;
    private String password;

    private LocalDate registration_date;
    private String profileImage;
    private Role role;
}
