package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.HotelAgent;

import com.Travo.Travobackend.model.entity.StoreManager;
import com.Travo.Travobackend.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface HotelAgentRepository extends JpaRepository<HotelAgent, Integer> {
    Optional<HotelAgent> findByBrn(String brn);

    Optional<HotelAgent> findById(Integer hotel_id);

    @Query("SELECT s FROM HotelAgent s WHERE s.user = :user")
    Optional<HotelAgent> findByUserId(User user);

    @Query("SELECT s FROM HotelAgent s WHERE s.user = :user AND s.status ='ACTIVE'")
    Optional<HotelAgent> findByUserIdAndStatus(User user);

}
