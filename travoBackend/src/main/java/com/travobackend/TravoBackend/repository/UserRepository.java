package com.travobackend.TravoBackend.repository;

import com.travobackend.TravoBackend.modal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
