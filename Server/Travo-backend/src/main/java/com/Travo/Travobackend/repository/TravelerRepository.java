package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Traveler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;

public interface TravelerRepository extends JpaRepository<Traveler, Integer>{

    @Query("SELECT t.firstname, t.lastname FROM Traveler t WHERE t.user_id = :creatorId")
    String findUsernameByTravelerId(int creatorId);

    @Query("SELECT t FROM Traveler t WHERE t.user_id = :travelerId")
    Traveler findDetailsById(Integer travelerId);

    @Query("SELECT t.profileImage FROM Traveler t WHERE t.user_id = :travelerId")
    String findImageById(Integer travelerId);
}
