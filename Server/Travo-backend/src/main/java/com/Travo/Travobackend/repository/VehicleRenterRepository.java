package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.HotelAgent;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.model.entity.VehicleRenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface VehicleRenterRepository extends JpaRepository<VehicleRenter, Integer> {
    Optional<VehicleRenter> findByBrn(String brn);

    Optional<VehicleRenter> findById(Integer renter_id);

    @Query("SELECT s FROM VehicleRenter s WHERE s.user = :user")
    Optional<VehicleRenter> findByUserId(User user);

    @Query("SELECT s FROM VehicleRenter s WHERE s.user = :user AND s.status ='ACTIVE'")
    Optional<VehicleRenter> findByUserIdAndStatus(User user);
}
