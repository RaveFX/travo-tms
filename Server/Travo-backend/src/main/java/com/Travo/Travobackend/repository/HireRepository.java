package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Hire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HireRepository extends JpaRepository<Hire,Integer> {
}
