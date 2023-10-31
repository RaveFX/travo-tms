package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.entity.TripMember;
import com.Travo.Travobackend.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
 
import java.util.Optional;

public interface TripMemberRepository extends JpaRepository<TripMember, Integer> {
    Optional<TripMember> findByUserAndTrip(User user, Trip trip);
}
