package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.Membership;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicleRenter")
public class VehicleRenter {
    @Id
    @GeneratedValue
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

    @Enumerated(EnumType.STRING)
    private Membership membership;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id" )
    private User user;
}
