package com.Travo.Travobackend.service;


import com.Travo.Travobackend.model.dto.*;
import com.Travo.Travobackend.model.entity.*;
import com.Travo.Travobackend.repository.*;
import com.Travo.Travobackend.repository.JDBCDao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.AccessType;
import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PollService {

    @Autowired
    private HotelPollJDBCDao hotelPollJDBCDao;

    @Autowired
    private AttractionJDBCDao attractionJDBCDao;
    @Autowired
    private PollUserDTO pollUserDTO;

    @Autowired
    private HotelPollRepository hotelPollRepository;

    @Autowired
    private TripAttractionRepository tripAttractionRepository;
    @Autowired
    private PollUserRepository pollUserRepository;

    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private AttractionPollRepository attractionPollRepository;

    @Autowired
    private AttractionPollJDBCDao attractionPollJDBCDao;

    @Autowired
    private HotelAgentRepository hotelAgentRepository;

    @Autowired
    private HotelPolluserRepository hotelPolluserRepository;

    @Autowired
    private ActivityAgentRepository activityAgentRepository;
    @Autowired
    private ActivityPollRepository activityPollRepository;
    @Autowired
    private ActivityPollJDBao activityPollJDBao;


    public String addAttraction(AttractionPollDTO attractionPollDTO){
        try {
            AttractionPoll attractionPoll = new AttractionPoll();
            attractionPoll.setPlace_id(attractionPollDTO.getPlace_id());
            attractionPoll.setAddress(attractionPollDTO.getAddress());
            attractionPoll.setTotal_votes(0);
            attractionPoll.setName(attractionPollDTO.getName());
            attractionPoll.setImg_url(attractionPollDTO.getImg_url());
            attractionPoll.setDay(attractionPollDTO.getDay());

            Optional<Trip> tripOptional = tripRepository.findById(attractionPollDTO.getTrip_id());
            if (tripOptional.isPresent()) {
                Trip trip = tripOptional.get();
                attractionPoll.setTrip(trip);
                attractionPollRepository.save(attractionPoll); // Use the instance of the repository to save
                return "Attraction added successfully!";
            } else {
                return "Trip not found for the given ID!";
            }
        } catch (Exception e) {
            return "Error adding attraction: " + e.getMessage();
        }
    }

    public String addHoteltoPoll(HotelPollDTO hotelPollDTO){
        try {
            HotelPoll hotelPoll = new HotelPoll();
            hotelPoll.setDay(hotelPollDTO.getDay());
            hotelPoll.setTotal_votes(0);
            Optional<HotelAgent> hotelOptional = hotelAgentRepository.findById(hotelPollDTO.getHotel_id());
            HotelAgent hotelAgent = hotelOptional.get();
            hotelPoll.setHotelAgent(hotelAgent);

            Optional<Trip> tripOptional = tripRepository.findById(hotelPollDTO.getTrip_id());
            Trip trip = tripOptional.get();
            hotelPoll.setTrip(trip);
            hotelPollRepository.save(hotelPoll);

            return("Hotel added successfully!");
        } catch (Exception e) {
            return("Error adding hotel: " + e.getMessage());
        }

    }

    public String addActivity(ActivityPollDTO activityPollDTO){
        try {
            ActivityPoll activityPoll = new ActivityPoll();
            activityPoll.setDay(activityPollDTO.getDay());
            activityPoll.setTotal_votes(0);
            Optional<ActivityAgent> activityOptional = activityAgentRepository.findById(activityPollDTO.getAgent_id());
            ActivityAgent activityAgent = activityOptional.get();
            activityPoll.setActivityAgent(activityAgent);

            Optional<Trip> tripOptional = tripRepository.findById(activityPollDTO.getTrip_id());
            Trip trip = tripOptional.get();
            activityPoll.setTrip(trip);
            activityPollRepository.save(activityPoll);

            return("Activity added successfully!");
        } catch (Exception e) {
            return("Error adding activity: " + e.getMessage());
        }

    }




//    public List<ActivityPollDTO> selectedActivityList(Integer tripID, Integer day,Integer userId){
//        return activityPollJDBao.getSelectedActivityPollList(tripID, day, userId);
//    }

    public List<AttractionPollDTO> selectedAttractionList(Integer tripID, Integer day, Integer userId){
        return attractionPollJDBCDao.getSelectedAttractionPollList(tripID, day, userId);
    }
    public List<HotelPollDTO> selectedHotelList(Integer tripID, Integer day, Integer userId){
        return hotelPollJDBCDao.getSelectedHotelPollList(tripID, day, userId);
    }




    public List<AttractionPollDTO> selectedAttractionVotedList(Integer tripID, Integer day, Integer userId){
        return attractionPollJDBCDao.getSelectedAttractionVotedPollList(tripID, day, userId);
    }
    public List<HotelPollDTO> selectedHotelVotedList(Integer tripID, Integer day, Integer userId){
        return hotelPollJDBCDao.getSelectedHotelVotedPollList(tripID, day, userId);
    }


    public void updateAttractionPoll(Integer tripId, Integer AttractionId, Boolean isChecked, Integer day) {
        attractionPollJDBCDao.updateAttractionPoll(tripId,AttractionId,isChecked,day);
    }
    public void updateHotelPoll(Integer tripId, Integer AttractionId, Boolean isChecked, Integer day) {
        hotelPollJDBCDao.updateHotelPoll(tripId,AttractionId,isChecked,day);
    }


    public String removePollUser(Integer userId, Integer attractionPollId) {
     try {
        // Logic to remove a poll user
        pollUserRepository.deleteByUserIdAndAttractionPollId(userId, attractionPollId);
        return "User removed from the poll successfully!";
     } catch (Exception e) {
        return "Error removing user from the poll: " + e.getMessage();
     }
    }

    public String removePollUserHotel(Integer userId, Integer hotelPollId) {
        try {
            System.out.println("uu");
            // Logic to remove a poll user
            hotelPolluserRepository.deleteByUserIdAndAttractionPollId(userId, hotelPollId);
            return "User removed from the poll successfully!";
        } catch (Exception e) {
            return "Error removing user from the poll: " + e.getMessage();
        }
    }

    public String attractionDeleteFromPoll(Integer attractionPollId) {
        try {
            // Logic to remove a poll user
            attractionPollRepository.deleteByAttractionPollId(attractionPollId);
            return "User removed from the poll successfully!";
        } catch (Exception e) {
            return "Error removing user from the poll: " + e.getMessage();
        }
    }






//    public String addActivity(ActivityPollDTO activityPollDTO){
//        try {
//            ActivityPollDTO activityPollDTO = new ActivityPollDTO();
//            activityPollDTO.setPlace_id(attractionPollDTO.getPlace_id());
//            activityPollDTO.setAddress(attractionPollDTO.getAddress());
//            activityPollDTO.setTotal_votes(0);
//            activityPollDTO.setName(attractionPollDTO.getName());
//            activityPollDTO.setImg_url(attractionPollDTO.getImg_url());
//            activityPollDTO.setDay(attractionPollDTO.getDay());
//
//            Optional<Trip> tripOptional = tripRepository.findById(attractionPollDTO.getTrip_id());
//            if (tripOptional.isPresent()) {
//                Trip trip = tripOptional.get();
//                attractionPoll.setTrip(trip);
//                attractionPollRepository.save(attractionPoll); // Use the instance of the repository to save
//                return "Attraction added successfully!";
//            } else {
//                return "Trip not found for the given ID!";
//            }
//        } catch (Exception e) {
//            return "Error adding attraction: " + e.getMessage();
//        }
//    }









    public void updateHotelPoll(Integer tripId, Integer hotelId, Boolean isChecked) {
        hotelPollJDBCDao.updateHotelPoll(tripId,hotelId,isChecked);
    }


    public List<HotelPollDTO> hotelList(int tripId) {
        System.out.println(tripId);

        String SQL = "SELECT h.id, h.hotel_id, h.total_votes,hp.acc_name FROM hotel_poll h " +
                "INNER JOIN hotel_agent hp ON hp.hotel_id = h.hotel_id " +
                "WHERE h.trip_id = :tripId"; // Use the named parameter :tripId

        Map<String, Object> params = new HashMap<>();
        params.put("tripId", tripId); // Use the correct key "tripId"

        return hotelPollJDBCDao.getAllPollHotels(SQL, params);
    }


    public String addUserPoll(PollUserDTO pollUserDTO) {
        try {
            PollUser pollUser = new PollUser();
            pollUser.setUser_id(pollUserDTO.getUser_id());

            HotelPoll hotelPoll = pollUserDTO.getHotelPoll(); // Retrieve HotelPoll from DTO
            if (hotelPoll != null) {
                Optional<HotelPoll> hotelPollOptional = hotelPollRepository.findById(hotelPoll.getId());
                if (hotelPollOptional.isPresent()) {
                    pollUser.setHotelPoll(hotelPollOptional.get());
                    pollUserRepository.save(pollUser);
                    return "Trip member added successfully!";
                } else {
                    return "HotelPoll not found!";
                }
            } else {
                return "HotelPoll is null in the DTO!";
            }
        } catch (Exception e) {
            return "Error adding user: " + e.getMessage();
        }
    }



    public String addUserPollAttraction(PollUserDTO pollUserDTO) {
        try {
            PollUser pollUser = new PollUser();
            pollUser.setUser_id(pollUserDTO.getUser_id());


            AttractionPoll attractionPoll = pollUserDTO.getAttractionPoll(); // Retrieve HotelPoll from DTO
            if (attractionPoll != null) {
                Optional<AttractionPoll> attractionPollOptional = attractionPollRepository.findById(attractionPoll.getId());
                if (attractionPollOptional.isPresent()) {
                    pollUser.setAttractionPoll(attractionPollOptional.get());
                    pollUserRepository.save(pollUser);
                    return "Trip member added successfully!";
                } else {
                    return "HotelPoll not found!";
                }
            } else {
                return "HotelPoll is null in the DTO!";
            }
        } catch (Exception e) {
            return "Error adding user: " + e.getMessage();
        }
    }

    public String addUserPollHotel(HotelPolluserDTO hotelPolluserDTO) {
        try {


            HotelPolluser hotelPolluser = new HotelPolluser();
            hotelPolluser.setUser_id(hotelPolluserDTO.getUser_id());
            HotelPoll hotelPoll = hotelPolluserDTO.getHotelPoll(); // Retrieve HotelPoll from DTO
            if (hotelPoll != null) {
                Optional<HotelPoll> hotelPollOptional = hotelPollRepository.findById(hotelPoll.getId());
                if (hotelPollOptional.isPresent()) {
                    hotelPolluser.setHotelPoll(hotelPollOptional.get());
                    hotelPolluserRepository.save(hotelPolluser);
                    return "Trip member added successfully!";
                } else {
                    return "HotelPoll not found!";
                }
            } else {
                return "HotelPoll is null in the DTO!";
            }
        } catch (Exception e) {
            return "Error adding user: " + e.getMessage();
        }
    }


    public String addAttractionToTrip(AttractionPollDTO attractionPollDTO){
        try {
            TripAttraction tripAttraction = new TripAttraction();
            tripAttraction.setPlace_id(attractionPollDTO.getPlace_id());
            tripAttraction.setAddress(attractionPollDTO.getAddress());
            tripAttraction.setName(attractionPollDTO.getName());
            tripAttraction.setImg_url(attractionPollDTO.getImg_url());
            tripAttraction.setDay(attractionPollDTO.getDay());

            Optional<Trip> tripOptional = tripRepository.findById(attractionPollDTO.getTrip_id());
            Trip trip = tripOptional.get();
            tripAttraction.setTrip(trip);
            tripAttractionRepository.save(tripAttraction);

            return("Attraction added successfully!");
        } catch (Exception e) {
            return("Error adding attraction: " + e.getMessage());
        }

    }




}
