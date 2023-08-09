package com.travo.travobackend.repository;

import com.travo.travobackend.model.Guide;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuideRepository extends JpaRepository<Guide,Long> {
}
