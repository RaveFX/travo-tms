package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.model.other.Response;
import com.Travo.Travobackend.repository.JDBCDao.TripJDBCDao;
import com.Travo.Travobackend.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TripService {
    @Autowired
    private TripJDBCDao tripJDBCDao;
    public List<TripDTO> tripList(){
        return tripJDBCDao.getAllTrips();
    }

    @Autowired
    private TripRepository tripRepository; // Your trip repository

//    public boolean uniqueKeyExistsForTrip(String tripId, String uniqueKey) {
//        return tripRepository.existsByTripIdAndUniqueKey(tripId, uniqueKey);
//    }
public String checkTrip(Integer tripId, String uniqueKey) {
    System.out.println("tttt");
    String exists = tripRepository.existsByTripIdAndUniqueKey(tripId, uniqueKey);
    System.out.println("tt");
    System.out.println(exists);

    return exists;
}

}
