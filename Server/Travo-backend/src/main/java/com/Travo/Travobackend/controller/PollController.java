package com.Travo.Travobackend.controller;


import com.Travo.Travobackend.model.dto.*;
import com.Travo.Travobackend.model.dto.AttractionPollDTO;
import com.Travo.Travobackend.service.PollService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/trip")
@RequiredArgsConstructor
public class PollController {


    private final PollService pollService;

    @PostMapping("/poll/add-attraction")
    public String addAttractionToPoll(@RequestBody AttractionPollDTO attractionPollDTO) {
        return pollService.addAttraction(attractionPollDTO);
    }

    @GetMapping("/pollAttractionList/{tripID}/{day}/{userId}")
    public List<AttractionPollDTO> getSelectedAttractionList(@PathVariable Integer tripID, @PathVariable Integer day,@PathVariable Integer userId){
        return pollService.selectedAttractionList(tripID, day, userId);
    }

    @GetMapping("/pollAttractionVotedList/{tripID}/{day}/{userId}")
    public List<AttractionPollDTO> getSelectedAttractionVotedList(@PathVariable Integer tripID, @PathVariable Integer day,@PathVariable Integer userId){
        return pollService.selectedAttractionVotedList(tripID, day, userId);
    }

    @PutMapping("/updateAttractionTotalVotes/{tripId}/{attractionId}/{isChecked}/{day}")
    public ResponseEntity<String> updateAttractionTotalVotes(
            @PathVariable Integer tripId,
            @PathVariable Integer attractionId,
            @PathVariable Boolean isChecked,
            @PathVariable Integer day
    )
    {

        try {
            pollService.updateAttractionPoll(tripId, attractionId, isChecked, day);
            return new ResponseEntity<>("Update successful", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Update failed: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/attractions/updatePolluser/addlist")
    public ResponseEntity<String> addUserPollAttraction(@RequestBody PollUserDTO pollUserDTO) {
        String result = pollService.addUserPollAttraction(pollUserDTO);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/checkVotedORNot/{userId}/{AttactionPollId}")
    public ResponseEntity<String> checkVotedORNot(@PathVariable Integer userId, @PathVariable Integer AttactionPollId){
        String result = pollService.checkVotedORNot(userId, AttactionPollId);
        return ResponseEntity.ok(result);
    }

@DeleteMapping("/attractions/updatePolluser/remove")
public ResponseEntity<String> removePollUser(
        @RequestParam("user_id") Integer userId,
        @RequestParam("attractionPollId") Integer attractionPollId
) {

    String result = pollService.removePollUser(userId, attractionPollId);
    return ResponseEntity.ok(result);
}




//    @PostMapping("/poll/add-activities")
//    public String addActivityToPoll(@RequestBody ActivityPollDTO activityPollDTO) {
//        return pollService.addAttraction(activityPollDTO);
//    }







    @PutMapping("/updateTotalVotes/{tripId}/{hotelId}/{isChecked}")
    public ResponseEntity<String> updateTotalVotes(
            @PathVariable Integer tripId,
            @PathVariable Integer hotelId,
            @PathVariable Boolean isChecked
    ) {
        try {
            pollService.updateHotelPoll(tripId, hotelId, isChecked);
            return new ResponseEntity<>("Update successful", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Update failed: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }






    @GetMapping("/hoteLlist/{tripId}")
    public List<HotelPollDTO> gethotelList(@PathVariable Integer tripId) {
        return pollService.hotelList(tripId);
    }

    @PostMapping("/updatePolluser/addlist")
    public ResponseEntity<String> addUserPoll(@RequestBody PollUserDTO pollUserDTO) {
        System.out.println("Hotel ID: " + pollUserDTO.getHotelPoll().getId());
        String result = pollService.addUserPoll(pollUserDTO);
        return ResponseEntity.ok(result);
    }

//    @DeleteMapping("/updatePolluser/remove/{poll_id}")
//    public ResponseEntity<String> deletePollUser(@PathVariable("poll_id") Integer hotelpoll_id) {
//        System.out.println("byee");
//        String result = pollService.deletePollUser(hotelpoll_id);
//        return ResponseEntity.ok(result);
//    }



}
