package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.TripMembers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripMemberRepository extends JpaRepository<TripMembers, Integer> {
}