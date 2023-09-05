package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.model.entity.User;
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
@PrimaryKeyJoinColumn(name="renter_id")
public class VehicleRenter extends User {
    private String company_name;
    private String brn;
    private String description;

    @Enumerated(EnumType.STRING)
    private Membership membership;
}
