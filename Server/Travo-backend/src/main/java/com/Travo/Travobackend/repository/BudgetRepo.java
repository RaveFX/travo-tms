package com.Travo.Travobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Travo.Travobackend.model.entity.Budget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BudgetRepo extends JpaRepository<Budget,Integer> {
    @Query("SELECT b FROM Budget b WHERE b.user_id = :userId")
    List<Budget> findByUserId(@Param("userId") int userId);
    List<Budget> findByTripId(int tripId);

}

