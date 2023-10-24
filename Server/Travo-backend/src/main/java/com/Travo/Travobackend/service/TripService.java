package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.model.other.Response;
import com.Travo.Travobackend.repository.JDBCDao.TripJDBCDao;
import com.Travo.Travobackend.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class TripService {
    @Autowired
    private TripJDBCDao tripJDBCDao;


    public List<TripDTO> tripList(int userId) {
        System.out.println(userId);
        String SQL = "SELECT t.trip_id, t.trip_admin, t.trip_name FROM trip_members tm \n" +
                "                INNER JOIN trip t ON tm.trip_id = t.trip_id \n" +
                "                WHERE tm.user_id = :userId";

        HashMap<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        return tripJDBCDao.getAllTrips(SQL, params);
    }

    @Autowired
    private TripRepository tripRepository; // Your trip repository

public String checkTrip(Integer tripId, String uniqueKey) {
    System.out.println("tttt");
    String exists = tripRepository.existsByTripIdAndUniqueKey(tripId, uniqueKey);
    System.out.println("tt");
    System.out.println(exists);

    return exists;
}

}
