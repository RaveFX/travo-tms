package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.entity.Reservation;
import com.Travo.Travobackend.repository.HotelAgentRepository;
import com.Travo.Travobackend.repository.JDBCDao.HotelJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.ReservationJDBCDao;
import com.Travo.Travobackend.repository.ReservationRepository;
import com.Travo.Travobackend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.Travo.Travobackend.repository.JDBCDao.HotelJDBCDao;


import java.util.List;

@Service
public class HotelService {
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private HotelAgentRepository hotelAgentRepository;

    @Autowired
    private ReservationJDBCDao reservationJDBCDao;
//    @Autowired
    private HotelJDBCDao hotelJDBCDao;


    public List<HotelReservationDTO> hotelReservations(){
        return reservationJDBCDao.getAllHotelReservations();
    }

    public List<HotelDTO> hotels(){
        return hotelJDBCDao.getAllHotels();
    }

}
