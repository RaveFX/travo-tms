package com.Travo.Travobackend.model.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "Vehicle")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int VehicleID;
    private int CompanyID;
    private String VehicleType;
    private String VehicleModel;
    private int Rate;
    private int Passengers;
    private String Description;
    private String LicenseNo;
    private String AC;
    private String BT;
    private String WiFi;
    private String Sunroof;
    private String Location;
    private String Image;



}
