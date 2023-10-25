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
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.TripMembers;
import com.Travo.Travobackend.repository.GroupMessagesRepository;
import com.Travo.Travobackend.repository.TripMemberRepository;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

import java.util.Random;


@RestController
@RequestMapping("/api/v1/trip")
@RequiredArgsConstructor
public class TripController {
    private final TripService tripService; // Initialize this field in the constructor
    @Autowired
    private TripRepository tripRepository;
    private final GroupMessagesRepository groupMessagesRepository;
    private TripMemberRepository tripMembersRepository;

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



    @Autowired
    public TripController(TripService tripService, TripRepository tripRepository, GroupMessagesRepository groupMessagesRepository,TripMemberRepository tripMembersRepository) {
        this.tripService = tripService; // Initialize tripService here
        this.tripRepository = tripRepository;
        this.groupMessagesRepository = groupMessagesRepository;
        this.tripMembersRepository = tripMembersRepository;
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

        if (savedTrip.getTripId() != null) {
            String uniqueToken = generateRandomToken(20);
            String uniqueLink =  savedTrip.getTripId() + "" + uniqueToken;
            System.out.println(uniqueLink);

            savedTrip.setUniqueLink(uniqueLink);

            return tripRepository.save(savedTrip);
        } else {
            return null;
        }
    }

    @PostMapping("/create-members")
    public TripMembers createTripMembers(@RequestBody TripMembers tripMembers) {
        System.out.println("member add");
        return tripMembersRepository.save(tripMembers);
    }

    @GetMapping("/triplist/{userId}")
    public List<TripDTO> gettriplist(@PathVariable Integer userId) {
        System.out.println(userId);
        return tripService.tripList(userId);
    }

    @GetMapping("/trip-information/{tripId}")
    public ResponseEntity<Trip> getTripInfo(@PathVariable Integer tripId) {
        System.out.println("works");
        Trip trip = tripRepository.findById(tripId).orElse(null);

        if (trip != null) {
            return ResponseEntity.ok(trip);
        } else {
            // Return a 404 Not Found response if the trip is not found
            return ResponseEntity.notFound().build();
        }
    }



    @GetMapping("/checkTrip/{tripId}/{uniqueKey}")
    public ResponseEntity<String> checkTrip(@PathVariable Integer tripId, @PathVariable String uniqueKey){
        String result = tripService.checkTrip(tripId, uniqueKey);
        return ResponseEntity.ok(result);
    }


}
