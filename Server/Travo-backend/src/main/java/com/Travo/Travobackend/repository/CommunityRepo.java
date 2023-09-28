package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Community;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommunityRepo extends JpaRepository<Community, Long> {

    @Query("SELECT c.post_img FROM Community c WHERE c.post_id = :id")
    String findPostImageById(Integer id);

    @Query("SELECT c FROM Community c WHERE c.creator_id = :creatorId")
    List<Community> findPostsByCreatorId(@Param("creatorId") Long creatorId);
}
