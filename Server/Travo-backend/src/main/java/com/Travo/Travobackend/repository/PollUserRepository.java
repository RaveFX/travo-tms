package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.PollUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface PollUserRepository extends JpaRepository<PollUser, Integer> {
    @Modifying
    @Transactional
    @Query("DELETE FROM PollUser p WHERE p.user_id = :userId AND p.attractionPoll.id = :attractionPollId")
    void deleteByUserIdAndAttractionPollId(@Param("userId") Integer userId, @Param("attractionPollId") Integer attractionPollId);

    @Query(value = "SELECT EXISTS(SELECT 1 FROM poll_user WHERE user_id = :userId AND attractionpoll_id  = :AttactionPollId)", nativeQuery = true)
    String existsByUserIdAndAttactionPollId(@Param("userId") Integer userId, @Param("AttactionPollId") Integer AttactionPollId);

}

