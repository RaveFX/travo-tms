package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Guide;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuideRepository extends JpaRepository<Guide, Integer> {
}
