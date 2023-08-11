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
@Table(name = "vehicle")
//@PrimaryKeyJoinColumn(name="vehicle_id")
public class Vehicle {
    @Id
    @GeneratedValue
    private Integer vehicle_id;
    private Integer company_id;
    private String vehicle_type;
    private String vehicle_model;
    private String rate;
    private Integer passenagers;
    private String description;
    private String licence_plate;
    private Boolean air_conditioning;
    private Boolean bluetooth;
    private Boolean wifi;
    private Boolean sunroof;
    private String location;
    private String vehicle_image;


}
