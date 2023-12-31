package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.RoomDTO;
import com.Travo.Travobackend.model.entity.Reservation;
import com.Travo.Travobackend.model.entity.Room;
import com.Travo.Travobackend.repository.ReservationRepository;
import com.Travo.Travobackend.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/hotel")
@RequiredArgsConstructor


public class HotelController {
    @Autowired
    private final HotelService hotelService;

//    @GetMapping("/reservations")
//    public List<HotelReservationDTO> getReservations(){
//        return hotelService.hotelReservations();
//    }

    @GetMapping("/reservations/{userID}")
    public List<HotelReservationDTO> getHotelReservations(@PathVariable Integer userID){
        return hotelService.hotelOwnerReservations(userID);
    }
//hotels get reservation details
    @GetMapping("/reservationDetails/{reservationID}")
    public HotelReservationDTO getHotelReservationDetails(@PathVariable Integer reservationID){
        return hotelService.reservationDetails(reservationID);
    }

    @GetMapping("/rooms/{userID}")
    public List<RoomDTO> getRooms(@PathVariable Integer userID){
        return hotelService.hotelRooms(userID);
    }

}
