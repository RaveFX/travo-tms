package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Integer> {
}
