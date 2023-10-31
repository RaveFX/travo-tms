package com.Travo.Travobackend.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "traveler")
@PrimaryKeyJoinColumn(name="traveler_id")
public class Traveler extends User {
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
    private String profileImage = "profileImage.jpg";
}
