package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.VehiclesDTO;
import com.Travo.Travobackend.repository.JDBCDao.TravelerOptionJDBCDao;
import com.Travo.Travobackend.repository.ReservationRepository;
import com.Travo.Travobackend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TraveleroptionService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private TravelerOptionJDBCDao hotelNameJDBCDao;
    @Autowired
    private TravelerOptionJDBCDao vehiclesJDBCDao;

    public List<HotelDTO> hotels() {
        return hotelNameJDBCDao.getAllHotelsName();
    }

    public List<HotelDTO> types(Integer hotelId) {
        return hotelNameJDBCDao.getAllHotelsType(hotelId);


    }
    public List<HotelDTO> hotelDetails(Integer hotelId, Integer roomId) {
        return hotelNameJDBCDao.getHotelsDetail(hotelId,roomId);


    }
    public List<HotelDTO> basics(Integer hotelId) {
        return hotelNameJDBCDao.getHotelBasics(hotelId);


    }
//    public String HotelBooking(Integer hotelId) {
//        return hotelNameJDBCDao.hotelbooking(hotelId);
//
//
//    }

    public List<VehiclesDTO> vehicles() {
        return vehiclesJDBCDao.getAllVehicles();
    }
}
