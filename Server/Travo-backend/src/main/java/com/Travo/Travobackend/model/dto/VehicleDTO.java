package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VehicleDTO {
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
