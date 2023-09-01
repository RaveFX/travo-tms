package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@RestController
@RequestMapping("/api/v1/hotel")
@RequiredArgsConstructor


public class HotelController {
    @Autowired
    private final HotelService hotelService;

    @GetMapping("/reservations")
    public List<HotelReservationDTO> getReservations(){
        return hotelService.hotelReservations();
    }

    @GetMapping("/hotels")
    public List<HotelDTO> getHotels(){
        return hotelService.hotels();
    }

}