package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.TripMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
 public interface TripMemberRepository extends JpaRepository<TripMember, Integer> {
 @Query("SELECT CASE WHEN COUNT(tm) > 0 THEN true ELSE false END FROM TripMember tm WHERE tm.user_id = :userId AND tm.trip_id = :tripId")
 boolean existsByUserIdAndTripId(@Param("userId") Integer userId, @Param("tripId") Integer tripId);
 }

