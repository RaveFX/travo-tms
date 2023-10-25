package com.Travo.Travobackend.service;

import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.HotelPollDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.dto.UserInformationDTO;
import com.Travo.Travobackend.repository.JDBCDao.HotelPollJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.UserJDBCDao;
import com.Travo.Travobackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PollService {


    @Autowired
    private HotelPollJDBCDao hotelPollJDBCDao;

    public void updateHotelPoll(Integer tripId, Integer hotelId, Boolean isChecked) {
        hotelPollJDBCDao.updateHotelPoll(tripId,hotelId,isChecked);
    }

    public List<HotelPollDTO> hotelList(int tripId) {
        System.out.println(tripId);

        String SQL = "SELECT h.hotel_id, h.total_votes,hp.acc_name FROM hotel_poll h " +
                "INNER JOIN hotel_agent hp ON hp.hotel_id = h.hotel_id " +
                "WHERE h.trip_id = :tripId"; // Use the named parameter :tripId

        Map<String, Object> params = new HashMap<>();
        params.put("tripId", tripId); // Use the correct key "tripId"

        return hotelPollJDBCDao.getAllPollHotels(SQL, params);
    }


}
