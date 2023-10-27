package com.Travo.Travobackend.controller;


import com.Travo.Travobackend.model.dto.HotelPollDTO;
import com.Travo.Travobackend.service.PollService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/trip")
@RequiredArgsConstructor
public class PollController {


    private final PollService pollService;

    @PutMapping("/updateTotalVotes/{tripId}/{hotelId}/{isChecked}")
    public ResponseEntity<String> updateTotalVotes(
            @PathVariable Integer tripId,
            @PathVariable Integer hotelId,
            @PathVariable Boolean isChecked
    ) {

        System.out.println("ttttt");
        System.out.println(tripId);
        System.out.println(hotelId);
        System.out.println(isChecked);
        try {
            pollService.updateHotelPoll(tripId, hotelId, isChecked);
            return new ResponseEntity<>("Update successful", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Update failed: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/hoteLlist/{tripId}")
    public List<HotelPollDTO> gethotelList(@PathVariable Integer tripId) {
        System.out.println(tripId);
        return pollService.hotelList(tripId);
    }


}
