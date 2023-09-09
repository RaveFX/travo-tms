package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehiclesDTO {
    private Integer vehicle_id;
    private String Vehicle_type;
    private String Vehicle_model;
    private Integer Seat;
    private Integer Rate;
    private Integer Large_bag;
    private Integer Small_bag;
    private Integer passengers;
    private String Description;
    private String licence_plate;
    private Boolean Air_conditioning;
    private Boolean bluetooth;
    private Boolean wifi;
    private Boolean sunroof;
    private String location;
    private String img;
}
