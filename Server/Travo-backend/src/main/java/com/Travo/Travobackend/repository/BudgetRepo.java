package com.Travo.Travobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Travo.Travobackend.model.entity.Budget;

public interface BudgetRepo extends JpaRepository<Budget,Integer> {
}
