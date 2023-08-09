package com.travo.travobackend.repository;

import com.travo.travobackend.model.Traveller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravellerRepository extends JpaRepository<Traveller,Long> {
}
