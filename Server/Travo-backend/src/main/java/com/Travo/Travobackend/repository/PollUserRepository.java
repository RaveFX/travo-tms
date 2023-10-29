package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.PollUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface PollUserRepository extends JpaRepository<PollUser, Integer> {
    @Modifying
    @Query("DELETE FROM PollUser p WHERE p.hotelPoll.id = :hotelpollId")
    void deleteByHotelpollId(@Param("hotelpollId") Integer hotelpollId);
}