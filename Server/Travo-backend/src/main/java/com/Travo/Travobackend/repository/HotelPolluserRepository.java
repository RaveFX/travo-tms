package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.HotelPolluser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface HotelPolluserRepository extends JpaRepository<HotelPolluser, Integer> {
    @Modifying
    @Transactional
    @Query("DELETE FROM HotelPolluser hp WHERE hp.user_id = :userId AND hp.hotelPoll.id = :hotelPollId")
    void deleteByUserIdAndAttractionPollId(@Param("userId") Integer userId, @Param("hotelPollId") Integer hotelPollId);

}
