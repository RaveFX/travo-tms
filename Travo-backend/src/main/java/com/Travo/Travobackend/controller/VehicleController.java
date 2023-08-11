package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.entity.Vehicle;
import com.Travo.Travobackend.repository.VehicleRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")

public class VehicleController {

    private VehicleRepository vehicleRepository;

    @PostMapping("/vehicle")
    Vehicle newVehicle(@RequestBody Vehicle newVehicle){
        return vehicleRepository.save(newVehicle);
    }
}
