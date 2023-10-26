package com.Travo.Travobackend.service;



import com.Travo.Travobackend.model.dto.*;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.entity.TripAttraction;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.repository.JDBCDao.ActivityJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.HotelJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.TripJDBCDao;
import com.Travo.Travobackend.repository.TripAttractionRepository;
import com.Travo.Travobackend.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TripService {
    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private TripJDBCDao tripJDBCDao;

    @Autowired
    private HotelJDBCDao hotelJDBCDao;

    @Autowired
    private ActivityJDBCDao activityJDBCDao;
    @Autowired
    private TripAttractionRepository tripAttractionRepository;


    public List<TripDTO> tripList(Integer userID){
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
    public List<HotelDTO> hotelList(){return hotelJDBCDao.getHotelList();}

    public List<ActivityDTO> activityList(){return activityJDBCDao.getActivityList();}

    public String addAttraction(AttractionDTO attractionDTO){
        try {
            TripAttraction tripAttraction = new TripAttraction();
            tripAttraction.setPlace_id(attractionDTO.getPlace_id());
            tripAttraction.setAddress(attractionDTO.getAddress());
            tripAttraction.setName(attractionDTO.getName());
            tripAttraction.setImg_url(attractionDTO.getImg_url());

            Optional<Trip> tripOptional = tripRepository.findById(attractionDTO.getTrip_id());
            Trip trip = tripOptional.get();
            tripAttraction.setTrip(trip);
            tripAttractionRepository.save(tripAttraction);

            return("Attraction added successfully!");
        } catch (Exception e) {
            return("Error adding attraction: " + e.getMessage());
        }

    }
}
