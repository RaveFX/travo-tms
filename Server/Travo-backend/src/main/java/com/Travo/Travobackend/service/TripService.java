package com.Travo.Travobackend.service;



import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.repository.JDBCDao.TripJDBCDao;
import com.Travo.Travobackend.repository.TripMemberRepository;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.model.dto.*;
import com.Travo.Travobackend.model.entity.*;
import com.Travo.Travobackend.repository.*;
import com.Travo.Travobackend.repository.JDBCDao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
@Service
public class TripService {
    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private TripMemberRepository tripMemberRepository;

    @Autowired
    private TripMemberJDBCDao tripMemberJDBCDao;

    @Autowired
    private TripJDBCDao tripJDBCDao;

    @Autowired
    private HotelJDBCDao hotelJDBCDao;

    @Autowired
    private ActivityJDBCDao activityJDBCDao;
    @Autowired
    private TripAttractionRepository tripAttractionRepository;
    @Autowired
    private TripHotelRepository tripHotelRepository;
    @Autowired
    private TripActivityRepository tripActivityRepository;
    @Autowired
    private HotelAgentRepository hotelAgentRepository;
    @Autowired
    private ActivityAgentRepository activityAgentRepository;
    @Autowired
    private AttractionJDBCDao attractionJDBCDao;
    @Autowired
    private TripScheduleRepository tripScheduleRepository;
    @Autowired
    private ScheduleJDBCDao scheduleJDBCDao;




    public List<TripDTO> tripList(Integer userID){
        //System.out.println(userID);
        return tripJDBCDao.getTripList(userID);
    }

    public TripDTO tripDetails(Integer tripID){
        return tripJDBCDao.getTripDetails(tripID);
    }

    public List<LocalDate> getDatesBetweenForTrip(Integer tripId) {
        Trip trip = tripRepository.findById(tripId).orElse(null);
        List<LocalDate> dates = new ArrayList<>();
        LocalDate currentDate = trip.getStart_date();

        while (!currentDate.isAfter(trip.getEnd_date())) {
            dates.add(currentDate);
            currentDate = currentDate.plusDays(1); // Move to the next day
        }
        return dates;
    }


//    public List<TripDTO> tripList(int userId) {
//        System.out.println(userId);
//        String SQL = "SELECT t.trip_id, t.trip_admin, t.trip_name FROM trip_members tm \n" +
//                "                INNER JOIN trip t ON tm.trip_id = t.trip_id \n" +
//                "                WHERE tm.user_id = :userId";
//
//        HashMap<String, Object> params = new HashMap<>();
//        params.put("userId", userId);
//        return tripJDBCDao.getAllTrips(SQL, params);
//    }


    public String checkTrip(Integer tripId, String uniqueKey) {
        String exists = tripRepository.existsByTripIdAndUniqueKey(tripId, uniqueKey);
        System.out.println(exists);

        return exists;
    }


    public List<TripMemberDTO> memberList(Integer tripId){return tripMemberJDBCDao.getMemberList(tripId);}



    public List<HotelDTO> hotelList(){return hotelJDBCDao.getHotelList();}

    public List<ActivityDTO> activityList(){return activityJDBCDao.getActivityList();}

    public String addAttraction(AttractionDTO attractionDTO){
        try {
            TripAttraction tripAttraction = new TripAttraction();
            tripAttraction.setPlace_id(attractionDTO.getPlace_id());
            tripAttraction.setAddress(attractionDTO.getAddress());
            tripAttraction.setName(attractionDTO.getName());
            tripAttraction.setImg_url(attractionDTO.getImg_url());
            tripAttraction.setDay(attractionDTO.getDay());

            Optional<Trip> tripOptional = tripRepository.findById(attractionDTO.getTrip_id());
            Trip trip = tripOptional.get();
            tripAttraction.setTrip(trip);
            tripAttractionRepository.save(tripAttraction);

            return("Attraction added successfully!");
        } catch (Exception e) {
            return("Error adding attraction: " + e.getMessage());
        }

    }

    public String addHotel(HotelDTO hotelDTO){
        try {
            TripHotel tripHotel = new TripHotel();
            tripHotel.setDay(hotelDTO.getDay());
            Optional<HotelAgent> hotelOptional = hotelAgentRepository.findById(hotelDTO.getHotel_id());
            HotelAgent hotelAgent = hotelOptional.get();
            tripHotel.setHotelAgent(hotelAgent);

            Optional<Trip> tripOptional = tripRepository.findById(hotelDTO.getTrip_id());
            Trip trip = tripOptional.get();
            tripHotel.setTrip(trip);
            tripHotelRepository.save(tripHotel);

            return("Hotel added successfully!");
        } catch (Exception e) {
            return("Error adding hotel: " + e.getMessage());
        }

    }

