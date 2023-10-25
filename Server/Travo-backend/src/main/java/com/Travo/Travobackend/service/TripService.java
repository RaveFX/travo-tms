package com.Travo.Travobackend.service;



 import com.Travo.Travobackend.model.dto.HotelReservationDTO;
 import com.Travo.Travobackend.model.dto.TripDTO;
 import com.Travo.Travobackend.model.entity.Trip;
 import com.Travo.Travobackend.repository.JDBCDao.TripJDBCDao;
 import com.Travo.Travobackend.repository.TripRepository;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Service;

 import java.time.LocalDate;
 import java.util.ArrayList;
 import java.util.List;
 @Service
 public class TripService {
     @Autowired
     private TripRepository tripRepository;

     @Autowired
     private TripJDBCDao tripJDBCDao;

     public List<TripDTO> tripList(Integer userID) {
         return tripJDBCDao.getTripList(userID);
     }

     public TripDTO tripDetails(Integer tripID) {
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
 }

//import com.Travo.Travobackend.enumeration.TripState;
//import com.Travo.Travobackend.model.dto.TripDTO;
//import com.Travo.Travobackend.model.entity.Trip;
//import com.Travo.Travobackend.repository.TripRepo;
//import com.Travo.Travobackend.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
////import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Objects;

//@Service
//@RequiredArgsConstructor
//public class TripService {
//
//    private final TripRepo tripRepo;
//    private final UserRepository userRepo;
//
//    public Trip createTrip(TripDTO tripDTO){
//
//        TripState tripState;
//
//        if(Objects.equals(tripDTO.getState(), "PUBLIC")){
//            tripState = TripState.PUBLIC;
//        }else{
//            tripState = TripState.PRIVATE;
//        }
//
//        Trip trip = Trip.builder()
//                .trip_name(tripDTO.getTrip_name())
//                .Trip_creatorID(tripDTO.getTrip_creatorID())
//                .State(tripState)
//                .build();
//
//        return tripRepo.save(trip);
//    }
//
//
//
//    public Trip getTripById(Long tripID) {
//        return tripRepo.findById(tripID).orElse(null);
//    }
//
//    public Trip updateTrip(Long tripID, TripDTO tripDTO) {
//        Trip existingTrip = tripRepo.findById(tripID).orElse(null);
//
//        if(existingTrip != null){
//
//            if(!Objects.equals(tripDTO.getTrip_name(), null)) {
//                System.out.println("Name");
//                existingTrip.setTrip_name(tripDTO.getTrip_name());
//            }
//            if(!Objects.equals(tripDTO.getDescription(), null)) {
//                System.out.println("Desc");
//                existingTrip.setDescription(tripDTO.getDescription());
//            }
//
//            return tripRepo.save(existingTrip);
//
//        }
//        return null;
//    }
//
//    public Trip updateDate(Long tripID, TripDTO tripDTO) {
//        Trip existingTrip = tripRepo.findById(tripID).orElse(null);
//
//        if(existingTrip != null){
//
//            existingTrip.setStart_date(tripDTO.getStart_date());
//            existingTrip.setEnd_date(tripDTO.getEnd_date());
//
//            return tripRepo.save(existingTrip);
//
//        }
//
//        return null;
//    }
//
//    public List<Trip> getAllTrips() {
//        return tripRepo.findAll();
//    }
//
//    public String getCreatorName(Long id) {
//        return userRepo.getEmailById(id);
//    }
//
//         public List<LocalDate> getDatesBetweenForTrip(Integer tripId) {
//         Trip trip = tripRepository.findById(tripId).orElse(null);
//         List<LocalDate> dates = new ArrayList<>();
//         LocalDate currentDate = trip.getStart_date();
//
//         while (!currentDate.isAfter(trip.getEnd_date())) {
//             dates.add(currentDate);
//             currentDate = currentDate.plusDays(1); // Move to the next day
//         }
//         return dates;
//}
