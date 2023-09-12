package com.Travo.Travobackend.repository;
import com.Travo.Travobackend.model.entity.StoreManager;
import com.Travo.Travobackend.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface StoreManagerRepository extends JpaRepository<StoreManager, Integer> {
    Optional<StoreManager> findByBrn(String brn);

    Optional<StoreManager> findById(Integer store_id);
    @Query("SELECT s FROM StoreManager s WHERE s.user = :user")
    Optional<StoreManager> findByUserId(User user);

    @Query("SELECT s FROM StoreManager s WHERE s.user = :user AND s.status ='ACTIVE'")
    Optional<StoreManager> findByUserIdAndStatus(User user);

}
