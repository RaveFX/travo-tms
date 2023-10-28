package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.dto.TripMemberDTO;
import com.Travo.Travobackend.model.entity.TripMember;
import com.Travo.Travobackend.model.other.AuthenticationResponse;
import com.Travo.Travobackend.model.other.RegisterRequest;
import com.Travo.Travobackend.service.TripMemberService;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Travo.Travobackend.repository.GroupMessagesRepository;
import com.Travo.Travobackend.repository.TripMemberRepository;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.model.entity.Trip;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

import java.util.Random;


@RestController
@RequestMapping("/api/v1/trip")
@RequiredArgsConstructor
public class TripController {
    @Autowired
    private final TripService tripService; // Initialize this field in the constructor
    private final TripMemberService tripMemberService;
    @Autowired
    private TripRepository tripRepository;
    @Autowired
    private final GroupMessagesRepository groupMessagesRepository;
    @Autowired
    private TripMemberRepository tripMembersRepository;

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


    private String generateRandomToken(int length) {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        Random random = new Random();
        StringBuilder token = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            token.append(characters.charAt(random.nextInt(characters.length())));
        }
        return token.toString();
    }

    @PostMapping("/create")
    public Trip createTrip(@RequestBody Trip trip) {
        Trip savedTrip = tripRepository.save(trip);

        if (savedTrip.getTrip_id() != null) {
            String uniqueToken = generateRandomToken(20);
            String uniqueLink =  savedTrip.getTrip_id() + "" + uniqueToken;
            System.out.println(uniqueLink);

            savedTrip.setUniqueLink(uniqueLink);

            return tripRepository.save(savedTrip);
        } else {
            return null;
        }
    }


    @PostMapping("/create-members")
    public ResponseEntity<String> addTripMember(@RequestBody TripMemberDTO tripMemberDTO) {
        String result = tripMemberService.addTripMember(tripMemberDTO);
        return ResponseEntity.ok(result);
    }


//    @GetMapping("/triplist/{userId}")
//    public List<TripDTO> gettriplist(@PathVariable Integer userId) {
//        System.out.println(userId);
//        return tripService.tripList(userId);
//    }
//
//@GetMapping("/trip-information/{tripId}")
//public ResponseEntity<Trip> getTripInfo(@PathVariable Integer tripId) {
//    Trip trip = tripRepository.findById(tripId).orElse(null);
//
//    if (trip != null) {
//        return ResponseEntity.ok(trip);
//    } else {
//        return ResponseEntity.notFound().build();
//    }
//}


    @GetMapping("/checkTrip/{tripId}/{uniqueKey}")
    public ResponseEntity<String> checkTrip(@PathVariable Integer tripId, @PathVariable String uniqueKey){
        String result = tripService.checkTrip(tripId, uniqueKey);
        return ResponseEntity.ok(result);
    }


}
