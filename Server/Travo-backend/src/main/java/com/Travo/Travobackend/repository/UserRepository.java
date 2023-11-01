package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);

    Optional<User> findById(Integer user_id);


    @Query("SELECT u FROM User u WHERE u.email = :email AND u.status = 'ACTIVE'")
    Optional<User> findByEmailAndStatus(String email);


    @Query("SELECT u.email FROM User u WHERE u.user_id = :id")
    String getEmailById(Integer id);

}
