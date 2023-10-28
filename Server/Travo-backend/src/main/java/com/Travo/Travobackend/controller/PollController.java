package com.Travo.Travobackend.controller;


import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.HotelPollDTO;
import com.Travo.Travobackend.model.dto.PollUserDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.dto.TripMemberDTO;
import com.Travo.Travobackend.model.entity.HotelPoll;
import com.Travo.Travobackend.service.PollService;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
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

    @PostMapping("/updatePolluser/addlist")
    public ResponseEntity<String> addUserPoll(@RequestBody PollUserDTO pollUserDTO) {
        System.out.println("Hotel ID: " + pollUserDTO.getHotelPoll().getId());
        String result = pollService.addUserPoll(pollUserDTO);
        return ResponseEntity.ok(result);
    }


}
