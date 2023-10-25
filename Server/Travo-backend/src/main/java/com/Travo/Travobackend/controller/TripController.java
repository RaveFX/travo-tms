package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
