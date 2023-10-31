package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.*;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/trip")
@RequiredArgsConstructor
public class TripController {

    @Autowired
    private final TripService tripService;

    @PostMapping("/create-trip")
    public Integer createTrip(@RequestBody TripDTO tripDTO){
        return tripService.createTrip(tripDTO);
    }

    @PutMapping("updateTrip-name-description/{tripID}")
    public String updateTrip(
            @PathVariable Integer tripID,
            @RequestBody TripDTO tripDTO
    ){
        return tripService.updateTrip(tripID, tripDTO);
    }

    @PutMapping("update-member-role")
    public String updateTrip(
            @RequestBody TripMemberDTO tripMemberDTO
    ){
        return tripService.updateTripRole(tripMemberDTO);
    }

    @PutMapping("/dates/{tripID}")
    public String updateDate(
            @PathVariable Integer tripID,
            @RequestBody TripDTO tripDTO
    ){
        return tripService.updateDate(tripID, tripDTO);

    }




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

    @GetMapping("/hotelList/{tripId}/{day}")
    public List<HotelDTO> getHotelList(@PathVariable Integer tripId,@PathVariable Integer day){
        return tripService.hotelList(tripId,day);
    }

    @GetMapping("/activityList/{tripId}/{day}")
    public List<ActivityDTO> getActivityList(@PathVariable Integer tripId,@PathVariable Integer day){
        return tripService.activityList(tripId,day);
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

    //display on map
    @GetMapping("/selectedHotelListForMap/{tripID}")
    public List<HotelDTO> getSelectedHotelListForMap(@PathVariable Integer tripID){
        return tripService.selectedHotelListForMap(tripID);
    }
    @GetMapping("/selectedActivityListForMap/{tripID}")
    public List<ActivityDTO> getSelectedActivityListForMap(@PathVariable Integer tripID){
        return tripService.selectedActivityListForMap(tripID);
    }

    @GetMapping("/selectedAttractionListForMap/{tripID}")
    public List<AttractionDTO> getSelectedAttractionListForMap(@PathVariable Integer tripID){
        return tripService.selectedAttractionListForMap(tripID);
    }

    @GetMapping("/check-admin-or-editor-role/{userId}/{tripId}")
    public ResponseEntity<Boolean> checkAdminOrEditorRole(
            @PathVariable Integer userId,
            @PathVariable Integer tripId) {
        boolean hasAdminOrEditorRole = tripService.hasAdminOrEditorRole(userId, tripId);
        return ResponseEntity.ok(hasAdminOrEditorRole);
    }

    @PutMapping("/update-note/{tripID}")
    public String updateSchedule(@PathVariable Integer tripID,@RequestBody TripDTO tripDTO) {
        return tripService.updateTripNote(tripID,tripDTO);
    }

    @GetMapping("/trip-member-list/{tripID}")
    public List<TripMemberDTO> selectedTripMembers(@PathVariable Integer tripID){
        return tripService.selectedTripMembers(tripID);
    }


}
