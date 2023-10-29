package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<Trip> getTripById(@PathVariable Integer tripID){
        Trip trip = tripService.getTripById(tripID);

        if(trip != null){
            return ResponseEntity.ok(trip);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/creator/{id}")
    public ResponseEntity<String> getCreatorName(@PathVariable Integer id){
        return ResponseEntity.ok(tripService.getCreatorName(id));
    }

    @GetMapping("/all-trips")
    public ResponseEntity<List<Trip>> getAllTrips(){
//        System.out.println("Awa");
        List<Trip> trip = tripService.getAllTrips();

        if(trip != null){
            return ResponseEntity.ok(trip);
        }else {
            return ResponseEntity.ok(null);
        }
    }

    @PutMapping("/{tripID}")
    public ResponseEntity<Trip> updateTrip(
            @PathVariable Integer tripID,
            @RequestBody TripDTO tripDTO
    ){
        Trip updateTrip = tripService.updateTrip(tripID, tripDTO);

        if(updateTrip != null){
            return ResponseEntity.ok(updateTrip);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/dates/{tripID}")
    public ResponseEntity<Trip> updateDate(
            @PathVariable Integer tripID,
            @RequestBody TripDTO tripDTO
    ){
        Trip updateTrip = tripService.updateDate(tripID, tripDTO);

        if(updateTrip != null){
            return ResponseEntity.ok(updateTrip);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