    public String addActivity(ActivityDTO activityDTO){
        try {
            TripActivity tripActivity = new TripActivity();
            tripActivity.setDay(activityDTO.getDay());
            Optional<ActivityAgent> activityOptional = activityAgentRepository.findById(activityDTO.getAgent_id());
            ActivityAgent activityAgent = activityOptional.get();
            tripActivity.setActivityAgent(activityAgent);

            Optional<Trip> tripOptional = tripRepository.findById(activityDTO.getTrip_id());
            Trip trip = tripOptional.get();
            tripActivity.setTrip(trip);
            tripActivityRepository.save(tripActivity);

            return("Activity added successfully!");
        } catch (Exception e) {
            return("Error adding activity: " + e.getMessage());
        }

    }

    public List<HotelDTO> selectedHotelList(Integer tripID, Integer day){
        return hotelJDBCDao.getSelectedHotelList(tripID, day);
    }

    public List<ActivityDTO> selectedActivityList(Integer tripID, Integer day){
        return activityJDBCDao.getSelectedActivityList(tripID, day);
    }
    public List<AttractionDTO> selectedAttractionList(Integer tripID, Integer day){
        return attractionJDBCDao.getSelectedAttractionList(tripID, day);
    }
    //remove hotel from selected list
    public void removeHotelById(Integer id) {
        tripHotelRepository.deleteById(id);
    }
    public void removeActivityById(Integer id) {
        tripActivityRepository.deleteById(id);
    }
    public void removeAttractionById(Integer id) {
        tripAttractionRepository.deleteById(id);
    }

    public String addToSchedule(ScheduleDTO scheduleDTO){
        try {
            TripSchedule tripSchedule = new TripSchedule();
            tripSchedule.setType(scheduleDTO.getType());
            tripSchedule.setType_id(scheduleDTO.getType_id());
            tripSchedule.setLocation_name(scheduleDTO.getLocation_name());
            tripSchedule.setStart_time(scheduleDTO.getStart_time());
            tripSchedule.setEnd_time(scheduleDTO.getEnd_time());
            tripSchedule.setDate(scheduleDTO.getDate());
            tripSchedule.setDay(scheduleDTO.getDay());

            Optional<Trip> tripOptional = tripRepository.findById(scheduleDTO.getTrip_id());
            Trip trip = tripOptional.get();
            tripSchedule.setTrip(trip);
            tripScheduleRepository.save(tripSchedule);

            return("Schedule added successfully!");
        } catch (Exception e) {
            return("Error adding schedule: " + e.getMessage());
        }

    }

    public List<ScheduleDTO> scheduleByDay(Integer tripID, Integer day){
        return scheduleJDBCDao.getScheduleByDay(tripID, day);
    }

    public void removeScheduleById(Integer id) {
        tripScheduleRepository.deleteById(id);
    }

    //for the schedule dropdown
    public List<HotelDTO> selectedScheduleHotelList(Integer tripID, Integer day){
        return hotelJDBCDao.getSchedule_SelectedHotelList(tripID, day);
    }

    public List<ActivityDTO> selectedScheduleActivityList(Integer tripID, Integer day){
        return activityJDBCDao.getSchedule_SelectedActivityList(tripID, day);
    }
    public List<AttractionDTO> selectedScheduleAttractionList(Integer tripID, Integer day){
        return attractionJDBCDao.getSchedule_SelectedAttractionList(tripID, day);
    }

    public String updateSchedule(ScheduleDTO scheduleDTO){
        Optional<TripSchedule> optionalSchedule = tripScheduleRepository.findById(scheduleDTO.getSchedule_id());
        if (optionalSchedule.isPresent()) {
            TripSchedule tripSchedule = optionalSchedule.get();
            tripSchedule.setStart_time(scheduleDTO.getStart_time());
            tripSchedule.setEnd_time(scheduleDTO.getEnd_time());

            tripScheduleRepository.save(tripSchedule);

            return("Schedule added successfully!");
        }else {
            return ("Schedule not found");
        }

    }
}
