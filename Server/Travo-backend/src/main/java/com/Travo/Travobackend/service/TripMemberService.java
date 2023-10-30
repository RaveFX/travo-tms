package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.TripMemberDTO;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.entity.TripMember;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.repository.TripMemberRepository;
import com.Travo.Travobackend.repository.TripRepository;
import com.Travo.Travobackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Travo.Travobackend.enumeration.TripRole;

import java.util.Optional;

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

    public String addTripMember(TripMemberDTO tripMemberDTO) {

        try {
            boolean exists = tripMemberRepository.existsByUserIdAndTripId(tripMemberDTO.getUser_id(),
                    tripMemberDTO.getTrip_id());
            if (exists) {
                return "Error: Record with the same User ID and Trip ID already exists!";
            } else {
                TripMember tripMember = new TripMember();
                tripMember.setMember_fname(tripMemberDTO.getMember_fname());
                tripMember.setImage(tripMemberDTO.getImage());
                tripMember.setTripRole(TripRole.MEMBER);
                tripMember.setTrip_id(tripMemberDTO.getTrip_id());
                tripMember.setUser_id(tripMemberDTO.getUser_id());

                // Fetch Trip by ID
                // Optional<Trip> tripOptional =
                // tripRepository.findById(tripMemberDTO.getTrip().getTrip_id());
                // if (tripOptional.isPresent()) {
                // tripMember.setTrip(tripOptional.get());
                // } else {
                // return "Trip not found!";
                // }
                //
                // // Fetch User by ID
                // Optional<User> userOptional =
                // userRepository.findById(tripMemberDTO.getUser().getUser_id());
                // if (userOptional.isPresent()) {
                // tripMember.setUser(userOptional.get());
                // } else {
                // return "User not found!";
                // }
                tripMemberRepository.save(tripMember);
                return "Trip member added successfully!";
            }
        } catch (Exception e) {
            return "Error adding trip member: " + e.getMessage();
        }
    }
}
