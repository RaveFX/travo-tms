package com.Travo.Travobackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Travo.Travobackend.model.entity.TripMember;

@Repository
public interface TripMembersRepository extends JpaRepository<TripMember, Integer> {
    // Define any custom queries or methods if needed
}
