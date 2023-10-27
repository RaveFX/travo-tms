package com.Travo.Travobackend.controller;
import com.Travo.Travobackend.model.dto.VehicleDTO;
import com.Travo.Travobackend.model.entity.Vehicle;
import com.Travo.Travobackend.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/vehicle")
@CrossOrigin(origins = "http://localhost:5173")
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;
    @PostMapping("/addVehicle")
    public ResponseEntity<Vehicle> addVehicle(@ModelAttribute VehicleDTO vehicleDTO){
        Vehicle addedVehicle = vehicleService.addVehicle(vehicleDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedVehicle);
    }

    @GetMapping("/getAllVehicles")
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        List<Vehicle> vehicles = vehicleService.getAllVehicles();

        if (!vehicles.isEmpty()) {
            return ResponseEntity.ok(vehicles);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

//    @GetMapping("/getTotalCost")
//    public ResponseEntity<Double> getTotalCost() {
//        double totalCost = budgetService.getTotalCost();
//
//        return ResponseEntity.ok(totalCost);
//    }

    // @GetMapping("/{budgetID}")
    // public ResponseEntity<Budget> getBudgetById(@PathVariable Integer budgetID){
    //     Budget budget =budgetService.getBudgetById(budgetID);

    //     if(budget != null){
    //         return ResponseEntity.ok(budget);
    //     }else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    @PutMapping("/{VehicleID}")
    public ResponseEntity<Vehicle> updateVehicle(
            @PathVariable Integer VehicleID,
            @ModelAttribute VehicleDTO vehicleDTO
    ){
        Vehicle updatedVehicle = vehicleService.updateVehicle(VehicleID,vehicleDTO);

        if(updatedVehicle != null){
            return ResponseEntity.ok(updatedVehicle);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{VehicleID}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Integer VehicleID){
        boolean isDeleted =vehicleService.deleteVehicle(VehicleID);

        if(isDeleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}