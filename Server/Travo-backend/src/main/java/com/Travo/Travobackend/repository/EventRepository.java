package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event,Integer> {
}
