package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.TripMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripMemberRepository extends JpaRepository<TripMember, Integer> {
}
