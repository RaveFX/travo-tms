package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.VehicleRenterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class HotelJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<HotelDTO> getHotelList() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();

        SQL.append("SELECT * FROM hotel_agent");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setTotal_reviews(rs.getDouble("total_reviews"));

                hotels.add(hotelDTO);
            }
            return hotels;
        });


    }

    public List<HotelDTO> getSelectedHotelList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT hotel_agent.hotel_id, hotel_agent.hotel_name, hotel_agent.description, hotel_agent.hotel_img, hotel_agent.total_reviews, trip_hotel.id, trip_hotel.day  FROM trip_hotel  \n");
        SQL.append("INNER JOIN hotel_agent ON trip_hotel.hotel_id = hotel_agent.hotel_id        \n");
        SQL.append("WHERE trip_hotel.trip_id=:tripID AND trip_hotel.day=:day       \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setTotal_reviews(rs.getDouble("total_reviews"));
                hotelDTO.setRow_id(rs.getInt("id"));
                hotelDTO.setDay(rs.getInt("day"));

                hotels.add(hotelDTO);
            }
            return hotels;
        });

    }

    public List<HotelDTO> getSchedule_SelectedHotelList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT hotel_agent.hotel_id, hotel_agent.hotel_name,trip_hotel.id, trip_hotel.day  FROM trip_hotel  \n");
        SQL.append("INNER JOIN hotel_agent ON trip_hotel.hotel_id = hotel_agent.hotel_id        \n");
        SQL.append("WHERE trip_hotel.trip_id=:tripID AND trip_hotel.day=:day       \n");
        SQL.append("AND trip_hotel.hotel_id NOT IN (SELECT type_id FROM trip_schedule WHERE trip_id=:tripID AND day=:day AND type='hotel')       \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setRow_id(rs.getInt("id"));
                hotelDTO.setDay(rs.getInt("day"));

                hotels.add(hotelDTO);
            }
            return hotels;
        });

    }


    public List<HotelDTO> getPendingHotel(Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<VehicleRenterDTO> users = new ArrayList<>();
        params.put("userID", userID);

        SQL.append("SELECT * FROM hotel_agent  \n");
        SQL.append("WHERE user_id=:userID \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO dto = new HotelDTO();

                dto.setHotel_id(rs.getInt("Hotel_id"));
                dto.set(rs.getString("company_name"));
                dto.setBrn(rs.getString("brn"));
                dto.setDescription(rs.getString("description"));
                dto.setContact_num(rs.getString("contact_num"));
                dto.setAddressLine1(rs.getString("address_line1"));
                dto.setAddressLine2(rs.getString("address_line2"));
                dto.setCity(rs.getString("city"));
                dto.setPostal_code(rs.getInt("postal_code"));
                dto.setDistrict(rs.getString("district"));
                dto.setStatus(Status.valueOf(rs.getString("status"))); // Assuming 'Status' is an enum type in your DTO
                dto.setMembership(Membership.valueOf(rs.getString("membership"))); // Assuming 'Membership' is an enum type in your DTO
                dto.setUser_id(rs.getInt("user_id"));


                users.add(dto);
            }
            return users;
        });


    }
}
