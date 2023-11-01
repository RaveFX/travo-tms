package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.repository.JDBCDao.TripJDBCDao;
import com.Travo.Travobackend.repository.TripMemberRepository;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.enumeration.TripRole;
import com.Travo.Travobackend.enumeration.TripState;
import com.Travo.Travobackend.model.dto.*;
import com.Travo.Travobackend.model.entity.*;
import com.Travo.Travobackend.repository.*;
import com.Travo.Travobackend.repository.JDBCDao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.List;

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

    @Autowired
    private UserRepository userRepository;

    public List<TripDTO> tripList(Integer userID) {
        return tripJDBCDao.getTripList(userID);
    }

    public TripDTO tripDetails(Integer tripID) {
        return tripJDBCDao.getTripDetails(tripID);
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

    public Integer createTrip(TripDTO tripDTO) {

        var trip = Trip.builder()
                .trip_name(tripDTO.getTrip_name())
                .start_date(tripDTO.getStart_date())
                .end_date(tripDTO.getEnd_date())
                .build();

        Optional<User> userOptional = userRepository.findById(tripDTO.getAdmin_id());
        User user = userOptional.get();
        trip.setUser(user);
        Trip newTrip = tripRepository.save(trip);

        String uniqueToken = generateRandomToken(20);
        String uniqueLink = newTrip.getTrip_id() + "" + uniqueToken;
        newTrip.setUniqueLink(uniqueLink);
        tripRepository.save(newTrip);

        Optional<Trip> trip1Optional = tripRepository.findById(newTrip.getTrip_id());
        Trip trip1 = trip1Optional.get();

        TripRole adminRole = TripRole.ADMIN;

        var tripMember = TripMember.builder()
                .tripRole(adminRole)
                .user(user)
                .trip(trip1)
                .build();
        tripMemberRepository.save(tripMember);

        return newTrip.getTrip_id();

    }

    public String updateTripRole(TripMemberDTO tripMemberDTO) {
        TripRole tripRole;
        if (Objects.equals(tripMemberDTO.getTripRole(), "EDITOR")) {
            tripRole = TripRole.EDITOR;
        } else {
            tripRole = TripRole.MEMBER;
        }

        Optional<User> userOptional = userRepository.findById(tripMemberDTO.getMember_id());
        User user = userOptional.get();

        Optional<Trip> tripOptional = tripRepository.findById(tripMemberDTO.getTrip_id());
        Trip trip = tripOptional.get();

        Optional<TripMember> tripMember = tripMemberRepository.findByUserAndTrip(user, trip);
        TripMember tripMember1 = tripMember.get();
        tripMember1.setTripRole(tripRole);
        tripMemberRepository.save(tripMember1);

        return ("successfully changed the role");

    }

    public String updateTrip(Integer tripID, TripDTO tripDTO) {
        Trip existingTrip = tripRepository.findById(tripID).orElse(null);

        if (existingTrip != null) {

            if (!Objects.equals(tripDTO.getTrip_name(), null)) {
                System.out.println("Name");
                existingTrip.setTrip_name(tripDTO.getTrip_name());
                tripRepository.save(existingTrip);
                return existingTrip.getTrip_name();

            }
            if (!Objects.equals(tripDTO.getDescription(), null)) {
                System.out.println("Desc");
                existingTrip.setDescription(tripDTO.getDescription());
                tripRepository.save(existingTrip);
                return existingTrip.getDescription();

            }

        }
        return null;
    }

    public String updateDate(Integer tripID, TripDTO tripDTO) {
        Trip existingTrip = tripRepository.findById(tripID).orElse(null);

        if (existingTrip != null) {

            existingTrip.setStart_date(tripDTO.getStart_date());
            existingTrip.setEnd_date(tripDTO.getEnd_date());

            tripRepository.save(existingTrip);

            return ("Date added successfully!");

        }

        return ("Date unsuccessfully!");
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

    public String checkTrip(Integer tripId, String uniqueKey) {
        String exists = tripRepository.existsByTripIdAndUniqueKey(tripId, uniqueKey);
        System.out.println(exists);

        return exists;
    }

    public List<HotelDTO> hotelList(Integer tripId, Integer day) {
        return hotelJDBCDao.getHotelList(tripId, day);
    }

    public List<ActivityDTO> activityList(Integer tripId, Integer day) {
        return activityJDBCDao.getActivityList(tripId, day);
    }

    public String addAttraction(AttractionDTO attractionDTO) {
        try {
            TripAttraction tripAttraction = new TripAttraction();
            tripAttraction.setPlace_id(attractionDTO.getPlace_id());
            tripAttraction.setAddress(attractionDTO.getAddress());
            tripAttraction.setName(attractionDTO.getName());
            tripAttraction.setImg_url(attractionDTO.getImg_url());
            tripAttraction.setDay(attractionDTO.getDay());
            tripAttraction.setLongitude(attractionDTO.getLongitude());
            tripAttraction.setLatitude(attractionDTO.getLatitude());

            Optional<Trip> tripOptional = tripRepository.findById(attractionDTO.getTrip_id());
            Trip trip = tripOptional.get();
            tripAttraction.setTrip(trip);
            tripAttractionRepository.save(tripAttraction);

            return ("Attraction added successfully!");
        } catch (Exception e) {
            return ("Error adding attraction: " + e.getMessage());
        }

    }

    public String addHotel(HotelDTO hotelDTO) {
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

            return ("Hotel added successfully!");
        } catch (Exception e) {
            return ("Error adding hotel: " + e.getMessage());
        }

    }

    public String addActivity(ActivityDTO activityDTO) {
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

            return ("Activity added successfully!");
        } catch (Exception e) {
            return ("Error adding activity: " + e.getMessage());
        }

    }

    public List<HotelDTO> selectedHotelList(Integer tripID, Integer day) {
        return hotelJDBCDao.getSelectedHotelList(tripID, day);
    }

    public List<ActivityDTO> selectedActivityList(Integer tripID, Integer day) {
        return activityJDBCDao.getSelectedActivityList(tripID, day);
    }

    public List<AttractionDTO> selectedAttractionList(Integer tripID, Integer day) {
        return attractionJDBCDao.getSelectedAttractionList(tripID, day);
    }

    // remove hotel from selected list
    public void removeHotelById(Integer id) {
        tripHotelRepository.deleteById(id);
    }

    public void removeActivityById(Integer id) {
        tripActivityRepository.deleteById(id);
    }

    public void removeAttractionById(Integer id) {
        tripAttractionRepository.deleteById(id);
    }

    public String addToSchedule(ScheduleDTO scheduleDTO) {
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

            return ("Schedule added successfully!");
        } catch (Exception e) {
            return ("Error adding schedule: " + e.getMessage());
        }

    }

    public List<ScheduleDTO> scheduleByDay(Integer tripID, Integer day) {
        return scheduleJDBCDao.getScheduleByDay(tripID, day);
    }

    public void removeScheduleById(Integer id) {
        tripScheduleRepository.deleteById(id);
    }

    // for the schedule dropdown
    public List<HotelDTO> selectedScheduleHotelList(Integer tripID, Integer day) {
        return hotelJDBCDao.getSchedule_SelectedHotelList(tripID, day);
    }

    public List<ActivityDTO> selectedScheduleActivityList(Integer tripID, Integer day) {
        return activityJDBCDao.getSchedule_SelectedActivityList(tripID, day);
    }

    public List<AttractionDTO> selectedScheduleAttractionList(Integer tripID, Integer day) {
        return attractionJDBCDao.getSchedule_SelectedAttractionList(tripID, day);
    }

    public String updateSchedule(ScheduleDTO scheduleDTO) {
        Optional<TripSchedule> optionalSchedule = tripScheduleRepository.findById(scheduleDTO.getSchedule_id());
        if (optionalSchedule.isPresent()) {
            TripSchedule tripSchedule = optionalSchedule.get();
            tripSchedule.setStart_time(scheduleDTO.getStart_time());
            tripSchedule.setEnd_time(scheduleDTO.getEnd_time());

            tripScheduleRepository.save(tripSchedule);

            return ("Schedule added successfully!");
        } else {
            return ("Schedule not found");
        }

    }

    public List<HotelDTO> selectedHotelListForMap(Integer tripID) {
        return hotelJDBCDao.getHotelListForMap(tripID);
    }

    public List<ActivityDTO> selectedActivityListForMap(Integer tripID) {
        return activityJDBCDao.getActivityListForMap(tripID);
    }

    public List<AttractionDTO> selectedAttractionListForMap(Integer tripID) {
        return attractionJDBCDao.getAttractionListForMap(tripID);
    }

    public List<GuideDTO> getGuideDetails() {
        return tripJDBCDao.getGuideDetails();
    }

    public boolean hasAdminOrEditorRole(Integer memberId, Integer tripId) {
        Optional<User> userOptional = userRepository.findById(memberId);
        User user = userOptional.get();

        Optional<Trip> tripOptional = tripRepository.findById(tripId);
        Trip trip = tripOptional.get();

        Optional<TripMember> tripMember = tripMemberRepository.findByUserAndTrip(user, trip);
        return tripMember
                .filter(member -> member.getTripRole() == TripRole.ADMIN || member.getTripRole() == TripRole.EDITOR)
                .isPresent();
    }

    public String updateTripNote(Integer tripID, TripDTO tripDTO) {
        Optional<Trip> optionalTrip = tripRepository.findById(tripDTO.getTrip_id());
        if (optionalTrip.isPresent()) {
            Trip trip = optionalTrip.get();
            trip.setNote(tripDTO.getNote());

            tripRepository.save(trip);

            return ("Note added successfully!");
        } else {
            return ("Trip not found");
        }

    }

    public List<TripMemberDTO> selectedTripMembers(Integer tripID) {
        return tripJDBCDao.getTripMemberList(tripID);
    }
}
