package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Community;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityRepo extends JpaRepository<Community, Long> {
}
