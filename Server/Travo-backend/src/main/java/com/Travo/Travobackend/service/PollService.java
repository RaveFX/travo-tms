package com.Travo.Travobackend.service;


import com.Travo.Travobackend.model.dto.*;
import com.Travo.Travobackend.model.entity.HotelPoll;
import com.Travo.Travobackend.model.entity.PollUser;
import com.Travo.Travobackend.repository.HotelPollRepository;
import com.Travo.Travobackend.repository.JDBCDao.HotelPollJDBCDao;
import com.Travo.Travobackend.repository.PollUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    private PollUserDTO pollUserDTO;

    @Autowired
    private HotelPollRepository hotelPollRepository;
    @Autowired
    private PollUserRepository pollUserRepository;



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

    public String deletePollUserById(Integer hotelpollId) {
        try {
            System.out.println(hotelpollId);
            pollUserRepository.deleteByHotelpollId(hotelpollId);
            return "PollUser deleted successfully!";
        } catch (Exception e) {
            return "Error deleting PollUser: " + e.getMessage();
        }
    }



}
