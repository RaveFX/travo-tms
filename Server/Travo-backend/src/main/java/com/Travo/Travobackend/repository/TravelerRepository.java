package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Traveler;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TravelerRepository extends JpaRepository<Traveler, Integer>{

}
