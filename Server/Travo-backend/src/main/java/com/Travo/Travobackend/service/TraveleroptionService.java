package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.VehiclesDTO;
import com.Travo.Travobackend.repository.JDBCDao.HotelNameJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.VehiclesJDBCDao;
import com.Travo.Travobackend.repository.RoomRepository;
import com.Travo.Travobackend.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TraveleroptionService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private HotelNameJDBCDao hotelNameJDBCDao;

    public List<HotelDTO> hotels(){
        return hotelNameJDBCDao.getAllHotelsName();
    }
}
