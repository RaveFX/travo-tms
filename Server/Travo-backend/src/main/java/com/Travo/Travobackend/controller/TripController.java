package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.TripDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/traveler")
@RequiredArgsConstructor
public class TripController {

//    private final TripService tripService;
//
//    @GetMapping("/trip")
//    public List<TripDTO> getTrips(){
//        return TripService.trips();
//    }

}
