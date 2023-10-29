package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.ReservationDTO;
import com.Travo.Travobackend.model.dto.VehiclesDTO;
import com.Travo.Travobackend.repository.ReservationRepository;
import com.Travo.Travobackend.service.TraveleroptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/traveler")
@RequiredArgsConstructor
public class TravelerOptionController {
    @Autowired
    private final TraveleroptionService traveleroptionService;

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping("/hotels")
    public List<HotelDTO> getHotels(){
        return traveleroptionService.hotels();

    }
    @GetMapping("/hotels/{hotelId}/{roomId}")
    public List<HotelDTO> getHotelDetails(@PathVariable Integer hotelId,@PathVariable Integer roomId){
        System.out.println(hotelId);

return traveleroptionService.hotelDetails(hotelId,roomId);

    }
    @GetMapping("/hotels/{hotelId}")
    public List<HotelDTO> getHotelBasics(@PathVariable Integer hotelId){
        System.out.println(hotelId);
        return traveleroptionService.basics(hotelId);

    }
    @GetMapping("/hoteltypes/{hotelId}")
    public List<HotelDTO> getHotelTypes(@PathVariable Integer hotelId){
//        System.out.println("jdhfgdf");
        System.out.println(hotelId);

        return traveleroptionService.types(hotelId);

    }



    @PostMapping("/hotelBooking/{userId}/{hotelId}/{roomId}")
    public String hotelBooking(
            @RequestBody ReservationDTO reservationDTO,
            @PathVariable Integer hotelId,
            @PathVariable Integer roomId,
            @PathVariable Integer userId){
        return traveleroptionService.hotelBooking(reservationDTO,userId,hotelId,roomId);

    }
    @GetMapping("/checkAvailability/{roomId}/{boardType}")
    public List<ReservationDTO> getAvailability(
            @PathVariable Integer roomId,
            @PathVariable String boardType
            ){
        return traveleroptionService.availability(roomId,boardType);

    }

//==========================Vehicle===============================

    @Autowired
    private final TraveleroptionService vehicleService;

    @GetMapping("/vehicles")
    public List<VehiclesDTO> getVehicles(){
        return vehicleService.vehicles();
    }
    @GetMapping("/renter")
    public List<VehiclesDTO> getCompany(){
        return vehicleService.company();
    }
    @GetMapping("/vehicle/{vehicleId}")
    public List<VehiclesDTO> getVehicleTypes(@PathVariable Integer vehicleId){
        return vehicleService.vehicle(vehicleId);
    }


    }





