package com.Travo.Travobackend.service;

import com.Travo.Travobackend.enumeration.TripState;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.repository.TripRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class TripService {

    private final TripRepo tripRepo;

    public Trip createTrip(TripDTO tripDTO){

        TripState tripState;

        if(Objects.equals(tripDTO.getState(), "PUBLIC")){
            tripState = TripState.PUBLIC;
        }else{
            tripState = TripState.PRIVATE;
        }

        Trip trip = Trip.builder()
                .Trip_name(tripDTO.getTrip_name())
                .Trip_creatorID(tripDTO.getTrip_creatorID())
                .State(tripState)
                .build();

        return tripRepo.save(trip);
    }

    public Trip getTripById(Long tripID) {
        return tripRepo.findById(tripID).orElse(null);
    }

    public Trip updateTrip(Long tripID, TripDTO tripDTO) {
        Trip existingTrip = tripRepo.findById(tripID).orElse(null);

        if(existingTrip != null){
            existingTrip.setTrip_name(tripDTO.getTrip_name());
            existingTrip.setDescription(tripDTO.getDescription());

            return tripRepo.save(existingTrip);

        }
        return null;
    }
}
