package com.Travo.Travobackend.service;

import com.Travo.Travobackend.enumeration.TripState;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class TripService {

    private final TripRepository tripRepository;
    private final UserRepository userRepo;

    public Trip createTrip(TripDTO tripDTO){

        TripState tripState;

        if(Objects.equals(tripDTO.getState(), "PUBLIC")){
            tripState = TripState.PUBLIC;
        }else{
            tripState = TripState.PRIVATE;
        }

         var  trip = Trip.builder()
                .trip_name(tripDTO.getTrip_name())
                .Trip_creatorID(tripDTO.getTrip_creator_id())
                .State(tripState)
                .build();

        return tripRepository.save(trip);
    }



    public Trip getTripById(Integer tripID) {
        return tripRepository.findById(tripID).orElse(null);
    }

    public Trip updateTrip(Integer tripID, TripDTO tripDTO) {
        Trip existingTrip = tripRepository.findById(tripID).orElse(null);

        if(existingTrip != null){

            if(!Objects.equals(tripDTO.getTrip_name(), null)) {
                System.out.println("Name");
                existingTrip.setTrip_name(tripDTO.getTrip_name());
            }
            if(!Objects.equals(tripDTO.getDescription(), null)) {
                System.out.println("Desc");
                existingTrip.setDescription(tripDTO.getDescription());
            }

            return tripRepository.save(existingTrip);

        }
        return null;
    }

    public Trip updateDate(Integer tripID, TripDTO tripDTO) {
        Trip existingTrip = tripRepository.findById(tripID).orElse(null);

        if(existingTrip != null){

            existingTrip.setStart_date(tripDTO.getStart_date());
            existingTrip.setEnd_date(tripDTO.getEnd_date());

            return tripRepository.save(existingTrip);

        }

        return null;
    }

    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    public String getCreatorName(Integer id) {
        return userRepo.getEmailById(id);
    }
}
