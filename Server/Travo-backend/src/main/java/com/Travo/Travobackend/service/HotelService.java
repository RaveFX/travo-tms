package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.RoomDTO;
import com.Travo.Travobackend.model.entity.Reservation;
import com.Travo.Travobackend.repository.JDBCDao.ReservationJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.RoomJDBCDao;
import com.Travo.Travobackend.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private ReservationJDBCDao reservationJDBCDao;

    @Autowired
    private RoomJDBCDao roomJDBCDao;

//    public List<HotelReservationDTO> hotelReservations(){
//        return reservationJDBCDao.getAllHotelReservations();
//    }

    public List<HotelReservationDTO> hotelOwnerReservations(Integer userID) {
        return reservationJDBCDao.getHotelReservations(userID);
    }

    public HotelReservationDTO reservationDetails(Integer reservationID){
        return reservationJDBCDao.getReservationDetails(reservationID);
    }

    public List<RoomDTO> hotelRooms(Integer userID){
        return roomJDBCDao.getRooms(userID);
    }




}
