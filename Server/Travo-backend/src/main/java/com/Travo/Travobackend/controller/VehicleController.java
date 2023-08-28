package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.VehiclesDTO;
import com.Travo.Travobackend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/traveler")
@RequiredArgsConstructor
public class VehicleController {
    @Autowired
    private final VehicleService vehicleService;

    @GetMapping("/vehicles")
    public List<VehiclesDTO> getVehicles(){
        return vehicleService.vehicles();
    }
}
