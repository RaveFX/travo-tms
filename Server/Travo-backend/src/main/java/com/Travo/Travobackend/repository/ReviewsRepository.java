package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewsRepository extends JpaRepository<Reviews, Integer> {
}
