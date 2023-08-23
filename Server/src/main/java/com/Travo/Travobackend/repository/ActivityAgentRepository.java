package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.ActivityAgent;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ActivityAgentRepository extends JpaRepository<ActivityAgent, Integer> {
    Optional<ActivityAgent> findByBrn(String brn);
}
