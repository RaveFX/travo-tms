package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.HotelAgent;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface HotelAgentRepository extends JpaRepository<HotelAgent, Integer> {
    Optional<HotelAgent> findByBrn(String brn);

}
