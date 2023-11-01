package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.ActivityAgent;

import com.Travo.Travobackend.model.entity.StoreManager;
import com.Travo.Travobackend.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ActivityAgentRepository extends JpaRepository<ActivityAgent, Integer> {
    Optional<ActivityAgent> findByBrn(String brn);

    Optional<ActivityAgent> findById(Integer agent_id);

    @Query("SELECT a FROM ActivityAgent a WHERE a.user = :user")
    Optional<ActivityAgent> findByUserId(User user);

    @Query("SELECT a FROM ActivityAgent a WHERE a.user = :user AND a.status ='ACTIVE'")
    Optional<ActivityAgent> findByUserIdAndStatus(User user);

}
