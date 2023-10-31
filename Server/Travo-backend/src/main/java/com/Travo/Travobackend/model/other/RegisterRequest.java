package com.Travo.Travobackend.model.other;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    //traveler
    private Integer emergency_contact;
    private Date DOB;

    //traveler | guide
    private String fname;
    private String lname;
    private String gender;

    //users
    private String email;
    private String password;
    private String contact_num;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private Integer postal_code;
    private String district;

    //activity agent | hotel agent |shop | vehicle renter
    private String brn;
    private String description;

    //activity agent | guide | hotel agent | shop
    private String bank;
    private String branch;
    private String acc_name;
    private Integer acc_num;

    //activity agent | vehicle renter
    private String company_name;
    private String category;

    //guide
    private String nic;
    private String qualifications;

    //hotel agent
    private String hotel_name;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private Integer user_id;

    //shop
    private String shop_name;

}
