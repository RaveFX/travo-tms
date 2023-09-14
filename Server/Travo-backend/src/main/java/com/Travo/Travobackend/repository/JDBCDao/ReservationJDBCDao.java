package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class ReservationJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<HotelReservationDTO> getAllHotelReservations() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelReservationDTO> hotelReservations = new ArrayList<>();

        SQL.append("SELECT * FROM reservation");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelReservationDTO hotelReservationDTO = new HotelReservationDTO();

                hotelReservationDTO.setReservation_id(rs.getInt("reservation_id"));
                hotelReservationDTO.setUser_id(rs.getInt("user_id"));
                hotelReservationDTO.setRoom_id(rs.getInt("room_id"));
                hotelReservationDTO.setPayment(rs.getInt("payment"));
                hotelReservationDTO.setStatus(rs.getInt("status"));
                hotelReservationDTO.setCheckin_date(rs.getDate("checkin_date"));



                hotelReservations.add(hotelReservationDTO);
            }
            return hotelReservations;
        });


    }

    public List<HotelReservationDTO> getHotelReservations(Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelReservationDTO> hotelReservations = new ArrayList<>();
        params.put("userID", userID);

        SQL.append("SELECT * FROM reservation\n                                     ");
        SQL.append("INNER JOIN rooms ON reservation.room_id = rooms.room_id        \n");
        SQL.append("INNER JOIN hotel_agent ON rooms.hotel_id = hotel_agent.hotel_id\n");
        SQL.append("WHERE hotel_agent.user_id=:userID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelReservationDTO hotelReservationDTO = new HotelReservationDTO();

                hotelReservationDTO.setReservation_id(rs.getInt("reservation_id"));
                hotelReservationDTO.setDate(rs.getDate("date"));
                hotelReservationDTO.setUser_id(rs.getInt("user_id"));
                hotelReservationDTO.setRoom_id(rs.getInt("room_id"));
                hotelReservationDTO.setPayment(rs.getInt("payment"));
                hotelReservationDTO.setStatus(rs.getInt("status"));
                hotelReservationDTO.setCheckin_date(rs.getDate("checkin_date"));



                hotelReservations.add(hotelReservationDTO);
            }
            return hotelReservations;
        });


    }

    public HotelReservationDTO getReservationDetails(Integer reservationID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        HotelReservationDTO hotelReservationDTO = new HotelReservationDTO();
        params.put("reservationID", reservationID);

        SQL.append("SELECT * FROM reservation\n                                     ");
        SQL.append("INNER JOIN rooms ON reservation.room_id = rooms.room_id        \n");
        SQL.append("INNER JOIN traveler ON reservation.user_id = traveler.traveler_id\n");
        SQL.append("WHERE reservation.reservation_id=:reservationID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {


                hotelReservationDTO.setReservation_id(rs.getInt("reservation_id"));
                hotelReservationDTO.setDate(rs.getDate("date"));
                hotelReservationDTO.setUser_id(rs.getInt("user_id"));
                hotelReservationDTO.setRoom_id(rs.getInt("room_id"));
                hotelReservationDTO.setPayment(rs.getInt("payment"));
                hotelReservationDTO.setStatus(rs.getInt("status"));
                hotelReservationDTO.setCheckin_date(rs.getDate("checkin_date"));
                hotelReservationDTO.setCheckout_date(rs.getDate("checkout_date"));
                hotelReservationDTO.setCheckin_time(rs.getTime("checkin_time"));
                hotelReservationDTO.setFname(rs.getString("fname"));
                hotelReservationDTO.setLname(rs.getString("lname"));
                hotelReservationDTO.setContact_num(rs.getString("contact_num"));
                hotelReservationDTO.setRoom_name(rs.getString("Room_name"));
            }
            return hotelReservationDTO;
        });


    }



}
