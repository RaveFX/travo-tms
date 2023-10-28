package com.Travo.Travobackend.service;



import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.repository.JDBCDao.TripJDBCDao;
import com.Travo.Travobackend.repository.TripMemberRepository;
import com.Travo.Travobackend.repository.TripRepository;
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
    private TripMemberRepository tripMemberRepositoryRepositoryRepository;

    @Autowired
    private TripJDBCDao tripJDBCDao;



    public List<TripDTO> tripList(Integer userID){
        System.out.println(userID);
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



}
