package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.entity.GroupMessages;
import org.springframework.transaction.annotation.Transactional;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.TripMembers;
import com.Travo.Travobackend.repository.GroupMessagesRepository;
import com.Travo.Travobackend.repository.TripMembersRepository;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/api/v1/trips")
@RequiredArgsConstructor
public class TripController {
    private final TripService tripService; // Initialize this field in the constructor
    @Autowired
    private TripRepository tripRepository;
    private final GroupMessagesRepository groupMessagesRepository;
    private TripMembersRepository tripMembersRepository;

    @Autowired
    public TripController(TripService tripService, TripRepository tripRepository, GroupMessagesRepository groupMessagesRepository,TripMembersRepository tripMembersRepository) {
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
            String uniqueLink = "/trip/" + savedTrip.getTripId() + "/" + uniqueToken;
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


    @GetMapping("/triplist")
    public List<TripDTO> gettriplist() {
        return tripService.tripList();
    }

    @GetMapping("/trip-information/{tripId}")
    public ResponseEntity<Trip> getTripInfo(@PathVariable Integer tripId) {
        System.out.println("works");
        Trip trip = tripRepository.findById(tripId).orElse(null);

        if (trip != null) {
            // Return a 200 OK response with the trip information if found
            return ResponseEntity.ok(trip);
        } else {
            // Return a 404 Not Found response if the trip is not found
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/group-messages/{tripId}")
    public GroupMessages saveMessages(@RequestBody GroupMessages groupMessages) {
        System.out.println("member add");
        return groupMessagesRepository.save(groupMessages);
    }
    }





