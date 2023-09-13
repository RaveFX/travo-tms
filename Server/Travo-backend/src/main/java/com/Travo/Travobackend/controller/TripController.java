package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.GroupMessages;
import com.Travo.Travobackend.repository.GroupMessagesRepository;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.model.entity.Trip;
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


    @Autowired
    private TripRepository tripRepository;
    private final GroupMessagesRepository groupMessagesRepository;

    @Autowired
    public TripController(TripRepository tripRepository, GroupMessagesRepository groupMessageRepository) {
        this.tripRepository = tripRepository;
        this.groupMessagesRepository = groupMessageRepository;
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

    @GetMapping("/trip-information/{tripId}")
    public ResponseEntity<Trip> getTripInfo(@PathVariable Integer tripId) {
        System.out.println("works");
        // Retrieve the trip information from your repository or service
        Trip trip = tripRepository.findById(tripId).orElse(null);

        if (trip != null) {
            // Return a 200 OK response with the trip information if found
            return ResponseEntity.ok(trip);
        } else {
            // Return a 404 Not Found response if the trip is not found
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/{tripId}/group-messages")
    public ResponseEntity<GroupMessages> createGroupMessage(
            @PathVariable Integer tripId,
            @RequestBody GroupMessages groupMessage) {
        System.out.println("rrrrrr");
        Optional<Trip> optionalTrip = tripRepository.findById(tripId);
        if (optionalTrip.isPresent()) {
            Trip trip = optionalTrip.get();
            groupMessage.setTrip(trip); // Associate the group message with the trip
            GroupMessages savedMessage = groupMessagesRepository.save(groupMessage);
            return ResponseEntity.ok(savedMessage);
        } else {
            // Handle the case where the trip with the given ID does not exist
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{tripId}/group-messages")
    public ResponseEntity<List<GroupMessages>> getGroupMessagesForTrip(@PathVariable Integer tripId) {
        Optional<Trip> optionalTrip = tripRepository.findById(tripId);
        if (optionalTrip.isPresent()) {
            Trip trip = optionalTrip.get();

            // Retrieve group messages associated with the trip using groupMessagesRepository
            List<GroupMessages> groupMessages = groupMessagesRepository.findByTrip(trip);

            return ResponseEntity.ok(groupMessages);
        } else {
            // Handle the case where the trip with the given ID does not exist
            return ResponseEntity.notFound().build();
        }
    }
}

