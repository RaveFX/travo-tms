package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.ReservationDTO;
import com.Travo.Travobackend.model.dto.VehiclesDTO;
import com.Travo.Travobackend.model.entity.HotelAgent;
import com.Travo.Travobackend.model.entity.Reservation;
import com.Travo.Travobackend.model.entity.Room;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.repository.HotelAgentRepository;
import com.Travo.Travobackend.repository.JDBCDao.TravelerOptionJDBCDao;
import com.Travo.Travobackend.repository.ReservationRepository;
import com.Travo.Travobackend.repository.RoomRepository;
import com.Travo.Travobackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TraveleroptionService {

    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private HotelAgentRepository hotelRepository;
    @Autowired
    private UserRepository userRepository;


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
    public List<ReservationDTO>availability (Integer roomId,String boardType) {
        return hotelNameJDBCDao.getAvailability(roomId,boardType);


    }
    public String hotelBooking(ReservationDTO reservationDTO, Integer userId, Integer hotelId, Integer roomId) {
        try{
            Reservation reservation = new Reservation();
//            reservation.setReservation_id(reservationDTO.getReservation_id());
            reservation.setCheckin_date(reservationDTO.getCheckout_date());
            reservation.setCheckout_date(reservationDTO.getCheckout_date());
            reservation.setBoardType(reservationDTO.getBoardType());
            reservation.setPayment(reservationDTO.getPayment());
            reservation.setStatus(reservationDTO.getStatus());

            Optional<Room> roomOptional = roomRepository.findById(roomId);
            Room room = roomOptional.get();
            reservation.setRoom(room);

            Optional<HotelAgent> hotelOptional = hotelRepository.findById(hotelId);
            HotelAgent hotelAgent = hotelOptional.get();
            reservation.setHotelAgent(hotelAgent);

            Optional<User> userOptional = userRepository.findById(userId);
            User user = userOptional.get();
            reservation.setUser(user);

            reservationRepository.save(reservation);
            return("Reservation successfully!");
        }
        catch (Exception e) {
            return("Error: " + e.getMessage());
        }

    }

//    public List<HotelDTO> BookingDetail(Integer hotelId) {
//        return hotelNameJDBCDao.GetBookingDetail(hotelId);
//
//===========================Vehicle====================
        public List<VehiclesDTO> vehicles() {
        return vehiclesJDBCDao.getAllVehicles();
    }
    public List<VehiclesDTO> company() {
        return vehiclesJDBCDao.getVehicleRenter();
    }

    public List<VehiclesDTO> vehicle(Integer vehicleId) {
        return vehiclesJDBCDao.getVehicleTypes(vehicleId);
    }
}
