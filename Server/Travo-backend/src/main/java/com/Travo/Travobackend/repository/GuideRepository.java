package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Guide;
import com.Travo.Travobackend.model.entity.StoreManager;
import com.Travo.Travobackend.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface GuideRepository extends JpaRepository<Guide, Integer> {
    Optional<Guide> findById(Integer guide_id);

    @Query("SELECT g FROM Guide g WHERE g.user = :user")
    Optional<Guide> findByUserId(User user);

    @Query("SELECT g FROM Guide g WHERE g.user = :user AND g.status ='ACTIVE'")
    Optional<Guide> findByUserIdAndStatus(User user);


}
