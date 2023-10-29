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
import com.Travo.Travobackend.model.dto.*;
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

    @GetMapping("/memberlist/{tripId}")
    public List<TripMemberDTO> getMemberList(@PathVariable Integer tripId){
        return tripService.memberList(tripId);
    }















    @GetMapping("/hotelList")
    public List<HotelDTO> getHotelList(){
        return tripService.hotelList();
    }

    @GetMapping("/activityList")
    public List<ActivityDTO> getActivityList(){
        return tripService.activityList();
    }

    @PostMapping("/add-attraction")
    public String addAttractionToTrip(@RequestBody AttractionDTO attractionDTO) {
        return tripService.addAttraction(attractionDTO);
    }

    @PostMapping("/add-hotel")
    public String addHotelToTrip(@RequestBody HotelDTO hotelDTO) {
        return tripService.addHotel(hotelDTO);
    }
    @PostMapping("/add-activity")
    public String addActivityToTrip(@RequestBody ActivityDTO activityDTO) {
        return tripService.addActivity(activityDTO);
    }

    @GetMapping("/selectedHotelList/{tripID}/{day}")
    public List<HotelDTO> getSelectedHotelList(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.selectedHotelList(tripID, day);
    }
    @GetMapping("/selectedActivityList/{tripID}/{day}")
    public List<ActivityDTO> getSelectedActivityList(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.selectedActivityList(tripID, day);
    }

    @GetMapping("/selectedAttractionList/{tripID}/{day}")
    public List<AttractionDTO> getSelectedAttractionList(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.selectedAttractionList(tripID, day);
    }

    @DeleteMapping("/removeSelectedHotel/{row_id}")
    public ResponseEntity<String> deleteHotel(@PathVariable Integer row_id) {
        tripService.removeHotelById(row_id);
        return ResponseEntity.ok("Hotel deleted successfully");
    }
    @DeleteMapping("/removeSelectedActivity/{row_id}")
    public ResponseEntity<String> deleteActivity(@PathVariable Integer row_id) {
        tripService.removeActivityById(row_id);
        return ResponseEntity.ok("Activity deleted successfully");
    }
    @DeleteMapping("/removeSelectedAttraction/{row_id}")
    public ResponseEntity<String> deleteAttraction(@PathVariable Integer row_id) {
        tripService.removeAttractionById(row_id);
        return ResponseEntity.ok("Attraction deleted successfully");
    }

    @PostMapping("/add-schedule")
    public String addSchedule(@RequestBody ScheduleDTO scheduleDTO) {
        return tripService.addToSchedule(scheduleDTO);
    }

    @GetMapping("/scheduleByDay/{tripID}/{day}")
    public List<ScheduleDTO> getScheduleByDay(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.scheduleByDay(tripID, day);
    }

    @DeleteMapping("/removeScheduledActivity/{row_id}")
    public ResponseEntity<String> deleteScheduledActivity(@PathVariable Integer row_id) {
        tripService.removeScheduleById(row_id);
        return ResponseEntity.ok("Scheduled Activity deleted successfully");
    }

  //for the schedule dropdown
  @GetMapping("/selectedScheduleHotelList/{tripID}/{day}")
  public List<HotelDTO> getSelectedScheduleHotelList(@PathVariable Integer tripID, @PathVariable Integer day){
      return tripService.selectedScheduleHotelList(tripID, day);
  }
    @GetMapping("/selectedScheduleActivityList/{tripID}/{day}")
    public List<ActivityDTO> getSelectedScheduleActivityList(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.selectedScheduleActivityList(tripID, day);
    }

    @GetMapping("/selectedScheduleAttractionList/{tripID}/{day}")
    public List<AttractionDTO> getSelectedScheduleAttractionList(@PathVariable Integer tripID, @PathVariable Integer day){
        return tripService.selectedScheduleAttractionList(tripID, day);
    }

    //update start time and end time
    @PutMapping("/update-schedule-time")
    public String updateSchedule(@RequestBody ScheduleDTO scheduleDTO) {
        return tripService.updateSchedule(scheduleDTO);
    }

}
