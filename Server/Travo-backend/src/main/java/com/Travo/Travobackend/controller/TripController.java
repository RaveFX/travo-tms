package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.*;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/trip")
@RequiredArgsConstructor
public class TripController {

    @Autowired
    private final TripService tripService;

    @GetMapping("/tripList/{userID}")
    public List<TripDTO> getTripList(@PathVariable Integer userID){
        return tripService.tripList(userID);
    }

    @GetMapping("/tripDetails/{tripID}")
    public TripDTO getTripDetails(@PathVariable Integer tripID){
        return tripService.tripDetails(tripID);
    }

    @GetMapping("/tripDates/{tripId}")
    public List<LocalDate> getDatesBetweenForTrip(@PathVariable Integer tripId) {
        return tripService.getDatesBetweenForTrip(tripId);
    }

    @GetMapping("/hotelList")
    public List<HotelDTO> getHotelList(){
        return tripService.hotelList();
    }

    @GetMapping("/activityList")
    public List<ActivityDTO> getActivityList(){
        return tripService.activityList();
    }

    @PostMapping("/add-attraction")
    public String addAttractionToTrip(@RequestBody AttractionDTO attractionDTO) {
        return tripService.addAttraction(attractionDTO);
    }

    @PostMapping("/add-hotel")
    public String addHotelToTrip(@RequestBody HotelDTO hotelDTO) {
        return tripService.addHotel(hotelDTO);
    }
    @PostMapping("/add-activity")
    public String addActivityToTrip(@RequestBody ActivityDTO activityDTO) {
        return tripService.addActivity(activityDTO);
    }

    @GetMapping("/selectedHotelList/{tripID}/{day}")
    public List<HotelDTO> getSelectedHotelList(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.selectedHotelList(tripID, day);
    }
    @GetMapping("/selectedActivityList/{tripID}/{day}")
    public List<ActivityDTO> getSelectedActivityList(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.selectedActivityList(tripID, day);
    }

    @GetMapping("/selectedAttractionList/{tripID}/{day}")
    public List<AttractionDTO> getSelectedAttractionList(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.selectedAttractionList(tripID, day);
    }

    @DeleteMapping("/removeSelectedHotel/{row_id}")
    public ResponseEntity<String> deleteHotel(@PathVariable Integer row_id) {
        tripService.removeHotelById(row_id);
        return ResponseEntity.ok("Hotel deleted successfully");
    }
    @DeleteMapping("/removeSelectedActivity/{row_id}")
    public ResponseEntity<String> deleteActivity(@PathVariable Integer row_id) {
        tripService.removeActivityById(row_id);
        return ResponseEntity.ok("Activity deleted successfully");
    }
    @DeleteMapping("/removeSelectedAttraction/{row_id}")
    public ResponseEntity<String> deleteAttraction(@PathVariable Integer row_id) {
        tripService.removeAttractionById(row_id);
        return ResponseEntity.ok("Attraction deleted successfully");
    }



}
