package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/trips")
@RequiredArgsConstructor
public class TripController {

    private final TripService tripService;

    @PostMapping("/create-trip")
    public ResponseEntity<Trip> createTrip(@RequestBody TripDTO tripDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(tripService.createTrip(tripDTO));
    }

    @GetMapping("/{tripID}")
    public ResponseEntity<Trip> getTripById(@PathVariable Long tripID){
        Trip trip = tripService.getTripById(tripID);

        if(trip != null){
            return ResponseEntity.ok(trip);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{tripID}")
    public ResponseEntity<Trip> updateTrip(
            @PathVariable Long tripID,
            @RequestBody TripDTO tripDTO
    ){
        Trip updateTrip = tripService.updateTrip(tripID, tripDTO);

        if(updateTrip != null){
            return ResponseEntity.ok(updateTrip);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
