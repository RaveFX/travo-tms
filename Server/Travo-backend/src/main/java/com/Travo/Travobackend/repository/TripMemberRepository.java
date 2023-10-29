package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.TripMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
 public interface TripMemberRepository extends JpaRepository<TripMember, Integer> {

 }

