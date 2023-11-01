package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.AttractionPoll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface AttractionPollRepository extends JpaRepository<AttractionPoll, Integer> {

    @Modifying
    @Transactional
    @Query("DELETE  AttractionPoll ap WHERE ap.id = :attractionPollId")
    void deleteByAttractionPollId(@Param("attractionPollId") Integer attractionPollId);
}
