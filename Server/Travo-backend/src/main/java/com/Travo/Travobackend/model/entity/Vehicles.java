package com.Travo.Travobackend.model.entity;

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
@Table(name = "vehicles")


public class Vehicles {
    @Id
    @GeneratedValue
    private Integer vehicle_id;

    @ManyToOne
    @JoinColumn(name = "renter_id", referencedColumnName = "renter_id" )
    private VehicleRenter vehicleRenter;

    private String Vehicle_type;
    private String Vehicle_model;
    private Integer Rate;
    private Integer passengers;
    private String Description;
    private String licence_plate;
    private Boolean Air_conditioning;
    private Boolean bluetooth;
    private Boolean wifi;
    private Boolean sunroof;
    private String location;

}
