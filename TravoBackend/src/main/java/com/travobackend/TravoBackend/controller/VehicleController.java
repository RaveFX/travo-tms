package com.travobackend.TravoBackend.controller;

import com.travobackend.TravoBackend.modal.entity.Vehicle;
import com.travobackend.TravoBackend.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(" http://127.0.0.1:5173")
public class VehicleController {
    @Autowired
    private VehicleRepository vehicleRepository;

    @PostMapping("/vehicle")
    Vehicle newVehicle(@RequestBody Vehicle newVehicle){
        return vehicleRepository.save(newVehicle);}

    @GetMapping("vehicles")
    List<Vehicle> getAllVehicles(){
        return vehicleRepository.findAll();

    }
}
