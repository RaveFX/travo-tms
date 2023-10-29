package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.HotelPoll;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface HotelPollRepository extends JpaRepository<HotelPoll, Integer> {
}
