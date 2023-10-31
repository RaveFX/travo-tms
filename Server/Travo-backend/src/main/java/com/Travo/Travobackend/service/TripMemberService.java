package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.TripMemberDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.entity.TripMember;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.repository.TripMemberRepository;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Travo.Travobackend.enumeration.TripRole;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Travo.Travobackend.repository.TripMemberRepository;


@Service
public class TripMemberService {
    @Autowired
    private final TripMemberRepository tripMemberRepository;
    @Autowired
    private final TripRepository tripRepository;
    @Autowired
    private final UserRepository userRepository;

    public TripMemberService(TripMemberRepository tripMemberRepository, TripRepository tripRepository,
            UserRepository userRepository) {
        this.tripMemberRepository = tripMemberRepository;
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
    }

//    public String addTripMember(TripMemberDTO tripMemberDTO) {
//
//        try
//        {
//            boolean exists = tripMemberRepository.existsByUserIdAndTripId(tripMemberDTO.getUser_id(),
//                    tripMemberDTO.getTrip_id());
//            if (exists) {
//                return "Error: Record with the same User ID and Trip ID already exists!";
//            } else {
//                TripMember tripMember = new TripMember();
//                tripMember.setMember_fname(tripMemberDTO.getMember_fname());
//                tripMember.setImage(tripMemberDTO.getImage());
//                tripMember.setTripRole(TripRole.MEMBER);
////                tripMember.setTrip(tripMemberDTO.getTrip_id());
////                tripMember.setUser_id(tripMemberDTO.getUser_id());
//
//                Optional<Trip> tripOptional = tripRepository.findById(tripMemberDTO.getTrip_id());
//                Trip trip = tripOptional.get();
//                tripMember.setTrip(trip);
//
//                Optional<User> userOptional = userRepository.findById(tripMemberDTO.getUser_id());
//                User user = userOptional.get();
//                tripMember.setUser(user);
//
//                tripMemberRepository.save(tripMember);
//                return "Trip member added successfully!";
//            }
//        } catch (Exception e) {
//            return "Error adding trip member: " + e.getMessage();
//        }
//    }




    public String addTripMember(TripMemberDTO tripMemberDTO) {
        try {
            boolean exists = checkIfTripMemberExists(tripMemberDTO.getUser_id(), tripMemberDTO.getTrip_id());
            if (exists) {
                return "Error: Record with the same User ID and Trip ID already exists!";
            } else {
                TripMember tripMember = new TripMember();
                tripMember.setMember_fname(tripMemberDTO.getMember_fname());
                tripMember.setImage(tripMemberDTO.getImage());
                tripMember.setTripRole(TripRole.MEMBER);
//                tripMember.setTrip(tripMemberDTO.getTrip_id());
//                tripMember.setUser_id(tripMemberDTO.getUser_id());

                Optional<Trip> tripOptional = tripRepository.findById(tripMemberDTO.getTrip_id());
                Trip trip = tripOptional.get();
                tripMember.setTrip(trip);

                Optional<User> userOptional = userRepository.findById(tripMemberDTO.getUser_id());
                User user = userOptional.get();
                tripMember.setUser(user);

                tripMemberRepository.save(tripMember);
                return "Trip member added successfully!";
            }
        } catch (Exception e) {
            return "Error adding trip member: " + e.getMessage();
        }
    }

    @PersistenceContext
    private EntityManager entityManager;

    private boolean checkIfTripMemberExists(Integer userId, Integer tripId) {
        Query query = entityManager.createNativeQuery("SELECT COUNT(*) FROM trip_member WHERE user_id = :userId AND trip_id = :tripId");
        query.setParameter("userId", userId);
        query.setParameter("tripId", tripId);
        Long count = (Long) query.getSingleResult();
        return count > 0;
    }





    private TripMemberRepository tripMembersRepository;

    public long getRowCount() {
        return tripMemberRepository.count();
    }
}
