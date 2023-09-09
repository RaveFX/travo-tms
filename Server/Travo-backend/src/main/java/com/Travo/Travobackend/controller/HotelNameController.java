package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.service.HotelService;
import com.Travo.Travobackend.service.TraveleroptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/traveler")
@RequiredArgsConstructor
public class HotelNameController {
    @Autowired
    private final TraveleroptionService traveleroptionService;

    @GetMapping("/hotels")
    public List<HotelDTO> getHotels(){
        return traveleroptionService.hotels();
    }
}
