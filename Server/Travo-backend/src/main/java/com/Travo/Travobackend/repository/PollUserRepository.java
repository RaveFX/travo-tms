package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.PollUser;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PollUserRepository extends JpaRepository<PollUser, Integer> {
}
